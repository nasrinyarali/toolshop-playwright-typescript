import type { Page , Locator } from '@playwright/test';
export class RegisterPage {
private readonly page: Page;
private readonly firstNameLoc : Locator;
private readonly lastNameLoc : Locator;
private readonly dataOfBirthLoc : Locator;
private readonly postalCodeLoc : Locator;
private readonly houseNumberLoc : Locator;
private readonly streetLoc : Locator;
private readonly cityLoc : Locator;
private readonly countryLoc : Locator;
private readonly stateLoc : Locator;
private readonly phoneLoc : Locator;
private readonly emailLoc : Locator;
private readonly passwordLoc : Locator;
private readonly registerButtonLoc : Locator;

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

getFirstNameLoc(): Locator {
  return this.firstNameLoc;
}

getLastNameLoc(): Locator {
  return this.lastNameLoc;
}

getDataOfBirthLoc(): Locator {
  return this.dataOfBirthLoc;
}

getPostalCodeLoc(): Locator {
  return this.postalCodeLoc;
}

getHouseNumberLoc(): Locator {
  return this.houseNumberLoc;
}

getStreetLoc(): Locator {
  return this.streetLoc;
}

getCityLoc(): Locator {
  return this.cityLoc;
}

getCountryLoc(): Locator {
  return this.countryLoc;
}

getStateLoc(): Locator {
  return this.stateLoc;
}

getPhoneLoc(): Locator {
  return this.phoneLoc;
}

getEmailLoc(): Locator {
  return this.emailLoc;
}

getPasswordLoc(): Locator {
  return this.passwordLoc;
}

getRegisterButtonLoc(): Locator {
  return this.registerButtonLoc;
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
