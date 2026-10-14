    


import { test, expect } from '../../src/fixtures/test-fixtures';
import { loginValidationData } from '../../src/test-data/login-validation-data';

for (const testCase of loginValidationData) {
test(testCase.name, async ({ loginPage }) => {
await loginPage.goto();

await loginPage.login(testCase.email, testCase.password);

if (testCase.emailError !== null) {
await expect(loginPage.emailRequiredMessage).toBeVisible();
await expect(loginPage.emailRequiredMessage).toHaveText(testCase.emailError);
} else {
await expect(loginPage.emailRequiredMessage).toBeHidden();
}

if (testCase.passwordError !== null) {
await expect(loginPage.passwordRequiredMessage).toBeVisible();
await expect(loginPage.passwordRequiredMessage).toHaveText(testCase.passwordError);
} else {
await expect(loginPage.passwordRequiredMessage).toBeHidden();
}
});
}

test('Invalid credential are rejected', async ({loginPage, page}) => {
await loginPage.goto();
await loginPage.login("unregistered-user@example.com", "wrongpassword123!");
await expect(loginPage.loginErrorMessage).toBeVisible();
await expect(page).toHaveURL(/\/auth\/login/);  
});

test("Open Register Link", async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.OpenRegisterlink();
  await expect(loginPage.page).toHaveURL(/\/auth\/register/);
  await expect(loginPage.page.getByRole("heading", { name: "Customer registration" , exact: true })).toBeVisible();
});