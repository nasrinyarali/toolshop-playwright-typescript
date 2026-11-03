import type { Page , Locator } from '@playwright/test';
export class HomePage {
    private readonly page: Page;
    private readonly signInLink : Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = this.page.getByRole("link", { name: "Sign in" , exact: true });
  }    

  public getSignInLink(): Locator {
    return this.signInLink;
  }

  async goto() {
    await this.page.goto("/");
  }

  async openSignInPage() {
    await this.signInLink.click();
  }
}