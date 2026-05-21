import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class VMPage01 extends BasePage {
  private customerData;

  async visitWeb(customerData: any) {
    this.customerData = customerData;
    await this.page.goto(this.customerData.url);
    await this.selectCookieOptions("Accept all cookies");
    await console.log("URL invoked: ", this.customerData.url);
  }

  async selectCookieOptions(cookies: any) {
    await this.page.getByRole("button", { name: cookies }).click();
    await console.log("Selected cookie option: ", cookies);
  }
  async clickedOnGetStarted() {
    await this.page.locator('#sticky-nav-id').getByRole('link', { name: 'Get started' }).click();
    await console.log("Clicked on Get Started");
  }

  async selectAccountType(accountType:any) {
    await this.page.locator('#d-applyForm').getByText(accountType).click();
    await console.log("Selected Account type: ",accountType);
  }

  async selectIfHaveAccountWithVMType(doHaveAccount:any) {
    await this.page.locator('#d-personal-account').getByText(doHaveAccount, { exact: true }).click();
    await console.log("Selected Do have Account with VM: ",doHaveAccount);
  }

}
