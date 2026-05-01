# 🌐 Portfolio Website with Email Queue System

A full-stack portfolio website featuring a contact form powered by a **queue-based email system** using Redis and BullMQ.
Designed for scalability and reliability, ensuring messages are processed asynchronously.

---

## 🚀 Features

* 🖥️ Modern responsive portfolio UI (React + Vite)
* 📬 Contact form with validation
* ⚡ Asynchronous email handling using **BullMQ + Redis**
* 🔁 Background worker for processing emails
* 🔐 Secure email sending via **Nodemailer + Gmail App Password**
* ☁️ Cloud-ready architecture (Frontend + Backend + Queue separation)

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Chakra UI
* CSS / Tailwind (optional usage)
* Fetch API

### Backend

* Node.js
* Express.js
* Nodemailer

### Queue & Messaging

* BullMQ
* Redis (Upstash)

### Tools

* Nodemon (dev)
* dotenv

---

## 🏗️ Architecture

```
Frontend (React - Cloudflare Pages)
        ↓
Backend API (Express)
        ↓
Queue (BullMQ + Redis)
        ↓
Worker (Node.js background process)
        ↓
Email sent via Nodemailer
```

### Flow Explanation

1. User submits contact form
2. Backend receives request (`/api/contact`)
3. Job is added to Redis queue
4. Worker processes job asynchronously
5. Email is sent via Nodemailer

---

## 📁 Project Structure

```
MyPortfolio/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   └── package.json
│
├── server/                # Backend + Queue
│   ├── controllers/
│   ├── routes/
│   ├── queue/
│   │   ├── emailQueue.js
│   │   ├── emailWorker.js
│   │   └── redisClient.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside `/server`:

```
PORT=5000

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

REDIS_URL=rediss://default:<password>@<your-upstash-url>:6379
```

> ⚠️ Use **Gmail App Password**, not your actual Gmail password.

---

## 🧪 Running the Project Locally

### 1️⃣ Clone the repo

```bash
git clone <your-repo-url>
cd MyPortfolio
```

---

### 2️⃣ Run Backend (API)

```bash
cd server
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

### 3️⃣ Run Worker (IMPORTANT)

Open another terminal:

```bash
cd server
node queue/emailWorker.js
```

> ⚠️ Without this, emails will NOT be sent.

---

### 4️⃣ Run Frontend

```bash
cd client
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoint

```
POST /api/contact
```

### Request Body

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

---

## 🌍 Deployment Notes

### Frontend

* Hosted on **Cloudflare Pages**

### Backend (Required)

* Must be deployed separately (Render / Railway / Fly.io)

### Worker (Critical)

* Must run as a background service

### Redis

* Hosted on **Upstash**

---

## ⚠️ Important Notes

* Cloudflare Pages **cannot run backend code**
* Worker must always be running
* Redis URL must be correct and active
* Emails may go to **Spam** initially

---

## 📈 Future Improvements

* Add retry mechanism for failed jobs
* Add email templates
* Add rate limiting
* Add logging dashboard for queue
* Add authentication (admin panel)

---

## 👩‍💻 Author

**Sayani Sen**
Frontend Developer | Aspiring Full Stack Developer

---

## ⭐ Summary

This project demonstrates:

* Full-stack development
* Asynchronous job processing
* Real-world scalable architecture
* Integration of frontend, backend, and queue systems

---

> 🚀 Built with a focus on scalability, reliability, and real-world architecture patterns.
