import { NextFunction, Response } from "express";
import { CREATED, OK } from "http-status";
import { TaskService } from "../services";
import { ProtectedRequest } from "../interfaces";

const taskService = new TaskService();

export class TaskController {
  public async createTask(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const taskData = req.body;
      const task = await taskService.createTask(taskData);
      const data = {
        statusCode: CREATED,
        data: task,
        message: "Task Created Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async getAllTasks(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const tasks = await taskService.getAllTasks();
      const data = {
        statusCode: OK,
        data: tasks,
        message: "Tasks Retrieved Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async deleteTask(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { taskId } = req.params;
      await taskService.deleteTask(taskId);
      const data = {
        statusCode: OK,
        message: "Task Deleted Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async markAsCompleted(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { taskId } = req.params;
      const task = await taskService.markAsCompleted(taskId);
      const data = {
        statusCode: OK,
        data: task,
        message: "Task Marked as Completed",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async updateTask(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { taskId } = req.params;
      const taskData = req.body;
      const task = await taskService.updateTask(taskId, taskData);
      const data = {
        statusCode: OK,
        data: task,
        message: "Task Updated Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}
