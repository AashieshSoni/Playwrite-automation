import { test } from "../../support/hooks";

test("VM account opening test", async ({ basePage, vmPage01 }) => {
  let customerData = await basePage.getCustomerData("customer_01");

  await vmPage01.visitWeb(customerData);
  await vmPage01.clickedOnGetStarted();
  await vmPage01.selectAccountType("Personal account");
  await vmPage01.selectIfHaveAccountWithVMType("No")
});


