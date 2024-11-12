import express, { json, urlencoded } from "express";
import { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { appRouter, AuthRouter } from "../routes";
import { errHandler, notFound } from "../middleware";

export const app: Application = express();

// middleware init
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route init
app.use(appRouter);
app.use("/api/v1/auth", AuthRouter);

// err handling
app.use(notFound);
app.use(errHandler);
