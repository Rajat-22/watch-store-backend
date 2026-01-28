# ⌚ Watch Store Backend | Node.js, Express & MongoDB E-commerce API

A **Node.js + Express.js backend API** for a **Watch Store E-commerce application**, built using **MongoDB**. It handles **authentication, product management, orders, and user roles**. This project is scalable, beginner-friendly, and easy to integrate with frontend frameworks like **React, Vue, or Angular**.

---

## 📌 Project Overview

**Keywords:** Node.js backend, Express API, MongoDB e-commerce backend, Watch Store API, REST API, JWT authentication

**Watch Store Backend** provides REST APIs required for running an e-commerce watch store. It focuses on clean structure, modular code, and common backend best practices.

This backend can be used by:

* Frontend developers building an e-commerce UI
* Learners understanding backend architecture
* Recruiters reviewing full‑stack or backend skills

---

## 🧰 Tech Stack

**Backend Technologies & Tools**

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for APIs
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB object modeling
* **JWT** – Authentication & authorization
* **bcrypt** – Password hashing
* **dotenv** – Environment variable management

---

## ✨ Features

**Core Backend Features**

* 🔐 User authentication (JWT based)
* 👤 User roles & access control
* ⌚ Watch product management (CRUD)
* 🛒 Order handling
* 📦 Structured REST APIs
* ⚙️ Environment‑based configuration

---

## 📁 Project Structure

```
watch-store-backend/
│
├── controllers/     # Request handling logic
├── models/          # Mongoose schemas
├── routes/          # API routes
├── middleware/      # Auth & custom middleware
├── config/          # Database & app config
├── utils/           # Helper functions
├── .env             # Environment variables
├── server.js        # App entry point
└── package.json     # Dependencies & scripts
```

---

## 🚀 Getting Started (Local Development Setup)

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rajat-22/watch-store-backend.git
cd watch-store-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Do not commit `.env` to GitHub

---

## ▶️ Run the Server

```bash
npm start
```

or (for development)

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## 📡 REST API Endpoints (Sample)

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register user   |
| POST   | /api/auth/login    | Login user      |
| GET    | /api/watches       | Get all watches |
| POST   | /api/watches       | Add new watch   |
| PUT    | /api/watches/:id   | Update watch    |
| DELETE | /api/watches/:id   | Delete watch    |

> Full API details can be expanded further.

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code)
* REST Client

---

## 🌐 Frontend Integration (React / Vue / Angular Ready)

This backend is frontend‑agnostic and can be easily connected with:

* React
* Vue
* Angular
* Mobile apps

Make sure to handle:

* JWT tokens in headers
* Protected routes

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Open a Pull Request

---

## 📄 License

This repository is open-source and suitable for learning, portfolio projects, and production-ready extensions.

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author & Maintainer

**Rajat Sharma**
GitHub: [@Rajat-22](https://github.com/Rajat-22)

---

⭐ If you find this project helpful, don’t forget to star the repository!
