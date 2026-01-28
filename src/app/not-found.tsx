import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm opacity-80">
        The page you’re looking for doesn’t exist.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-black/5"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
