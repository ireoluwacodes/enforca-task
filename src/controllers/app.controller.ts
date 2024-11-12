import { Request, Response } from "express";
import { OK } from "http-status";
import { Service } from "../services";

const service = new Service();
export class Controller {
  public getHome(req: Request, res: Response): Response {
    const url = service.home();
    return res.status(OK).send(url);
  }
}
