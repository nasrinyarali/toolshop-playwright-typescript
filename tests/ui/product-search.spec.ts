import { link } from 'node:fs';
import { test, expect } from '../../src/fixtures/test-fixtures';

/*import {test, expect} from "../../src/fixtures/test-fixtures"

test("product search", async({page, homePage})=>{
await homePage.goto();
await page.locator("input[data-test='search-query']").fill("Combination pliers");
await page.locator("button[data-test='search-submit']").click();
await expect(page.locator("span[data-test='search-term']")).toContainText("Combination pliers");
});*/

test.describe('Guest product search', () => {
  test('Guest searches for Combination Pliers and sees the exact product card', async ({ page, homePage }) => {
    // 1. Open the Toolshop home page as a guest.
    await homePage.goto();

    // 2. In the Search field, enter "Combination Pliers" and activate the Search button.
    await page.locator('[data-test="search-query"]').fill('Combination Pliers');
    await page.locator('[data-test="search-submit-broken2"]').click();

    // 3. Inspect the search results.
    const productCard = page.getByRole('link').filter({
      has: page.getByRole('heading', { name: 'Combination Pliers', exact: true }),
    });
    await expect(productCard).toHaveCount(1);
    await expect(productCard.getByRole('heading', { name: 'Combination Pliers', exact: true })).toBeVisible();
    await expect(page.locator('[data-test="search-caption"]')).toBeVisible();
  });
});
