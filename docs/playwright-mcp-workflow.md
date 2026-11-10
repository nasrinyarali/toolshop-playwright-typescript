I used GitHub Copilot with Playwright MCP to explore Toolshop in a browser and create a TypeScript test. The goal was to verify that a guest searching for `Combination Pliers` sees the matching product card in the results.

## 1. Planner: Explore the app and create a test plan

I gave the Planner this prompt:

```text
Use tests/seed.spec.ts as the seed test. Use the Playwright MCP tools
to explore Toolshop at http://localhost:4200.

Create one test scenario: a guest searches for "Combination Pliers"
and sees a product card with that exact name in the search results.
The "Searched for" heading alone is not enough.

Save the preconditions, steps, and expected results in
specs/product-search.md. Do not write or modify any TypeScript tests.
```

Output: [Product search test plan](../specs/product-search.md).

## 2. Generator: Turn the plan into a TypeScript test

I gave the Generator this prompt:

```text
Read specs/product-search.md and generate one Playwright TypeScript test.
Save it in tests/ui/product-search.spec.ts and keep my commented example.
Reuse the existing homePage fixture. Verify that the exact product name
is visible on a product card within the search results.
Do not change any other files.
```

Output: [Product search test](../tests/ui/product-search.spec.ts).

## 3. Run the test and review the result

After generating the test, I ran it and checked the Playwright report for the result.

## 4. Fix a locator with the Playwright Healer

In one run, the test failed because a locator couldn't find the element on the page. I ran the Playwright Healer agent to investigate, and it identified and corrected the locator.