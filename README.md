# ✨ VerseAI — AI Poetry Studio


---

## 📖 About

**VerseAI** is a modern AI-powered poetry generation web application that transforms simple ideas and topics into creative poems.

Users can enter a topic, select a **mood** and **writing style**, and generate an original poem using AI. The application combines a responsive modern interface with smooth animations, theme switching, and convenient poem management features.

The application is built with **Python Flask** on the backend and integrates the **OpenRouter API** for AI-powered poem generation.

---

## 🌐 Live Demo

### 🚀 [Open VerseAI](https://verse-ai-indol.vercel.app/)

The application is deployed and hosted on **Vercel**.

> **Note:** AI poem generation requires a valid OpenRouter API configuration on the deployed application.

---

## ✨ Features

### 🤖 AI Poetry Generation

* Generate poems from custom topics
* AI-powered poem generation using OpenRouter
* Custom mood selection
* Multiple writing styles
* Context-aware generation prompts

### 🎨 Modern User Interface

* Clean and minimal design
* Responsive layout
* Modern card-based interface
* Soft visual effects and gradients
* Smooth transitions and animations
* Dark / Light mode

### ⚡ Interactive Experience

* Animated hero headline
* Animated topic placeholder
* Character counter
* Loading animation during poem generation
* Smooth poem reveal animation
* Generate another poem

### 📋 Poem Management

* Copy generated poems to clipboard
* Download poems as `.txt` files
* Easily generate new poems

### 🔐 Security

* API keys stored using environment variables
* `.env` excluded from Git
* No API credentials hard-coded in the source code

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask

### AI Integration

* OpenRouter API
* OpenAI Python SDK

### Deployment

* Vercel

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

## 🔄 How It Works

VerseAI follows a simple request-and-generation workflow:

```text
┌──────────────────────┐
│    User enters topic │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Select mood/style  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  Frontend sends data │
│      to Flask        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Flask builds AI    │
│       prompt         │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   OpenRouter API     │
│   generates poem     │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Poem returned to   │
│      the user        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Copy / Download /    │
│ Generate Again       │
└──────────────────────┘
```

---

## 🎭 Mood Options

VerseAI allows users to control the emotional direction of the generated poem.

Available moods include:

* 😊 Happy
* 💙 Sad
* ❤️ Romantic
* 🌙 Mysterious
* 🌿 Calm
* ✨ Inspirational

---

## ✍️ Writing Styles

Users can select a writing style to influence how the poem is generated.

The selected:

* Topic
* Mood
* Writing style

are sent to the Flask backend and included in the AI generation prompt.

---

## 🎨 User Interface

VerseAI includes:

* Responsive design
* Dark and light themes
* Animated hero section
* Animated topic suggestions
* Interactive mood selection
* Interactive writing-style selection
* Loading state
* Smooth poem reveal
* Copy and download actions
* Mobile-friendly layout

---

## 🔑 API Configuration

VerseAI uses the **OpenRouter API** for AI-powered poem generation.

Create a `.env` file in the project root:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your own OpenRouter API key.

### ⚠️ Security Notice

**Never commit your `.env` file or API key to GitHub.**

The project includes `.env` in `.gitignore`:

```text
.env
```

This prevents the API key from being accidentally committed to the repository.

---

## ⚙️ Local Installation

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

### Windows PowerShell

```powershell
venv\Scripts\activate
```

### Windows Command Prompt

```cmd
venv\Scripts\activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Configure the API Key

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key_here
```

---

### 5. Run the Application

```bash
python app.py
```

The application will normally be available at:

```text
http://127.0.0.1:5000
```

Open the address in your browser.

---

## 💻 Example

A user could enter:

```text
A rainy evening in Tokyo
```

Then select:

```text
Mood: Happy
Style: Free Verse
```

VerseAI sends the information to the Flask backend, which generates a poem using the configured AI model through OpenRouter.

---

## 🚀 Deployment

VerseAI is deployed using **Vercel**.

### Production

**Live Application:**

https://verse-ai-indol.vercel.app/

### Deployment Flow

```text
GitHub Repository
       ↓
     Vercel
       ↓
Python / Flask Application
       ↓
Production Deployment
       ↓
Live Web Application
```

Environment variables such as the OpenRouter API key are configured through the deployment environment rather than stored in the repository.

---

## 🔐 Security Practices

The project follows basic security practices for API-based applications:

* API credentials are stored in environment variables
* `.env` is excluded from version control
* API keys are not hard-coded
* Sensitive configuration is separated from source code

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🎤 Voice-to-topic input
* 🌍 Multiple language support
* 💾 Save generated poems
* 👤 User authentication
* 📚 Personal poem library
* 🖼️ AI-generated artwork for poems
* 📄 PDF poem export
* ⭐ Favorite poems
* 📤 Social sharing
* 🎵 Optional background music
* 📊 Poetry generation history

---

## 🎓 Project Purpose

VerseAI was developed as a portfolio project to demonstrate practical software engineering skills including:

* Web application development
* Python and Flask
* Frontend development
* JavaScript
* REST API communication
* AI API integration
* Environment variable management
* Git and GitHub
* Responsive UI design
* Cloud deployment

---

## 👩‍💻 Author

### Savinthi Abeygunawardena

**Software Engineering Undergraduate**


