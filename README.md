# YouTube Trending Search

This project is a lightweight web application built with **Next.js** (fullstack solution) using the **App Router**. It integrates the **YouTube Data API v3** to search for trending videos and provides results through a **Telegram bot**.

## Tech Stack
- **Frontend & Backend:** Next.js (Fullstack solution)
- **API Integration:** YouTube Data API v3
- **Messaging:** Telegram Bot
- **Deployment:** Docker & GitHub Actions

For medium and large-scale projects, I prefer a stack of:
- **Next.js (frontend)**  
- **ASP.NET Core (backend)**  
- **PostgreSQL (database)**  
This stack provides the most powerful combination for **speed, security, performance, and scalability**.

## Getting Started

### 1. Clone the repository
```bash
 git clone https://github.com/coolcakev/youtube-trending-search.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
Add your API keys to the `.env` file with the following content:
```
YOUTUBE_API_KEY=your_youtube_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
```

### 4. Run the development server
```bash
npm run dev
```

## Deployment
This project includes a **Dockerfile** and **GitHub Action** for automatic deployment:
- **Dockerfile:** Defines the container environment.
- **GitHub Action:** Logs in to Docker Hub, builds the image, and pushes it automatically.

To deploy the project to a virtual machine:
1. Build and push the Docker image to Docker Hub using the GitHub Action.
2. Pull the image on your server and run it using Docker.

## License
MIT
