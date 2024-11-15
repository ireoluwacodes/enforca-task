import { Router } from "express";
import { TaskController } from "../controllers";
import { authMiddleware, successHandler, validator } from "../middleware";
import { createTaskSchema, updateTaskSchema } from "../validators";

const taskController = new TaskController();

export const TaskRouter = Router();

TaskRouter.route("/create").post(
  authMiddleware,
  validator(createTaskSchema),
  taskController.createTask,
  successHandler,
);

TaskRouter.route("/").get(
  authMiddleware,
  taskController.getAllTasks,
  successHandler,
);

TaskRouter.route("/delete/:taskId").delete(
  authMiddleware,
  taskController.deleteTask,
  successHandler,
);

TaskRouter.route("/complete/:taskId").patch(
  authMiddleware,
  taskController.markAsCompleted,
  successHandler,
);

TaskRouter.route("/update/:taskId").patch(
  authMiddleware,
  validator(updateTaskSchema),
  taskController.updateTask,
  successHandler,
);
