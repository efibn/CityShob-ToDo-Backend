import { Task, ITask } from '../models/task';

export default class TaskRepository {
  async findAll(): Promise<ITask[]> {
    return Task.find();
  }

  async findById(id: string): Promise<ITask | null> {
    return Task.findById(id);
  }

  async create(taskData: Partial<ITask>): Promise<ITask> {
    const task = new Task(taskData);
    return task.save();
  }

  async update(id: string, taskData: Partial<ITask>): Promise<ITask | null> {
    return Task.findByIdAndUpdate(id, taskData, { new: true });
  }

  async delete(id: string): Promise<ITask | null> {
    return Task.findByIdAndDelete(id);
  }
}
