import {APIResponse} from "@playwright/test"
import {test, expect} from "../../src/fixtures/test-fixtures";
import registrationData from '../../src/test-data/registration-user.json';


test('API register and UI login', async ({ request, loginPage, page }) => {
  const Api_URL = process.env.API_BASE_URL;
  if (!Api_URL) {
    throw new Error('API_BASE_URL is not configured');
  }     

// 1. Register a new user
const userData = {
...registrationData,
email: `test-${Date.now()}@gmail.com`,
};

const response:APIResponse = await request.post(`${Api_URL}/users/register`, {
  data:userData,
});

expect(response.status()).toBe(201);
const registeredUser = await response.json();
expect(registeredUser.email).toBe(userData.email);



// 2. Log in with the same email and password using UI
await loginPage.goto();
await loginPage.login(userData.email, userData.password);
//await expect(page.getByRole('heading', { name: 'My account' , level:1})).toBeVisible(); 
//await page.locator('h1').filter({ hasText: 'My account' }).first().waitFor({ state: 'visible' });

//Verify that the profile belongs to the registered user
await page.getByRole('link', { name: 'Profile'}).click();
await expect(page.getByRole('textbox', { name: 'First name'})).toHaveValue(userData.first_name);
await expect(page.getByRole('textbox', { name: 'Last name'})).toHaveValue(userData.last_name);
await expect(page.getByRole('textbox', { name: 'Email address'})).toHaveValue(userData.email);



});




