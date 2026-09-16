import os

from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)

api_key = os.getenv("OPENROUTER_API_KEY")

if not api_key:
    raise ValueError("OPENROUTER_API_KEY is missing.")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=api_key
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate", methods=["POST"])
def generate():
    try:
        data = request.get_json()

        topic = data.get("topic", "").strip()
        mood = data.get("mood", "Happy")
        style = data.get("style", "Free Verse")

        if not topic:
            return jsonify({
                "error": "Please enter a poem topic."
            }), 400

        prompt = f"""
Create an original poem about: {topic}

Mood: {mood}
Style: {style}

Requirements:
- Give the poem a creative title.
- Write 12 to 20 lines.
- Use vivid and meaningful imagery.
- Make it original.
- Do not explain the poem.
- Return only the title and poem.
"""

        response = client.chat.completions.create(
            model="openrouter/free",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        poem = response.choices[0].message.content

        return jsonify({
            "poem": poem
        })

    except Exception as e:
        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )