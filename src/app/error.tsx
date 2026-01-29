"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen px-4 py-10">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm opacity-80">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded border px-3 py-2 text-sm hover:bg-black/5"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
