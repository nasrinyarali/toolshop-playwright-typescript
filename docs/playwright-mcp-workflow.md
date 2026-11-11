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



## Debugging a Playwright CI Failure with GitHub Copilot

To practice debugging a CI failure, I intentionally changed the Search button locator from `search-submit` to `search-submit-broken` on a separate branch. In GitHub Actions, Playwright timed out after 30 seconds while waiting for that locator.

**Prompt I sent to GitHub Copilot:**

```text
Use GitHub MCP to read the failed job log for this run: https://github.com/nasrinyarali/toolshop-playwright-typescript/actions/runs/42888717209/job/130083833536
Tell me which test failed, quote the error from the log, and suggest a fix.
Don't edit any files yet.
```

Copilot identified the failing product search test, quoted the timeout from the log, and suggested restoring `search-submit`. I applied the fix, kept the assertions unchanged, and started a new GitHub Actions run. The Playwright tests passed.

- [Failed run](https://github.com/nasrinyarali/toolshop-playwright-typescript/actions/runs/42888717209)
- [Passing run](https://github.com/nasrinyarali/toolshop-playwright-typescript/actions/runs/42893149936)

## Automatic CI failure analysis with Copilot CLI

### What I built
I added automatic failure analysis to my GitHub Actions workflow.
When a Playwright test fails, Copilot CLI analyzes the test log
and writes a report in the workflow Summary.

### How it works
1. GitHub Actions installs Copilot CLI.
2. Playwright runs and saves its output to `playwright.log`.
3. If the Playwright step fails, the analysis step runs.
4. Copilot analyzes the log and generates a report with:
 - The failed test.
 - Error evidence.
 - The likely cause.
 - A suggested fix.
5. The report appears in the GitHub Actions Summary.

Authentication uses a token stored in the repository secret
`COPILOT_TOKEN`.

### How I verified it
I intentionally changed the Search button locator to
`search-submit-broken2`.

The test failed while waiting for the button.
Copilot automatically identified the failed test and reported
that the locator was likely incorrect.

The workflow stayed failed. Copilot only provided analysis;
it did not change the code.

### View the result
[Open the workflow run and analysis](PASTE_RUN_URL_HERE)

Open the run and select Summary to see the analysis.

### Short interview explanation
I added automatic failure analysis to my Playwright CI workflow.
When a test fails, Copilot CLI reads the log and reports the
likely cause and a suggested fix in the GitHub Actions Summary.
I review the suggestion before making changes.

