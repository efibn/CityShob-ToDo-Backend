# 🧠 CityShob To-Do App - Backend

A real-time collaborative To-Do List backend built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. This service powers the core functionality and real-time updates for the frontend Angular app.

---

## 🚀 Features

- ✅ RESTful API for tasks (CRUD)
- 🔄 Real-time sync with Socket.IO (multi-client updates)
- 🔒 Clean architecture using design patterns (Controller, Repository, Factory, Singleton)
- 🧰 MongoDB connection as a Singleton
- 🧪 Ready for expansion: auth, task locking, due dates, and more

---

## 🧱 Tech Stack

- **Node.js + Express** – API server
- **MongoDB + Mongoose** – Database & schema modeling
- **Socket.IO** – Real-time communication
- **TypeScript** – Safer, scalable code
- **Design Patterns Used**:
  - Singleton (MongoDB connection)
  - Factory (task creation)
  - Repository (DB abstraction)
  - MVC-like structure (Controllers)

---

## 📁 Project Structure

backend/ ├── config/ # Singleton DB connection │ └── mongo.ts ├── controllers/ # TaskController (handles logic) │ └── taskControllers.ts ├── factories/ # TaskFactory (task creation) │ └── TaskFactory.ts ├── models/ # Mongoose Task schema │ └── task.ts ├── routes/ # Task routing (REST + sockets) │ └── taskRoutes.ts ├── index.ts # App entry point (Express + Socket.IO) ├── .env # MongoDB URI └── README.md # You're reading it 👋
