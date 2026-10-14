import { test as base  , expect } from "@playwright/test";
import { HomePage } from "../../src/pages/HomePage";   
import { LoginPage} from "../../src/pages/loginpage";  
import { RegisterPage} from "../../src/pages/RegisterPage"; 


type AppFixtures = {
  homePage: HomePage;
  loginPage : LoginPage;
  registerPage: RegisterPage; 
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);        
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);        
    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);        
    await use(registerPage);
  } 

});
export { expect };