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

backend/
├── config/          # MongoDB Singleton connection
│   └── mongo.ts
├── controllers/     # TaskController with request logic
│   └── taskControllers.ts
├── factories/       # TaskFactory for structured creation
│   └── TaskFactory.ts
├── models/          # Mongoose schema & TypeScript interface
│   └── task.ts
├── routes/          # Express routing layer
│   └── taskRoutes.ts
├── index.ts         # Main entry point (Express + Socket.IO)
├── .env             # Environment config (Mongo URI)


🌐 API Endpoints

Base URL: http://localhost:3000/api/tasks

Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task


📡 Real-Time Events (Socket.IO)
All task changes are broadcast to all connected clients via WebSocket events.

Event	Payload	Description
taskAdded	Task object	Emitted when a task is created
taskUpdated	Updated task object	Emitted on update
taskDeleted	Task ID (string)	Emitted when task is deleted
Clients listen for these events and update the UI without refreshing.


🧠 Design Decisions & Patterns
This backend is structured for clarity, testability, and maintainability using common design patterns:

📐 Patterns Used
Pattern	Purpose
Controller	Encapsulates request handling (e.g., TaskController)
Repository	Abstracts database access via TaskRepository
Factory	Provides structured object creation (TaskFactory)
Singleton	Ensures a single MongoDB connection (MongoConnection)
Pub/Sub	Socket.IO acts as a lightweight event bus for real-time collaboration


