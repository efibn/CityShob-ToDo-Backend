// src/index.ts

import express, { Application } from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';
import { MongoConnection } from './config/mongo';

dotenv.config();

const app: Application = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*', // TODO: Restrict to frontend URL in production
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

// Attach Socket.io instance to the Express app if needed
app.set('io', io);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection via Singleton
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app';
MongoConnection.getInstance()
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected');

    // Register routes
    app.use('/api', taskRoutes(io));

    // Start server after DB connection
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Socket.io connection handling
    io.on('connection', (socket) => {
      console.log('Client connected:', socket.id);

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
