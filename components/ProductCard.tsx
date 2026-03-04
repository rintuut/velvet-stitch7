import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="group rounded-2xl border bg-white p-3 shadow-sm transition hover:shadow-md"
    >
     <img
  src={p.image}
  alt={p.name}
  className="aspect-square w-full rounded-xl object-cover"
/>
      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium">{p.name}</p>
        <p className="text-xs text-gray-600">{p.short}</p>

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">₹{p.price}</p>
          {p.mrp ? (
            <p className="text-xs text-gray-500 line-through">₹{p.mrp}</p>
          ) : null}
          <span className="ml-auto text-xs text-gray-600">⭐ {p.rating}</span>
        </div>
      </div>
    </Link>
  );
}