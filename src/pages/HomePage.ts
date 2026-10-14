import type { Page , Locator } from '@playwright/test';
export class HomePage {
    readonly page: Page;
    readonly signInLink : Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = this.page.getByRole("link", { name: "Sign in" , exact: true });
  }    

  async goto() {
    await this.page.goto("/");
  }

  async openSignInPage() {
    await this.signInLink.click();
  }
}