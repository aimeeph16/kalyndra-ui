"use client";

import { useEffect, useState } from "react";
import { site, sections } from "@/lib/content";
import Image from "next/image";
import Logo from "../public/Logo.png";
export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Highlight the link for whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 h-20 border-b border-m-green bg-m-green">
      <div className="mx-auto flex h-full w-full max-w-350 items-center justify-between px-5">
        <a href="#home">
          <Image src={Logo} alt="Kalyndra Logo" width={200} height={100} />
        </a>

        <button
          className="rounded-md border border-line px-3 py-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="nav-links"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-b border-line bg-paper md:static md:flex md:flex-row md:gap-10 md:border-0 md:bg-transparent`}
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`border-b border-line px-6 py-3 text-sm md:border-b-2 md:border-line/0 md:px-0 md:py-1 ${
                  isActive
                    ? "text-m-yellow md:border-m-yellow!"
                    : "text-m-cream hover:text-m-blue"
                }`}
              >
                {s.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
