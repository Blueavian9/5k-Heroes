import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          5k-heroes
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-black/5"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
