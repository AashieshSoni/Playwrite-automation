## playwright-sample-project

## **Overview:**

This is a sample automation project built with **Playwright** and **TypeScript**, using the **Playwright Test Runner** to execute test cases.
The framework follows a **Data-Driven** approach, separating test logic from test data. This allows the same test scripts to run against multiple sets of test data, significantly reducing script duplication compared to a modular framework.
Test data is stored in external **Excel sheets**,**CSV files**, **Json files**,which the scripts read during execution.

## Automaiton framework Features
* Cross-browser execution (Chrome, Firefox, Edge, WebKit).
* Test data and execution control via Excel sheets (choose which tests to run and in which mode).
* Data transfer supported between test cases.
* Utilities for **file downloads** and **PDF validation** (including masking of dynamic content).
* Built-in support for **UI, API (SOAP & REST), and Database (MSSQL, DB2, Oracle)** automation.
* Generates multiple reports:
  * Playwright HTML Report
  * Allure Report
	* include **snapshots and video** on test failure.
    * Detailed execution logs stored in log files.
  * JUnit Report 
* Run tests locally in **Playwright’s UI Mode** with watch & debug capabilities.
* Centralized configuration in `playwright.config.ts`.
* Runtime environment variable management via `.env`.
* Simple integration with CI/CD tools such as **Jenkins**.

---

#### Supported Browsers
1. **Chrome** (default)
2. **Firefox**
3. **Microsoft Edge**
4. **WebKit** (Safari engine)

---
For demonstration purposes:

* **UI test cases** are implemented on [advantageonlineshopping.com](http://advantageonlineshopping.com/).
* **API test cases** are implemented using both [SOAP](https://www.advantageonlineshopping.com/accountservice/ws/accountservice.wsdl) and [REST](https://fakestoreapi.com) endpoints.

#### Run Mode Details
| Mode     | Excel Value | Description                                                   |
| -------- | ----------- | ------------------------------------------------------------- |
| Normal   | *(blank)*   | Runs all tests sequentially.                                  |
| Serial   | serial      | Runs sequentially; stops execution on first failure.          |
| Parallel | parallel    | Runs tests in parallel; ideal for independent test scenarios. |

---
## Project Structure

```plaintext
playwright-sample-project/
│
├── src/                         # Source code
│   ├── advantage/               # UI Automation (Advantage Online Shopping)
│   │   ├── constants/           # Constants & test data mappings
│   │   ├── pages/               # Page Object Models
│   │   └── steps/               # Step actions classes
│   │
│   ├── API/                     # REST API Automation
│   │   ├── REST/                # REST API tests & helpers
│   │   │   ├── constants/       # REST-specific constants
│   │   │   └── steps/           # REST-specific step actions classes
│   │   │
│   │   └── SOAPAPI/             # SOAP API tests & helpers
│   │       ├── constants/       # specific constants
│   │       └── steps/           # specific step actions classes
│   │
│   ├── DB/                      # DB interaction utilities
│   │       ├── constants/       # DB-specific constants
│   │       └── steps/           # DB-specific step actions classes
│
│   ├── framework/               # Core framework utilities
│   └── resources/               # Shared resources
│       ├── RESTAPI/             # REST API payloads
│       ├── data/                # Test data files
│       ├── utility/             # utility files
│       └── pdf/                 # PDF files for validation
│
├── test-results/                # Output of test executions
│   ├── downloads/               # Downloaded files during tests
│   ├── failure/                 # Failure screenshots & artifacts
│   ├── logs/                    # Execution logs
│   ├── pdf/                     # PDF comparison results
│   ├── AllureReport/            # Allure / HTML reports
│   └── results/                 # HTML results
│
│
├── tests/                       # Test specifications (.spec.ts)
│
├── .env                         # Environment variables
├── .eslintignore                # ESLint ignore rules
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── package.json                 # Project dependencies & scripts
├── package-lock.json            # Lock file
└── playwright.config.ts         # Playwright configuration
```

---

## Getting Started

### 1. Installation

* Install [Node.js](https://nodejs.org/) (v22+).

* Download or clone the repository:

  ```sh
  git clone https://github.com/AashieshSoni/Playwrite-automation/playwright-sample-project.git
  ```


* Install dependencies:

  ```sh
  npm ci
  ```

---

### 2. Test Creation

* Create a new test file with `.spec.ts` extension.
  Example: `LoginTest.spec.ts`
* In the testData Excel file, create a sheet with the same name.
  Example: `LoginTest`
* Update the execution sheet (e.g., `Regression`) to include the new test case, setting values for **run**, **mode**, etc.

---

##### 3. Execution
To run test suite use below command.
```sh
npm run create:suite SHEET=<SheetName> && npm test
```
**Note:** SheetName needs to be updated (Example: `Regression`).

To run individual test locally use below command.
```sh
set TEST_NAME=<TestFileName> && npm run local:test
```
**Note:** Using set command we are setting the local TestFileName (Example: `LoginTest` ).

Run an individual test in [UI Mode](https://playwright.dev/docs/test-ui-mode):

```sh
set TEST_NAME=<TestFileName> && npm run local:test:ui
```

Change environment variables at runtime (example: set browser to Edge):

```sh
set BROWSER=edge
```

Generate **Allure report**:

```sh
npm run report
```

## ⚠️ Important Note

All commands shown above are written for **Windows Command Prompt**.

---

### 4. Reports & Logs

* Playwright HTML Report:

  ```sh
  test-results/results/index.html
  ```
* Execution logs:

  ```sh
  test-results/logs/execution.log
  ```

##  ##