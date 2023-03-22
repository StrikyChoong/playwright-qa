import { expect } from '@playwright/test';

export const CalculatorPage = class Calculator {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.timeout = 1000;
    this.lblSuperFullScreen = page.getByRole('link', { name: 'Super Fullscreen!' });
    this.frmMain = page.frameLocator('#fullframe').locator('#canvas');
  }

  // Enter full screen calculator to get a constant UI pos
  async enterFullScreen() {
    if (this.lblSuperFullScreen.isVisible) {
      await this.lblSuperFullScreen.click();
      await this.page.waitForTimeout(1000);
    }
  }

  // Perform click on "-/+" if the input is a negative figure
  async handleInput (num) {
    await this.frmMain.type(num);

    if (num.includes('-')) {
      await this.frmMain.click({
        position: {x: 178,y: 392}
      });
    }
  }

  async addition (num1, num2) {
    await this.enterFullScreen();
    await this.handleInput(num1);
    await this.frmMain.type('+');
    await this.handleInput(num2);
    await this.frmMain.type('=');

    await this.page.waitForTimeout(this.timeout); // wait time for stable screen
  }

  async substraction (num1, num2) {
    await this.enterFullScreen();
    await this.handleInput(num1);
    await this.frmMain.type('-');
    await this.handleInput(num2);
    await this.frmMain.type('=');

    await this.page.waitForTimeout(this.timeout); // wait time for stable screen
  }

  async division (num1, num2) {
    await this.enterFullScreen();
    await this.handleInput(num1);
    await this.frmMain.type('/');
    await this.handleInput(num2);
    await this.frmMain.type('=');

    await this.page.waitForTimeout(this.timeout); // wait time for stable screen
  }

  /*
  async multiplier (num1, num2) {
    await this.enterFullScreen();
    await this.frmMain.type(num1);
    await this.frmMain.type('*');
    await this.frmMain.type(num2);
    await this.frmMain.type('=');
  }
  */
};

