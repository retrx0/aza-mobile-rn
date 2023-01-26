/* eslint-disable @typescript-eslint/no-empty-function */
// describe("Login", () => {
//   beforeAll(async () => {});

//   beforeEach(async () => {});

//   it("should test something", async () => {});
// });

import { loginUserAPI } from "../../src/api/auth";
describe("Login", () => {
  it("logs the user in with the correct credentials", async () => {
    const credentials = {
      email: "tijanihabib42@gmail.com",
      password: "555555",
      phoneNumber: "08060158896",
    };
    const result = await loginUserAPI(credentials);
    expect(result).toEqual(200);
    expect(result).toEqual({ status: "success" });
  });

  it("fails to log the user in with incorrect credentials", async () => {
    const credentials = {
      email: "tijani@gmail.com",
      password: "123221",
      phoneNumber: "09163837935",
    };
    const result = await loginUserAPI(credentials);
    expect(result).toEqual(401);
    expect(result).toEqual({
      status: "error",
      message: "Incorrect email or password",
    });
  });
});
