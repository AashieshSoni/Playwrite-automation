import testData from "./../data/testdata.json";

export class TestData {
  jsonKey: any;
  constructor(jsonKey: any) {
    this.jsonKey = jsonKey;
  }

  getTestData() {
    return testData[this.jsonKey][0];
  }
}
