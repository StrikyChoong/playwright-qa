# playwright-qa
For assessment test using Playwright 

### Why Playwright
I have done some research in my previous role and found out that Playwright capability is more advanced, if not on par with Cypress, especially with the native parallelism, debugging capabilities and code syntax (it also has better support and easier syntax for accessing iFrame), so I have decided to go with Playwright instead of Cypress.

For more info, do check out https://playwright.dev/

### Setup & Installation
  1. Git clone the repo
  2. Perform `npm install` to install playwright

### Test Execution
There are total 12 test cases included in the automation suite
  1. Execute the following commands 
      `npx playwright test --headed`
  2. Playwright is capable to launch multiple threads/workers depends the configuration where I have not specify any number, so it will launch 12 browsers all at once when we executing the test command
  - If you wish to have smaller threads running, do invoke the --workers option `npx playwright test --headed --workers=2`

### Key Files
  1. `playwright.config.js`: configuration file for Playwright
  2. `tests\calculator.spec.js`: main spec file contains all 12 test cases
  3. `tests\calculator.spec.js-snapshots\*`: screenshot folder for test result comparison
  4. `pages\calculator.page.js`: page object model to split the UI element into a dedicated file for code simplicity and reusability
  
### Challenges & Solutions
  1. Limited element in the calculator iFrames: it only contain a frame with a canvas without any elements/locators to identify the result screen and all buttons in the calculator. To tackle this challenge:
  - Visual comparison is used to perform the result comparison: https://playwright.dev/docs/test-snapshots
  - Perform most of the user inputs via keyboard keypress, there is still a showcase to click on the "-/+" button for negative value testing using a subpar solution: clicking on a fixed position. It is not an ideal solution and is very prone to error (screen resolution), therefore I had to evaluate and find a best viewport resolution (800*600) to reduce the error rate, and also to always ensure the calculator enter super fullscreen mode for a more constant UI for clicking + visual comparison
  

### Known Limitation
  1. For some reasons the headless execution will not able to perform any clicking, hence as a workaround, we include `--headed` into the execution command
  2. Sometimes, the resolution of the calculator will slightly change/moving, and as we are doing assertion via screen comparison, it might fail on different solution.
  - If the automation is constantly failing, do remove all existing screenshot under  `tests\calculator.spec.js-snapshots\`, and rerun `npx playwright test --headed` twice (1st execution to re-generate screenshot, 2nd execution for actual testing)
