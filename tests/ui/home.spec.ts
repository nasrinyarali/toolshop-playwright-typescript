import { test, expect } from '../../src/fixtures/test-fixtures';

test("Home page displays the Sign in link", async ({ homePage }) => {
 await homePage.goto();
 await expect(homePage.signInLink).toBeVisible();
});

test("Sign in link opens the login page", async ({ homePage , page}) => {
  await homePage.goto();
  await homePage.openSignInPage();
  await expect(page).toHaveURL(/login/);
});