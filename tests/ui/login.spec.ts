    


import { test, expect } from '../../src/fixtures/test-fixtures';
import { loginValidationData } from '../../src/test-data/login-validation-data';

for (const testCase of loginValidationData) {
test(testCase.name, async ({ loginPage }) => {
await loginPage.goto();

await loginPage.login(testCase.email, testCase.password);

if (testCase.emailError !== null) {
await expect(loginPage.getEmailRequiredMessage()).toBeVisible();
await expect(loginPage.getEmailRequiredMessage()).toHaveText(testCase.emailError);
} else {
await expect(loginPage.getEmailRequiredMessage()).toBeHidden();
}

if (testCase.passwordError !== null) {
await expect(loginPage.getPasswordRequiredMessage()).toBeVisible();
await expect(loginPage.getPasswordRequiredMessage()).toHaveText(testCase.passwordError);
} else {
await expect(loginPage.getPasswordRequiredMessage()).toBeHidden();
}
});
}

test('Invalid credential are rejected', async ({loginPage, page}) => {
await loginPage.goto();
await loginPage.login("unregistered-user@example.com", "wrongpassword123!");
await expect(loginPage.getLoginErrorMessage()).toBeVisible();
await expect(page).toHaveURL(/\/auth\/login/);  
});

test("Open Register Link", async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.OpenRegisterlink();
  await expect(page).toHaveURL(/\/auth\/register/);
  await expect(page.getByRole("heading", { name: "Customer registration" , exact: true })).toBeVisible();
});