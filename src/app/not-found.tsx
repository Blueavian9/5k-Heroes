import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm opacity-80">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        className="mt-6 inline-block rounded border px-3 py-2 text-sm hover:bg-black/5"
        href="/"
      >
        Back home
      </Link>
    </div>
  );
}
