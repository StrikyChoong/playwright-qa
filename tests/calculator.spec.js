import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator.page'

test.beforeEach(async ({ page }) => {
  await page.goto('/full-screen-calculator/');
});

/*
 * Subtaction Test
*/
// Verify subtraction on 888-777=111, using keyboard input + visual comparison
test('verify subtraction is working correctly on positive value (keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.substraction('888', '777');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on -100-(-100)=0, using UI input (-/+ operator) + keyboard input + visual comparison
test('verify subtraction is working correctly on negative value (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.substraction('-100', '-100');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 88-(-88)=176, using UI input (-/+ operator) + keyboard input + visual comparison
test('verify subtraction is working correctly on mixed value (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.substraction('88', '-88');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 456-456=0, using keyboard input + visual comparison
test('verify subtraction is working correctly on zero-out case (keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.substraction('456', '456');
  await expect (page).toHaveScreenshot();
});

/*
 * Addition Test
*/
// Verify subtraction on 100+100=200, using keyboard input + visual comparison
test('verify addition is working correctly on positive figures (keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.addition('100', '100');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on (-66)+(-66)=-132..., using UI input (-/+ operator) + keyboard input + visual comparison
test('verify addition is working correctly on negative figures (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.addition('-66', '-66');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 99+(-123)=-24, using UI input (-/+ operator) + keyboard input + visual comparison
test('verify addition is working correctly on mixed figures (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.addition('99', '-123');
  await expect (page).toHaveScreenshot();
});

/*
 * Division Test
*/
// Verify subtraction on 100/1=100, using UI input (divide operator) + keyboard input + visual comparison
test('verify division is working correctly when dividing by one (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.division('100', '1');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 100/2=50, using UI input (divide operator) + keyboard input + visual comparison
test('verify division is working correctly when dividing by two (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.division('100', '2');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 100/100=1, using UI input (divide operator) + keyboard input + visual comparison
test('verify division is working correctly when dividing by own (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.division('100', '100');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 100/7=14.28..., using UI input (divide operator) + keyboard input + visual comparison
test('verify division is working correctly when dividing by a prime (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.division('100', '7');
  await expect (page).toHaveScreenshot();
});

// Verify subtraction on 100/0=Error, using UI input (divide operator) + keyboard input + visual comparison
test('verify division is working correctly when dividing by zero (UI+keyboard input)', async ({ page }) => {
  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.division('100', '0');
  await expect (page).toHaveScreenshot();
});