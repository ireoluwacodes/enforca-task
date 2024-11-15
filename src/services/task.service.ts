import { Task } from "../models";
import { ITask } from "../interfaces";

export class TaskService {
  private taskModel = Task;

  public async createTask(taskData: ITask): Promise<ITask> {
    const task = await this.taskModel.create(taskData);

    return task;
  }

  public async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.taskModel.find().populate("users").lean();
    return tasks;
  }

  public async deleteTask(taskId: string): Promise<void> {
    await this.taskModel.findByIdAndDelete(taskId);
  }

  public async markAsCompleted(taskId: string): Promise<ITask> {
    const task = await this.taskModel.findByIdAndUpdate(
      taskId,
      { completed: true },
      { new: true },
    );
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  }

  public async updateTask(
    taskId: string,
    taskData: Partial<ITask>,
  ): Promise<ITask> {
    const task = await this.taskModel.findByIdAndUpdate(taskId, taskData, {
      new: true,
    });
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  }
}
