"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";
import { Input } from "@/components/ui/Input";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => setCount(getCart().reduce((s, i) => s + i.qty, 0));
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        
        <Link href="/" className="text-lg font-semibold">
          The Velvet Stitch7
        </Link>

        <div className="hidden flex-1 md:block">
          <Input placeholder="Search products..." />
        </div>

        <nav className="ml-auto flex items-center gap-4 text-sm">
          <Link href="/shop">Shop</Link>

          <Link href="/cart">
            Cart ({count})
          </Link>
        </nav>

      </div>
    </header>
  );
}