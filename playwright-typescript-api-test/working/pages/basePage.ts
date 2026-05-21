import testData from "../data/testdata.json";

export class BasePage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }

  async getCustomerData(customerKey: any) {
    return testData[customerKey][0];
  }
}
