"use client";
import { site, sections } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-6 text-[#e6ecea] text-center">
      <div className="flex flex-col mx-auto w-full max-w-[1100px] gap-2 px-5">
        <div className="text-center text-sm">
          {site.name}
        </div>

        <small className="text-xs border-t border-white/20 pt-2 opacity-65 md:col-span-2">
          Offices in Jakarta & Batam
        </small>
      </div>
    </footer>
  );
}
