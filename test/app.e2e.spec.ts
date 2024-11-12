import request from "supertest";
import express from "express";
import { Controller } from "../src/controllers/app.controller";

describe("GET /", () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    const controller = new Controller();

    app.get("/", (req, res) => controller.getHome(req, res));
  });

  it("should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
