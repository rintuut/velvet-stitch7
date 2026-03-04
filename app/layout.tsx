import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Velvet Stitch7",
  description: "Premium fashion essentials — stitched with style.",
  verification: {
    google: "tXBPKKgGlbatlXFDWEpziR35qYUrIxArdd5z7-62mU4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}