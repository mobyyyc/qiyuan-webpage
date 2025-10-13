"use client";

import React, { useEffect, useState } from "react";

export default function ThemeToggle(): React.ReactElement {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore quota errors
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      type="button"
      aria-pressed={theme === "dark"}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="theme-toggle"
      onClick={toggle}
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}
