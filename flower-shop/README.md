# Hana Flower Shop

A simple flower shop app (plain HTML/CSS/JS, no installation needed).

## Run the app

Open `index.html` in a browser (double-click the file).

## Feature: Add to Cart

| # | Scenario | Expected result |
|---|----------|-----------------|
| 1 | Enter a quantity and click **Add to Cart** | Product appears in the cart, 🛒 badge increases, a toast message is shown |
| 2 | Add the same product multiple times | Quantity accumulates, no duplicate row is created |
| 3 | Quantity is `-1`, `0`, `1.5`, empty or pasted text, then click **Add to Cart** | Nothing is added, the field turns red and "Quantity must be a whole number of 1 or more." is shown below it |
| 3b | After the error, type a valid quantity | Red highlight and error message disappear |
| 4 | Add 1000 of one product | 1000 is added, total = quantity × price |
| 5 | Total quantity of one product exceeds 9999 | Capped at 9999, a maximum warning is shown |
| 6 | Click **+ / −** in the cart | Quantity increases/decreases by 1; reaching 0 removes the row |
| 7 | Click **✕** | Product is removed from the cart |
| 8 | Click **Clear cart** | Cart is empty, total = 0 VND |
| 9 | Reload the page | Cart contents are kept (localStorage) |

Elements have `data-testid` attributes for automated tests (e.g. `add-to-cart-1`, `cart-count`, `cart-total`).
