<h1 align="center">✨ Slack Clone with Chat & Video Calling ✨</h1>

Highlights:

- 💬 Real-time Messaging with Threads, Reactions & Pinned Messages
- 📂 File Sharing (Images, PDFs, ZIPs & more)
- 📊 Polls with Multiple Options, Anonymous Mode, Suggestions & Comments
- 🔐 Clerk Authentication with Secure User Management
- 📨 Direct Messages & Private Channels
- 📹 1-on-1 and Group Video Calls with Screen Sharing & Recording
- 🎉 Real-time Reactions during Calls
- 🔧 Background Jobs powered by Inngest
- 🚨 Production-grade Error Monitoring with Sentry
- 🤖 AI-powered Code Suggestions with CodeRabbit
- 🚀 Free Deployment Setup
- 🎯 Built with Scalable Technologies like Stream
- ⏳ And much more!

---

## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here

SENTRY_DSN=your_sentry_dsn_here

INNGEST_EVENT_KEY=your_inngest_event_key_here
INNGEST_SIGNING_KEY=your_inngest_signing_key_here

CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend`)

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_STREAM_API_KEY=your_stream_api_key_here
VITE_SENTRY_DSN=your_sentry_dsn_here
VITE_API_BASE_URL=http://localhost:5001/api
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
