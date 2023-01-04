/* eslint-disable @typescript-eslint/no-empty-function */
import { device, element, by, expect } from "detox";

describe("Welcome", () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { faceid: "YES" },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should tap login button", async () => {
    await element(by.text("Login")).tap();
    await expect(element(by.text("Login"))).not.toBeVisible();
  });
});
