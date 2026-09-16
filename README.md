# ✨ VerseAI — AI Poetry Studio

VerseAI is a modern **AI-powered poetry generation web application** that transforms simple ideas and topics into creative poems.

Users can enter a topic, select a mood and writing style, and generate an original poem using AI. The application provides a clean, responsive interface with dark mode, smooth animations, copy and download features.

---

## 🌐 Live Repository

[VerseAI on GitHub](https://github.com/sa-minz/VerseAI?utm_source=chatgpt.com)

---

## ✨ Features

* 🤖 AI-powered poem generation
* 💭 Generate poems from custom topics
* 🎭 Multiple mood options
* ✍️ Multiple writing styles
* ⚡ Loading animation while generating
* 📝 Animated topic placeholder
* ✨ Animated hero headline
* 📋 Copy generated poems
* 📥 Download poems as `.txt` files
* 🔄 Generate another poem
* 🌙 Dark / Light mode
* 📱 Responsive design
* 🎨 Modern and minimal user interface
* 🔐 Secure API key management using environment variables

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask

### AI

* OpenRouter API
* OpenAI Python SDK

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Python Virtual Environment

---

## 📁 Project Structure

```text
VerseAI/
│
├── static/
│   ├── script.js
│   └── style.css
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sa-minz/VerseAI.git
```

Move into the project directory:

```bash
cd VerseAI
```

---

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment.

#### Windows PowerShell

```powershell
venv\Scripts\activate
```

#### Windows Command Prompt

```cmd
venv\Scripts\activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🔑 API Configuration

VerseAI uses the **OpenRouter API** to generate poems.

Create a `.env` file in the project root:

```text
OPENROUTER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your own OpenRouter API key.

### ⚠️ Important

Never upload your `.env` file or API key to GitHub.

The project already includes `.env` in `.gitignore` to help prevent accidentally exposing the API key.

---

## ▶️ Run the Application

Activate your virtual environment:

```powershell
venv\Scripts\activate
```

Then start the Flask server:

```bash
python app.py
```

The application will normally be available at:

```text
http://127.0.0.1:5000
```

Open the address in your web browser.

---

## 🖥️ How It Works

The application follows a simple workflow:

```text
User enters a topic
        ↓
User selects mood
        ↓
User selects writing style
        ↓
VerseAI sends the request to Flask
        ↓
Flask sends the prompt to OpenRouter
        ↓
AI generates the poem
        ↓
Generated poem is displayed
        ↓
User can copy, download, or generate again
```

---

## 🎭 Mood Options

VerseAI allows users to choose the emotional direction of the poem, such as:

* Happy
* Sad
* Romantic
* Mysterious
* Calm
* Inspirational

---

## ✍️ Writing Styles

Users can select different poetry styles to customize the generated poem.

The selected topic, mood, and writing style are sent to the AI as part of the generation prompt.

---

## 🎨 User Interface

VerseAI includes:

* Modern card-based design
* Soft background effects
* Responsive layout
* Dark and light themes
* Smooth transitions
* Loading state
* Animated text
* Mobile-friendly interface

---

## 🔐 Security

Sensitive API credentials are stored using environment variables instead of being hard-coded into the application.

The `.env` file is excluded from Git using:

```text
.env
```

This helps prevent API credentials from being committed to the repository.

---

## 🚀 Future Improvements

Possible future enhancements include:

* 🎤 Voice-to-topic input
* 🌍 Multiple language support
* 💾 Save generated poems
* 👤 User accounts
* 📚 Personal poem library
* 🖼️ AI-generated poem artwork
* 📄 PDF poem export
* ⭐ Favorite poems
* 📤 Social sharing
* 🎵 Background music options

---

## 🎓 Project Purpose

VerseAI was developed as a portfolio project to demonstrate practical skills in:

* Web application development
* Python and Flask
* Frontend development
* REST API communication
* AI API integration
* Environment variable management
* Git and GitHub
* Responsive UI design

---

## 👩‍💻 Author

**Savinthi Abeygunawardena**

Software Engineering Undergraduate


