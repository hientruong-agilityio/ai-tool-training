const PRODUCTS = [
  { id: 1, name: "Hoa Hồng Đỏ", price: 250000, emoji: "🌹" },
  { id: 2, name: "Hoa Hướng Dương", price: 180000, emoji: "🌻" },
  { id: 3, name: "Hoa Tulip", price: 300000, emoji: "🌷" },
  { id: 4, name: "Hoa Anh Đào", price: 350000, emoji: "🌸" },
  { id: 5, name: "Hoa Cúc Trắng", price: 120000, emoji: "🌼" },
  { id: 6, name: "Hoa Lan", price: 450000, emoji: "🪷" },
];

const MAX_QTY = 99;
const STORAGE_KEY = "flower-shop-cart";

// cart: { [productId]: quantity }
let cart = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

function formatPrice(value) {
  return value.toLocaleString("vi-VN") + " ₫";
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function addToCart(productId, qty) {
  if (!Number.isInteger(qty) || qty < 1) {
    showToast("Số lượng không hợp lệ");
    return;
  }
  const current = cart[productId] || 0;
  const next = Math.min(current + qty, MAX_QTY);
  cart[productId] = next;
  saveCart();
  renderCart();
  const product = findProduct(productId);
  if (next === MAX_QTY && current + qty > MAX_QTY) {
    showToast(`Tối đa ${MAX_QTY} sản phẩm cho ${product.name}`);
  } else {
    showToast(`Đã thêm ${qty} ${product.name} vào giỏ`);
  }
}

function updateQty(productId, qty) {
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = Math.min(qty, MAX_QTY);
  }
  saveCart();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart();
  renderCart();
  showToast("Đã xóa giỏ hàng");
}

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = PRODUCTS.map(
    (p) => `
      <div class="product" data-testid="product-${p.id}">
        <div class="emoji">${p.emoji}</div>
        <h3>${p.name}</h3>
        <div class="price">${formatPrice(p.price)}</div>
        <input type="number" class="qty-input" min="1" max="${MAX_QTY}" value="1"
               id="qty-${p.id}" data-testid="qty-${p.id}" aria-label="Số lượng ${p.name}" />
        <button class="btn btn-primary" data-add="${p.id}" data-testid="add-to-cart-${p.id}">
          Thêm vào giỏ
        </button>
      </div>`
  ).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const id = Number(btn.dataset.add);
    const qty = Number(document.getElementById(`qty-${id}`).value);
    addToCart(id, qty);
  });
}

function renderCart() {
  const items = Object.entries(cart)
    .map(([id, qty]) => ({ product: findProduct(Number(id)), qty }))
    .filter((item) => item.product);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.product.price, 0);

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = formatPrice(total);
  document.getElementById("cart-empty").hidden = items.length > 0;
  document.getElementById("clear-cart").hidden = items.length === 0;

  document.getElementById("cart-items").innerHTML = items
    .map(
      ({ product, qty }) => `
      <li class="cart-item" data-testid="cart-item-${product.id}">
        <span class="name">${product.emoji} ${product.name}</span>
        <span class="controls">
          <button class="btn btn-small" data-dec="${product.id}" data-testid="dec-${product.id}">−</button>
          <span data-testid="cart-qty-${product.id}">${qty}</span>
          <button class="btn btn-small" data-inc="${product.id}" data-testid="inc-${product.id}">+</button>
          <button class="btn btn-small" data-remove="${product.id}" data-testid="remove-${product.id}">✕</button>
        </span>
      </li>`
    )
    .join("");
}

function setupCartEvents() {
  document.getElementById("cart-items").addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset.inc) updateQty(Number(t.dataset.inc), cart[t.dataset.inc] + 1);
    if (t.dataset.dec) updateQty(Number(t.dataset.dec), cart[t.dataset.dec] - 1);
    if (t.dataset.remove) updateQty(Number(t.dataset.remove), 0);
  });
  document.getElementById("clear-cart").addEventListener("click", clearCart);
  document.getElementById("cart-toggle").addEventListener("click", () => {
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
  });
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

renderProducts();
setupCartEvents();
renderCart();
