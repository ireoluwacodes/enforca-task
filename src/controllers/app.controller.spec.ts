import { Request, Response } from "express";
import { Controller } from "./app.controller";

describe("AppController", () => {
  let controller: Controller;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    controller = new Controller();
    mockRequest = {};
    mockResponse = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it("should return a link to the docs", () => {
    controller.getHome(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(
      `Postman Documentation can be found <a href="">here</a>`,
    );
  });
});
