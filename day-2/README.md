# Day 2 – Notes

> Code lives in [`../flower-shop/`](../flower-shop/). This folder only keeps notes.

## Goal

Fix issue [#4](https://github.com/hientruong-agilityio/ai-tool-training/issues/4):
negative numbers should not be allowed in the "Add to Cart" box.

## Git workflow practiced

1. Read the bug report on GitHub (steps, actual vs expected result).
2. Create a branch: `git switch -c fix/day-2-block-invalid-quantity`
3. Change the code, then commit with `Fixes #4` in the message (GitHub closes the issue on merge).
4. Push: `git push -u origin fix/day-2-block-invalid-quantity`
5. Open a Pull Request on GitHub and ask for review.

## What changed in `flower-shop/`

| File | Change |
|------|--------|
| `app.js` | New `parseQty()` accepts digits only and a value of 1 or more. New `setQtyError()` turns the field red and shows the error below it. The error clears when the user types or pastes again. |
| `style.css` | Added `.qty-input.invalid` (red field) and `.qty-error` (red message). |
| `README.md` | Updated test scenario 3 and added 3b. |

Error message: **"Quantity must be a whole number of 1 or more."**
New test hook: `data-testid="qty-error-{productId}"`.

## Test checklist (QA)

Open `flower-shop/index.html` and use any product:

| Input | Click Add to Cart | Expected |
|-------|-------------------|----------|
| `-1` | ✔ | Not added, field red, error shown |
| `0` | ✔ | Not added, field red, error shown |
| `1.5` | ✔ | Not added, field red, error shown |
| empty / pasted `abc` | ✔ | Not added, field red, error shown |
| then type `2` | – | Red highlight and error disappear |
| `2` | ✔ | 2 items added, toast shown |

## Task 2: Blue theme (PR [#6](https://github.com/hientruong-agilityio/ai-tool-training/pull/6))

Change the header, the price text and the buttons from pink to blue.

Branch: `feature/blue-theme` → commit → push → PR #6 → merge into `main`.

| Element | Before | After |
|---------|--------|-------|
| Header background | pink `#e75480` | blue `#1e6fd9` |
| Price text under the flower name | pink `#e75480` | blue `#1e6fd9` |
| 🛒 Cart button text | pink `#e75480` | blue `#1e6fd9` |
| Add to Cart button (hover) | pink `#e75480` (`#c93d68`) | blue `#1e6fd9` (`#1557b0`) |
| Page background | light pink `#fff7f9` | light blue `#f5f9ff` |

Only `flower-shop/style.css` changed. The quantity error message stays red.

**Check:** open `flower-shop/index.html` → header, prices and Add to Cart buttons are blue; hovering a button makes it darker.

## Task 3: Rename shop to "Hana Flower Shop"

Branch: `feature/rename-hana-flower-shop`.

| File | Change |
|------|--------|
| `index.html` | Browser tab title and header: "Blossom Flower Shop" → "Hana Flower Shop" |
| `README.md` | Title updated |

The product "Cherry Blossom" keeps its name (it is a flower, not the shop name).

**Check:** open `flower-shop/index.html` → header and browser tab show "Hana Flower Shop".

## Lessons learned

- At first a copy of the app was made in `day-2/`. Duplicate code is hard to maintain,
  so it was removed: from now on all code changes go to `flower-shop/` and each day folder only holds notes.
