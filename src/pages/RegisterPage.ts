import type { Page , Locator } from '@playwright/test';
export class RegisterPage {
readonly page: Page;
readonly firstNameLoc : Locator;
readonly lastNameLoc : Locator;
readonly dataOfBirthLoc : Locator;
readonly postalCodeLoc : Locator;
readonly houseNumberLoc : Locator;
readonly streetLoc : Locator;
readonly cityLoc : Locator;
readonly countryLoc : Locator;
readonly stateLoc : Locator;
readonly phoneLoc : Locator;
readonly emailLoc : Locator;
readonly passwordLoc : Locator;
readonly registerButtonLoc : Locator;

constructor(page: Page) {
    this.page = page;
    this.firstNameLoc = this.page.getByRole("textbox", { name: "First name" , exact: true });
    this.lastNameLoc = this.page.getByRole("textbox", { name: "Last name" , exact: true });
    this.dataOfBirthLoc = this.page.getByLabel("Date of Birth *",{exact:true});
    this.postalCodeLoc = this.page.getByRole("textbox", { name: "Postal code" , exact: true });
    this.houseNumberLoc = this.page.getByRole("textbox", { name: "House number" , exact: true });
    this.streetLoc = this.page.getByRole("textbox", { name: "Street" , exact: true });
    this.cityLoc = this.page.getByRole("textbox", { name: "City" , exact: true });
    this.stateLoc = this.page.getByRole("textbox", { name: "State" , exact: true });
    this.countryLoc = this.page.getByRole("combobox", { name: "Country" , exact: true });
    this.phoneLoc = this.page.getByRole("textbox", { name: "Phone" , exact: true });
    this.emailLoc = this.page.getByRole("textbox", { name: "Email address" , exact: true });
   this.passwordLoc = this.page.getByLabel("Password",{exact:true});
    this.registerButtonLoc = this.page.getByRole("button", { name: "Register" , exact: true });
  } 

async goto() {
    await this.page.goto("/auth/register");
  }

  async clickRegister() {
    await this.registerButtonLoc.click();
  }

  async fillRegisterationform(firstName: string, lastName: string, dateOfBirth: string, postalCode: string, houseNumber: string, country: string, phone: string, email: string, password: string) {
    await this.firstNameLoc.fill(firstName);
    await this.lastNameLoc.fill(lastName);  
    await this.dataOfBirthLoc.fill(dateOfBirth);
    await this.postalCodeLoc.fill(postalCode);
    await this.houseNumberLoc.fill(houseNumber);
    await this.seletCountry(country);
    await this.phoneLoc.fill(phone);
    await this.emailLoc.fill(email);
    await this.passwordLoc.fill(password);
  }     

async seletCountry(countryName: string):Promise<string> {
    await this.countryLoc.selectOption({ label: countryName });
    return countryName;
  }

}
