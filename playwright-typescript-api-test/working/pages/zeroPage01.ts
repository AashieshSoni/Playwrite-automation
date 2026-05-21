import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ZeroPage01 extends BasePage {
  private customerData;

  async visitWeb(customerData: any) {
    this.customerData = customerData;
    await this.page.goto(this.customerData.url);
    await console.log("URL invoked: ", this.customerData.url);
  }

  async enterDataByPlaceholderText(placeholderText: any, inputData:any) {
    await this.page.getByPlaceholder(placeholderText).fill(inputData);
    await console.log("Element by placeholder: ",placeholderText);
  }

  async clickOnElementByText(text:any){
     await this.page.getByText(text).click()
  }

  async clickOnButton(text:any){
    await this.page.getByRole('button', { name: text }).click();
  }

  async assetFeedbackDisplayed(){
    await expect(this.page.getByRole('heading', { name: 'Feedback' })).toBeVisible()
  }

  async assertHeadingIsDisplayed(headingText:any){
    await expect(this.page.getByRole('heading', { name: headingText })).toBeVisible()
  }


  

}
