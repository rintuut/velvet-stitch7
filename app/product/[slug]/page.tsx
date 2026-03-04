"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { Button } from "@/components/ui/Button";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const product = useMemo(
    () => products.find((p) => p.slug === params.slug),
    [params.slug]
  );

  if (!product) return <div className="text-sm">Product not found.</div>;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Image placeholder */}
      <div className="aspect-square rounded-3xl border bg-white shadow-sm" />

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        <div className="flex items-center gap-3">
          <p className="text-2xl font-semibold">₹{product.price}</p>
          {product.mrp ? (
            <p className="text-gray-500 line-through">₹{product.mrp}</p>
          ) : null}
          <span className="ml-auto text-sm text-gray-600">⭐ {product.rating}</span>
        </div>

        <p className="text-gray-600">{product.description}</p>

        <div className="flex gap-3">
          <Button
            onClick={() => {
              addToCart(product, 1);
              window.dispatchEvent(new Event("storage"));
              alert("Added to cart ✅");
            }}
          >
            Add to Cart
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              addToCart(product, 1);
              window.dispatchEvent(new Event("storage"));
              router.push("/cart");
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}