import { products } from "@/lib/products";

export default function sitemap() {
  const baseUrl = "https://velvet-stitch7.vercel.app";

  const productPages = products.map((p) => ({
    url: `${baseUrl}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
    },
    ...productPages,
  ];
}