import Link from "next/link";
import { Button } from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="space-y-10">

      {/* Hero Section */}
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="max-w-2xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Premium fashion essentials — stitched with style.
          </h1>

          <p className="text-gray-600">
            Welcome to <span className="font-medium">The Velvet Stitch7</span>.
            Clean, minimal, premium fashion pieces designed for everyday style.
          </p>

          <div className="flex gap-3">
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>

            <Link href="/cart">
              <Button variant="secondary">View Cart</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured Products</h2>

          <Link href="/shop" className="text-sm text-gray-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

    </div>
  );
}