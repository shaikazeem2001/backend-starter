# 🚀 Express + MongoDB Node.js Backend Starter Template

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.19-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8-darkgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange?style=for-the-badge&logo=jsonwebtokens)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> A production-ready, clean-architecture backend starter boilerplate for Node.js and Express REST APIs. Includes pre-configured MongoDB Mongoose connection, JWT authorization middleware, CORS setup, HTTP-only cookie parsing, and global error handling.

---

## 🏗️ Architecture & Folder Structure

```text
backend-starter/
├── src/
│   ├── config/
│   │   └── db.js                # MongoDB connection handler
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT authorization & token verification
│   │   └── errorMiddleware.js   # Centralized error handler
│   └── server.js                # Express app initialization & route registration
├── .env.example                 # Environment variables template
├── package.json                 # Project dependencies & script setup
└── README.md
```

---

## ✨ Features

- 🔐 **JWT Authentication Middleware**: Token verification supporting both Bearer authorization header & HTTP-only cookies.
- 🗄️ **MongoDB Mongoose Integration**: Clean database connection lifecycle with auto-reconnect and error logging.
- 🌐 **CORS & Cookie-Parser Ready**: Configured for cross-origin credential passing and cookie handling.
- ⚡ **Global Error Handling**: Standardized JSON error response handler masking stack traces in production.

---

## 🚀 Quickstart Guide

### 1. Clone & Install
```bash
git clone https://github.com/shaikazeem2001/backend-starter.git
cd backend-starter
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your MongoDB URI and JWT secret key:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/backend-starter
JWT_SECRET=your_super_secret_jwt_key
CLIENT_URL=http://localhost:3000
```

### 3. Run Application
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

---

## 📜 License

Distributed under the [MIT License](./LICENSE). Copyright © 2026 Azeem Shaik.
