// src/factories/TaskFactory.ts
import { ITask } from '../models/task';

export class TaskFactory {
  static create(data: Partial<ITask>): ITask {
    return {
      title: data.title || 'Untitled Task',
      completed: data.completed ?? false,
    } as ITask;
  }
}
