"use client";

import { useEffect, useMemo, useState } from "react";
import { CartItem, cartTotal, clearCart, getCart } from "@/lib/cart";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => setItems(getCart()), []);
  const total = useMemo(() => cartTotal(items), [items]);

  const canPlace =
    items.length > 0 &&
    form.fullName.trim() &&
    form.phone.trim().length >= 10 &&
    form.address.trim() &&
    form.city.trim() &&
    form.pincode.trim().length >= 6;

  if (placed) {
    return (
      <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold">Order placed ✅</h1>
        <p className="mt-2 text-gray-600">
          Thank you for shopping with The Velvet Stitch7. We’ll contact you soon.
        </p>
        <Button className="mt-6" onClick={() => (window.location.href = "/")}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-semibold">Checkout (COD)</h1>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm font-medium">Delivery details</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Input
              placeholder="Full name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <Input
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <div className="sm:col-span-2">
              <Input
                placeholder="Full address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>
            <Input
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <Input
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) => setForm({ ...form, pincode: e.target.value })}
            />
          </div>

          <div className="mt-5 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            Payment method: <span className="font-semibold">Cash on Delivery</span>
          </div>
        </div>
      </div>

      <div className="h-fit rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Summary</h2>
        <p className="mt-1 text-sm text-gray-600">{items.length} item(s)</p>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <Button
          className="mt-5 w-full"
          disabled={!canPlace}
          onClick={() => {
            clearCart();
            window.dispatchEvent(new Event("storage"));
            setPlaced(true);
          }}
        >
          Place Order
        </Button>

        {!canPlace ? (
          <p className="mt-3 text-xs text-gray-500">
            Fill all details correctly to place order.
          </p>
        ) : null}
      </div>
    </div>
  );
}