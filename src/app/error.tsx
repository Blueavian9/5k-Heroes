"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-16">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm opacity-80">
        Please try again. If it keeps happening, we’ll investigate.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-black/5"
      >
        Try again
      </button>
    </section>
  );
}
