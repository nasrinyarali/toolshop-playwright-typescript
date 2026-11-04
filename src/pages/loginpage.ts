import type { Page , Locator } from '@playwright/test';
export class LoginPage {
    private readonly page: Page;
    private readonly emailLoc : Locator;
    private readonly passwordLoc : Locator;
    private readonly loginButton : Locator;
    private readonly emailRequiredMessage : Locator;
    private readonly passwordRequiredMessage : Locator;
    private readonly loginErrorMessage : Locator;
    private readonly registerLink : Locator;
    


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

getEmailLoc(): Locator {
  return this.emailLoc;
}

getPasswordLoc(): Locator {
  return this.passwordLoc;
}

getLoginButton(): Locator {
  return this.loginButton;
}

getEmailRequiredMessage(): Locator {
  return this.emailRequiredMessage;
}

getPasswordRequiredMessage(): Locator {
  return this.passwordRequiredMessage;
}

getLoginErrorMessage(): Locator {
  return this.loginErrorMessage;
}

getRegisterLink(): Locator {
  return this.registerLink;
} 


  async goto() {
    await this.page.goto(process.env.APP_BASE_URL + "/auth/login");
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