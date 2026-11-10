# Product Search Test Plan

## Application Overview

Verify that a guest can search Toolshop for the exact product name "Combination Pliers" and see the matching product card in the search results. Preconditions: Toolshop is running at http://localhost:4200; start from a fresh browser session on the home page with no account signed in and no search/filter query applied.

## Test Scenarios

### 1. Guest product search

**Seed:** `tests/seed.spec.ts`

#### 1.1. Guest searches for Combination Pliers and sees the exact product card

**File:** `tests/ui/product-search.spec.ts`

**Steps:**
  1. Open the Toolshop home page as a guest.
    - expect: The home page loads and the guest is not signed in.
  2. In the Search field, enter "Combination Pliers" and activate the Search button.
    - expect: The search is submitted for the exact text "Combination Pliers".
  3. Inspect the search results.
    - expect: The results show a product card whose exact product name is "Combination Pliers".
    - expect: The result heading identifies the search term as "Combination Pliers".
