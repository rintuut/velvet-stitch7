export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Velvet Stitch7</p>
          <p>Cash on Delivery • Easy Returns • Support: support@velvetstitch7.com</p>
        </div>
      </div>
    </footer>
  );
}