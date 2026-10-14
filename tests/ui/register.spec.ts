import { test, expect } from '../../src/fixtures/test-fixtures';

test("Registration form Opens", async ({ registerPage, loginPage, page }) => {
    await registerPage.goto();
    await expect(page).toHaveURL(/\/auth\/register/);
    await expect(page.getByRole("heading", { name: "Customer registration" , exact: true })).toBeVisible();
    const countryName = await registerPage.seletCountry("United States of America (the)");
    const emailAddress = "nasrin.yarali"+ Date.now().toString() +"@gmail.com";
    const password = "Password"+ Date.now().toString() +"!";
    await registerPage.fillRegisterationform("Nasrin", "Yarali", "1980-09-11", "94598", "3220", countryName , "5555555555", emailAddress, password);  
    await expect(registerPage.streetLoc).not.toHaveValue('');
    await expect(registerPage.cityLoc).not.toHaveValue('');
    await expect(registerPage.stateLoc).not.toHaveValue('');
    await registerPage.clickRegister();
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(page.getByRole("heading", { name: "Login" , exact: true })).toBeVisible();
    await loginPage.login(emailAddress, password);
     await expect(page.getByRole("heading", { name: "My account" , exact: true })).toBeVisible();
});
