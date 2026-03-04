import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="text-sm text-gray-600">{products.length} products</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}