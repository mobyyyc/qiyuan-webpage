"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(): React.ReactElement {
  return (
    <header className="w-full bg-transparent border-b border-black/[.04] dark:border-white/[.06]">
      <div className="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="font-semibold text-lg uppercase">QIYUAN CAI</a>
          <nav className="hidden sm:flex gap-3 items-center ml-4 uppercase">
            <a className="text-sm hover:underline" href="#about">ABOUT</a>
            <a className="text-sm hover:underline" href="#projects">PROJECTS</a>
            <a className="text-sm hover:underline" href="#contact">CONTACT</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 text-sm hover:underline"
            href="https://github.com/mobyyyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hidden sm:inline-flex items-center gap-2 text-sm hover:underline"
            href="https://www.linkedin.com/in/qiyuancai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
