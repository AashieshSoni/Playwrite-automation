import { test } from "../../support/hooks";

test("Customer feedback test 01", async ({ basePage, zeroPage01 }) => {
  let customerData = await basePage.getCustomerData("customer_01");
  await zeroPage01.visitWeb(customerData);
  await zeroPage01.clickOnElementByText("Feedback");
  await zeroPage01.enterDataByPlaceholderText('Your Name',customerData.firstName)
  await zeroPage01.enterDataByPlaceholderText('Your email address',customerData.email)
  await zeroPage01.enterDataByPlaceholderText('Subject',customerData.subject)
  await zeroPage01.enterDataByPlaceholderText('Type your questions here...',customerData.comment)
  await zeroPage01.clickOnButton('Send message')

  
  await zeroPage01.assertHeadingIsDisplayed('Feedback')
  
});

test("Customer feedback test 02", async ({ basePage, zeroPage01 }) => {
  let customerData = await basePage.getCustomerData("customer_02");
  await zeroPage01.visitWeb(customerData);
  await zeroPage01.clickOnElementByText("Feedback");
  await zeroPage01.enterDataByPlaceholderText('Your Name',customerData.firstName)
  await zeroPage01.enterDataByPlaceholderText('Your email address',customerData.email)
  await zeroPage01.enterDataByPlaceholderText('Subject',customerData.subject)
  await zeroPage01.enterDataByPlaceholderText('Type your questions here...',customerData.comment)
  await zeroPage01.clickOnButton('Send message')
  await zeroPage01.assertHeadingIsDisplayed('Feedback')
  
});