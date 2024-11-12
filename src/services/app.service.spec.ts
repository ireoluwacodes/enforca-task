import { Service } from "./app.service";

describe("AppService", () => {
  let service: Service;

  beforeEach(() => {
    service = new Service();
  });

  it("should return a string", () => {
    expect(typeof service.home()).toBe("string");
  });

  it("should return a link to postman", () => {
    expect(service.home()).toBe(
      `Postman Documentation can be found <a href="">here</a>`,
    );
  });
});
