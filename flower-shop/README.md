# Blossom Flower Shop

A simple flower shop app (plain HTML/CSS/JS, no installation needed).

## Run the app

Open `index.html` in a browser (double-click the file).

## Feature: Add to Cart

| # | Scenario | Expected result |
|---|----------|-----------------|
| 1 | Enter a quantity and click **Add to Cart** | Product appears in the cart, 🛒 badge increases, a toast message is shown |
| 2 | Add the same product multiple times | Quantity accumulates, no duplicate row is created |
| 3 | Quantity ≤ 0 or not a whole number | Nothing is added, "Invalid quantity" is shown |
| 4 | Total quantity of one product exceeds 99 | Capped at 99, a maximum warning is shown |
| 5 | Click **+ / −** in the cart | Quantity increases/decreases by 1; reaching 0 removes the row |
| 6 | Click **✕** | Product is removed from the cart |
| 7 | Click **Clear cart** | Cart is empty, total = 0 VND |
| 8 | Reload the page | Cart contents are kept (localStorage) |

Elements have `data-testid` attributes for automated tests (e.g. `add-to-cart-1`, `cart-count`, `cart-total`).
