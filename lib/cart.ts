import type { Product } from "./products";

export type CartItem = { product: Product; qty: number };

const KEY = "velvet_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function setCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(product: Product, qty = 1) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.product.id === product.id);

  if (index >= 0) {
    cart[index].qty += qty;
  } else {
    cart.push({ product, qty });
  }

  setCart(cart);
}

export function updateQty(productId: string, qty: number) {
  const cart = getCart();
  const updated = cart
    .map((item) =>
      item.product.id === productId ? { ...item, qty } : item
    )
    .filter((item) => item.qty > 0);

  setCart(updated);
  return updated;
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
}
export function clearCart() {
  localStorage.removeItem("velvet_cart");
}