"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-1 right-[17%]  rounded-full opacity-75 z-50 w-2/3 bg-gray-800 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">
            <Link href="/" className="hover:underline">
              Quantum News
            </Link>
          </h1>
        </div>

        {/* Links and Actions */}
        <div className="flex items-center space-x-12">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/analytics" className="hover:underline">
            Analytics
          </Link>
          <ThemeToggle />

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
