"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    // Retrieve the theme from localStorage or default to "light"
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    const root = document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const root = document.documentElement;
    root.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
  };

  if (theme === undefined) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-700"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
