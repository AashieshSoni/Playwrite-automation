## Playwright-Automation
==========
prompt 0
Here’s the process to build an agent that can migrate automation test cases from ROBOT framework 
(Python + Selenium WebDriver, POM) to Playwright framework (TypeScript, POM):

1. Define Agent Role and Goal

Specify the agent’s purpose: migrate test cases from ROBOT/Python/Selenium (POM) to Playwright/TypeScript (POM).

2. Determine Input Method

Decide how the agent receives the ROBOT test cases (file upload, repository access, etc.).

3. Select Tools for Input and Processing

Equip the agent with file reading/parsing tools for Python and ROBOT files.
Choose code transformation/generation tools appropriate for conversion to TypeScript.
4. Design Tasks

Task to parse ROBOT test cases and extract test logic and POM structure.
Task to generate corresponding Playwright (TypeScript) code, maintaining POM design.
Task to handle edge cases and validate migration.

5. Optimize Tasks

Edit and refine descriptions for clarity, accuracy, and completeness.

6. Validate Agent Setup

Ensure tasks and tools are properly assigned and automation is ready for execution.

7. Test and Iterate

Run with sample test cases and refine the agent based on output accuracy.
=========
prompt 1
To Build an agent for migrating from Robot Framework (Python/Selenium) to Playwright (TypeScript/POM) 
requires a multi-stage pipeline that handles both structural transformation (Keyword to Method) and language translation (Python to TypeScript).

Phases 
1. Knowledge Mapping (The Core Logic)
2. Building the Agent Architecture
		Step 1: The Scanner (Source Code Parsing)
		Step 2: The Mapper (Transformation Logic)
		Step 3: The Generator (Code Synthesis)
3. Implementation Steps for the Agent
	Step1:Extract Locators
	Step2:Agent Logic
	Step3:Translate Actions
	Step4: Handle Asynchronicity
	Step5:Refactor Synchronization
4. Validation & "Self-Healing"
	Step1:Static Analysis
	Step2:Dry Run
	Step3:Feedback Loop
	Step4:Use a "Migration Layer" First don't migrate everything to "Native Playwright" .

=========
prompt 2
Phase 1: Knowledge Mapping (The Core Logic)
		Before building the agent, you must define the translation rules. Unlike a simple text replacement, this requires mapping "Intent."

		Feature	Robot Framework (Selenium)	Playwright (TypeScript)
		Element Selection	id:login_btn, xpath://...	page.locator('#login_btn')
		Action: Click	Click Element	await locator.click()
		Action: Type	Input Text	await locator.fill()
		Wait Logic	Wait Until Element Is Visible	Auto-waits (Implicit)
		Assertions	Element Should Contain	await expect(locator).toContainText()
		Variables	${URL}	const url = ...

Phase 2: Building the Agent Architecture
		Step 1: The Scanner (Source Code Parsing)
		Your agent needs to "understand" the input. You can use the built-in Robot Framework API to parse .robot files into an AST (Abstract Syntax Tree).

		Action: Use robot.api.get_model in Python to extract Test Cases, Keywords, and Variables.

		POM Extraction: For Python-based POM, use the ast module to extract class attributes (locators) and methods (actions).

		Step 2: The Mapper (Transformation Logic)
		The agent uses the Knowledge Map to transform Robot nodes into TypeScript structures.

		Locator Translation: Convert Robot's strategy:value (e.g., css:#id) to Playwright's string-based selectors.

		Method Synthesis: Convert a Robot "User Keyword" into an async method inside a TypeScript class.

		Variable Scope: Map ${scalar} to const, @{list} to Array, and &{dict} to Objects.

		Step 3: The Generator (Code Synthesis)
		This is where the agent writes the .ts files. You can use an LLM (like GPT-4o or Claude 3.5 Sonnet) to handle the boilerplate, but provide it with the "Parsed Context" to ensure accuracy.

		POM Structure: Generate one .ts file per Python page object class.

		Test Case Structure: Convert .robot test cases into test('description', async ({ page }) => { ... }) blocks.

Phase 3: Implementation Steps for the Agent
		Extract Locators: Scan Python POM files for variables like LOGIN_BUTTON = "id:submit".

		Agent Logic: Identify the variable, strip the Selenium prefix, and create a Playwright locator: readonly loginButton = this.page.locator('#submit');

		Translate Actions: Map Robot keywords to Playwright methods.

		Example: If the agent sees Input Text  ${USERNAME_FIELD}  ${user}, it should generate await this.usernameField.fill(user);.

		Handle Asynchronicity: Automatically wrap every Playwright action in await and ensure methods are marked async. This is the most common point of failure in manual migrations.

		Refactor Synchronization: Playwright handles most waits automatically. The agent should identify Sleep or Wait Until... keywords and either remove them or replace them with await locator.waitFor().

Phase 4: Validation & "Self-Healing"
		The final part of your agent should be a validation loop:

		Static Analysis: Run tsc (TypeScript Compiler) or eslint on the generated code to catch syntax errors.

		Dry Run: Execute the migrated test in "Headed" mode.

		Feedback Loop: If the test fails on a locator, the agent can re-scan the original Robot file to see if it missed a frame switch or a specific attribute, then re-generate that specific snippet.

		Pro-Tip: Use a "Migration Layer" First
		If you have thousands of tests, don't migrate everything to "Native Playwright" at once. Build a Compatibility Layer—a TypeScript library that implements Robot's common keywords (e.g., class RobotLib { async clickElement(selector) { ... } }). This allows your agent to do a 1:1 conversion quickly, which you can then refactor into idiomatic Playwright over time.
		
========
prompt 3

========
prompt 4

========
prompt 5

========
prompt 6
