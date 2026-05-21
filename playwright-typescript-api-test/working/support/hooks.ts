import { test as base } from "@playwright/test";
import { BasePage } from "../pages/basePage";
import { VMPage01 } from "../pages/vmPage01";
import { ZeroPage01 } from "../pages/zeroPage01";

type MyFixture = {
  basePage: BasePage;
  vmPage01: VMPage01;
  zeroPage01: ZeroPage01;
};

export const test = base.extend<MyFixture>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  vmPage01: async ({ page }, use) => {
    await use(new VMPage01(page));
  },
  zeroPage01: async ({ page }, use) => {
    await use(new ZeroPage01(page));
  },
});
