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

## Task 4: Reset quantity to 1 after adding to cart (issue [#3](https://github.com/hientruong-agilityio/ai-tool-training/issues/3))

Branch: `feature/3-reset-qty-after-add`.

Decisions for the open questions in the ticket:
- Out-of-stock message: **"Only {n} {flower} left in stock."** ({n} = stock minus what is already in the cart)
- "Tulip" is renamed to **"Yellow Tulip"**
- Each flower has its own stock, shown on the card as "In stock: N"
- Page refresh: quantity fields always start at 1 (cart is still kept)

| Flower | Stock |
|--------|-------|
| Red Rose | 500 |
| Sunflower | 300 |
| Yellow Tulip | 2000 |
| Cherry Blossom | 1000 |
| White Daisy | 10 (use it to test AC3) |
| Lotus | 50 |

What changed in `flower-shop/`:
- `app.js`: products have a `stock`; the old 9999 limit is replaced by stock. After a successful add the field resets to 1; on any error the value is kept. The cart **+** button never goes above stock.
- `style.css`: style for the "In stock" line.
- `README.md`: updated test scenarios 1, 3, 4, 5, 5b, 6.

| AC | Steps | Expected |
|----|-------|----------|
| AC1 | Yellow Tulip: enter 50 → Add to Cart | 50 added, field shows 1 |
| AC2 | Yellow Tulip: enter -1 → Add to Cart | Not added, error shown, field still -1 |
| AC3 | White Daisy (stock 10): enter 50 → Add to Cart | Not added, "Only 10 White Daisy left in stock.", field still 50 |
| AC4 | Yellow Tulip 50, Red Rose 20 → Add on Yellow Tulip | Only tulips added; Yellow Tulip field 1, Red Rose still 20 |

## Lessons learned

- At first a copy of the app was made in `day-2/`. Duplicate code is hard to maintain,
  so it was removed: from now on all code changes go to `flower-shop/` and each day folder only holds notes.
