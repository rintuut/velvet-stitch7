"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CartItem, cartTotal, getCart, updateQty } from "@/lib/cart";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const total = cartTotal(items);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-semibold">Your Cart</h1>

        {items.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
            Cart is empty.{" "}
            <Link className="underline" href="/shop">
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.product.id} className="rounded-2xl border bg-white p-4">
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 rounded-xl bg-gray-100" />

                  <div className="flex-1">
                    <p className="font-medium">{it.product.name}</p>
                    <p className="text-sm text-gray-600">₹{it.product.price}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        className="rounded-lg border px-3 py-1 text-sm"
                        onClick={() => {
                          const next = updateQty(it.product.id, it.qty - 1);
                          setItems(next);
                          window.dispatchEvent(new Event("storage"));
                        }}
                      >
                        -
                      </button>

                      <span className="w-8 text-center text-sm">{it.qty}</span>

                      <button
                        className="rounded-lg border px-3 py-1 text-sm"
                        onClick={() => {
                          const next = updateQty(it.product.id, it.qty + 1);
                          setItems(next);
                          window.dispatchEvent(new Event("storage"));
                        }}
                      >
                        +
                      </button>

                      <button
                        className="ml-auto text-sm text-gray-600 underline"
                        onClick={() => {
                          const next = updateQty(it.product.id, 0);
                          setItems(next);
                          window.dispatchEvent(new Event("storage"));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-semibold">
                    ₹{it.product.price * it.qty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="h-fit rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Order Summary</h2>

        <div className="mt-3 flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>₹0</span>
        </div>

        <div className="mt-4 flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <Link href="/checkout">
          <Button className="mt-5 w-full" disabled={items.length === 0}>
            Proceed to Checkout
          </Button>
        </Link>

        <p className="mt-3 text-xs text-gray-500">
          Payment method: Cash on Delivery (COD)
        </p>
      </div>
    </div>
  );
}