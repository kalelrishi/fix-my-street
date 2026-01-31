"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  function linkStyle(path: string) {
    return pathname === path
      ? "text-black font-semibold"
      : "text-gray-700 hover:text-black";
  }

  return (
    <header className="sticky top-0 z-50 bg-yellow-400/90 backdrop-blur border-b border-yellow-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-lg font-bold text-black">
          Fix My Street
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/issues" className={linkStyle("/issues")}>
            Issues
          </Link>
          <Link href="/admin" className={linkStyle("/admin")}>
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
