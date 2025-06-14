# 🐦 Twitter Clone

A full-stack Twitter-style social media app built with React, Vite, Tailwind, and Express — featuring authentication, posting, likes, comments, follow system, image uploads, and more.

🌍 **Live Demo**  
👉 [twitter-clone-i2yb.onrender.com](https://twitter-clone-i2yb.onrender.com)

---

## ⚙️ Tech Stack

- **Frontend:** React, Vite, TailwindCSS, DaisyUI, React Router, React Query
- **Backend:** Node.js, Express, MongoDB (with Mongoose)
- **Auth:** JSON Web Tokens (JWT), cookies
- **Image Uploads:** Base64 or Cloudinary (optional)
- **Deployment:** Render

---

## ✨ Features

- 🔐 Secure login & signup (with hashed passwords)
- 📝 Create, delete, and like posts
- 💬 Comment system
- 🧑‍🤝‍🧑 Follow/unfollow users
- 🖼️ Profile & cover image uploads
- 📱 Responsive design for desktop & mobile
- ⚡ Instant UI feedback with React Query

---

## 🛠️ Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/twitter-clone.git
   cd twitter-clone

---

- Install dependencies

- Backend:
  cd backend
  npm install

- Frontend:
  cd frontend
  npm install

---

# backend/.env.example
PORT=3000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-super-secret-key
CLOUDINARY_API_KEY=your-key

---

- Folder Structure:
  root/
├── backend/
│   └── server files (Express, DB models, routes)
├── frontend/
│   └── client-side app (React + Vite)
├── public/
│   └── static assets
