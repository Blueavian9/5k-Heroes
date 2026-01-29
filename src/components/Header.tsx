import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          5k-heroes
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/signin"
            className="rounded border px-3 py-1 hover:bg-black/5"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
