// controllers/taskControllers.ts
import { Request, Response } from 'express';
import { Task } from '../models/task';
import { Server as SocketIOServer } from 'socket.io';
import { TaskFactory } from '../factories/taskFactory';

export class TaskController {
  constructor(private io: SocketIOServer) {}

  async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (err) {
      console.error('[GET] Failed to fetch tasks:', err);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const taskData = TaskFactory.create(req.body);
      const newTask = await Task.create(taskData);
      this.io.emit('taskAdded', newTask); // Notify all clients
      res.status(201).json(newTask);
    } catch (err) {
      console.error('[POST] Failed to create task:', err);
      res.status(400).json({ error: 'Failed to create task' });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });

      if (!updated) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }

      this.io.emit('taskUpdated', updated);
      res.status(200).json(updated);
    } catch (err) {
      console.error('[PUT] Failed to update task:', err);
      res.status(400).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await Task.findByIdAndDelete(id);

      if (!deleted) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }

      this.io.emit('taskDeleted', id);
      res.status(204).send();
    } catch (err) {
      console.error('[DELETE] Failed to delete task:', err);
      res.status(400).json({ error: 'Failed to delete task' });
    }
  }
}
