# SmartHire 🎯 — AI Job Application Tracker (Backend)

> REST API backend for SmartHire — built with Node.js, Express.js, MongoDB and Groq AI.

🔗 **Live API:** [smarthire-backend-8hgc.onrender.com](https://smarthire-backend-8hgc.onrender.com)  
🔗 **Frontend Repo:** [github.com/Prathiba-Mii/smarthire-frontend](https://github.com/Prathiba-Mii/smarthire-frontend)

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure signup & login with bcrypt password hashing
- 📋 **Job CRUD API** — Create, Read, Update, Delete job applications
- 🤖 **AI Cover Letter API** — Groq API integration (Llama 3.3 70B)
- 🛡️ **Protected Routes** — Middleware-based auth for all job routes
- 🌍 **CORS Configured** — Ready for frontend deployment on Vercel

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Groq SDK | AI cover letter generation |
| dotenv | Environment variables |

---

## 📡 API Endpoints

### Auth Routes `/api/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new user |
| POST | `/login` | Login user, returns JWT token |

### Job Routes `/api/jobs` *(Protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all jobs for logged-in user |
| POST | `/` | Add new job application |
| PUT | `/:id` | Update job status |
| DELETE | `/:id` | Delete job application |

### AI Routes `/api/ai` *(Protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/cover-letter` | Generate AI cover letter using Groq |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Prathiba-Mii/smarthire-backend.git

# Navigate to project folder
cd smarthire-backend

# Install dependencies
npm install

# Start server
node server.js
```

### Environment Setup
Create a `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/smarthire
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
```

---

## 📁 Project Structure

```
backend/
├── middleware/
│   └── auth.js          # JWT verification middleware
├── models/
│   ├── User.js          # User schema
│   └── Job.js           # Job schema
├── routes/
│   ├── auth.js          # Signup & Login routes
│   ├── jobs.js          # Job CRUD routes
│   └── ai.js            # Groq AI cover letter route
├── .env                 # Environment variables
├── server.js            # Entry point
└── package.json
```

---

## 🔗 Related

- 🖥️ **Frontend:** [smarthire-frontend](https://github.com/Prathiba-Mii/smarthire-frontend) — React.js + Tailwind CSS
- 👩‍💻 **Developer:** [Prathiba Kamle](https://github.com/Prathiba-Mii)

---

## 👩‍💻 Developer

**Prathiba Kamle**  
Full Stack Developer | MERN Stack  
🔗 [LinkedIn](https://www.linkedin.com/in/prathiba-kamle-693b4b2a4/) | [GitHub](https://github.com/Prathiba-Mii)

---

⭐ If you like this project, give it a star!
