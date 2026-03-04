export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  mrp?: number;
  category: string;
  rating: number;
  image: string;
  short: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Cute Handkerchief Embroidery",
    slug: "cute-handkerchief-embroidery",
    price: 299,
    mrp: 499,
    category: "Handkerchief embroidery",
    rating: 4.8,
    image: "/products/handkerchiefembroidery.jpg",
    short: "Soft + cute stitched design",
    description:
      "Custom cute embroidery on premium handkerchief—perfect for gifting and daily use.",
  },
  {
    id: "p2",
    name: "Cute Phone Cover",
    slug: "cute-phone-cover",
    price: 599,
    mrp: 899,
    category: "Phone Covers",
    rating: 4.7,
    image: "/products/phone-cover.jpg",
    short: "Aesthetic embroidered cover",
    description:
      "Cute embroidered phone cover with premium fabric finish—handmade and gift-ready.",
  },
  {
    id: "p3",
    name: "Mini Bouque",
    slug: "mini-bouque",
    price: 499,
    mrp: 799,
    category: "Bouque",
    rating: 4.6,
    image: "/products/bouque.jpg",
    short: "Cute bouquet-style embroidery",
    description:
      "A small embroidery bouque gift—perfect for birthdays, anniversaries and surprises.",
  },
  {
    id: "p4",
    name: "Hoop Embroidery Wall Art",
    slug: "hoop-embroidery-wall-art",
    price: 899,
    mrp: 1299,
    category: "Hoop embroidery Art",
    rating: 4.8,
    image: "/products/hoopembroidery.jpg",
    short: "Handmade hoop embroidery",
    description:
      "Premium hoop embroidery wall art with clean finishing—adds a cute aesthetic to any room.",
  },
];