# Hana Flower Shop

A simple flower shop app (plain HTML/CSS/JS, no installation needed).

## Run the app

Open `index.html` in a browser (double-click the file).

## Feature: Add to Cart

| # | Scenario | Expected result |
|---|----------|-----------------|
| 1 | Enter a quantity and click **Add to Cart** | Product appears in the cart, 🛒 badge increases, a toast message is shown, the quantity field resets to 1 |
| 2 | Add the same product multiple times | Quantity accumulates, no duplicate row is created |
| 3 | Quantity is `-1`, `0`, `1.5` or pasted text, then click **Add to Cart** | Nothing is added, the field turns red, "Quantity must be a whole number of 1 or more." is shown below it, the entered value is kept |
| 3b | After the error, type a valid quantity | Red highlight and error message disappear |
| 3c | Delete the value in the quantity field, then click outside it | The field is filled with 1 again |
| 4 | Add 1000 Yellow Tulips (stock 2000) | 1000 is added, total = quantity × price |
| 5 | Enter more than the stock left (e.g. 50 White Daisy, stock 10) | Nothing is added, the field turns red, "Only 10 White Daisy left in stock." is shown, the value 50 is kept |
| 5b | Enter 50 Yellow Tulip and 20 Red Rose, click Add on Yellow Tulip | Only Yellow Tulip is added; its field resets to 1, Red Rose still shows 20 |
| 6 | Click **+ / −** in the cart | Quantity increases/decreases by 1 (never above the stock); reaching 0 removes the row |
| 7 | Click **✕** | Product is removed from the cart |
| 8 | Click **Clear cart** | Cart is empty, total = 0 VND |
| 9 | Reload the page | Cart contents are kept (localStorage) |

Elements have `data-testid` attributes for automated tests (e.g. `add-to-cart-1`, `cart-count`, `cart-total`).
