import { Router } from "express";
import { Controller } from "../controllers";

const controller = new Controller();

export const appRouter = Router();

appRouter.get("/", controller.getHome);
