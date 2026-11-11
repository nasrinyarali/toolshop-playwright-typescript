# Toolshop Test Automation

A portfolio project for automating Toolshop UI and API tests with
Playwright and TypeScript. Tests run in GitHub Actions, and a separate
CI workflow demonstrates how GitHub Copilot can analyze test failures.

## Test Coverage

- **UI:** Login validation, registration navigation, and product search.
- **API:** Direct checks of Toolshop API responses.
- **Framework:** Page Object Model, reusable fixtures and utilities,
 and configuration for multiple environments.

## Run Locally

From the repository root:

```bash
npm ci
npx playwright install
npx playwright test
```

To open the HTML report after a test run that generates one:

```bash
npx playwright show-report
```

## GitHub Actions and Failure Analysis

Open the repository's **Actions** tab to see workflow runs.

When a Playwright test fails in the failure-analysis workflow,
GitHub Copilot CLI reads the test log and adds the likely cause
and a suggested fix to the run summary.

[Read how the failure analysis works](docs/playwright-mcp-workflow.md)

