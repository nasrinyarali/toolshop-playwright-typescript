import type { Page , Locator } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly emailLoc : Locator;
    readonly passwordLoc : Locator;
    readonly loginButton : Locator;
    readonly emailRequiredMessage : Locator;
    readonly passwordRequiredMessage : Locator;
    readonly loginErrorMessage : Locator;
    readonly registerLink : Locator;
    


  constructor(page: Page) {
    this.page = page;
    this.emailLoc = this.page.getByRole("textbox", { name: "Email address *" ,    exact: true });
    this.passwordLoc = this.page.getByRole("textbox", { name: "Password *" ,    exact: true });
    this.loginButton = this.page.getByRole("button", { name: "Login" , exact: true });
    this.emailRequiredMessage = this.page.locator('[data-test= "email-error"]');
    this.passwordRequiredMessage = this.page.locator('[data-test= "password-error"]');
    this.loginErrorMessage = this.page.locator('div[data-test= "login-error"]');
    this.registerLink = this.page.getByRole("link", { name: "Register your account" , exact: true });
  }    

  async goto() {
    await this.page.goto("/auth/login");
  }

  async clickLogin() {
    await this.loginButton.click();
  } 

async login(email: string , password: string) {
    await this.emailLoc.fill(email);
    await this.passwordLoc.fill(password);
    await this.clickLogin();
  } 

  async fillEmail(email: string) {
    await this.emailLoc.fill(email);
  } 

  async fillPassword(password: string) {
    await this.passwordLoc.fill(password);
  } 

  async OpenRegisterlink() {
    await this.registerLink.click();
  } 

}