"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  function linkClass(path: string) {
    return pathname === path
      ? "text-black font-bold underline underline-offset-4"
      : "text-gray-800 hover:text-black";
  }

  return (
    <nav className="w-full bg-yellow-400 px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* App Name */}
        <Link href="/" className="text-xl font-extrabold text-black">
          Fix My Street
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/issues" className={linkClass("/issues")}>
            Issues
          </Link>
          <Link href="/admin/" className={linkClass("/admin/issues")}>
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
