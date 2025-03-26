// routes/taskRoutes.ts
import { Router } from 'express';
import { TaskController } from '../controllers/taskControllers';
import { Server as SocketIOServer } from 'socket.io';

export default function(io: SocketIOServer) {
  const router = Router();
  const controller = new TaskController(io);

  router.get('/tasks', controller.getTasks.bind(controller));
  router.post('/tasks', controller.createTask.bind(controller));
  router.put('/tasks/:id', controller.updateTask.bind(controller));
  router.delete('/tasks/:id', controller.deleteTask.bind(controller));

  return router;
}
