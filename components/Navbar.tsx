
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartNoAxesCombined,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Companies", href: "/shares" },
  { name: "Sectors", href: "/sectors" },
  { name: "Events", href: "/events" },
  { name: "Insights", href: "/research" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10243B] text-white shadow-lg shadow-slate-950/10">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B7F36B] text-[#10243B]">
            <ChartNoAxesCombined size={23} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-extrabold tracking-tight">
            unlisted<span className="text-[#B7F36B]">forall</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[13px] font-semibold transition ${
                  active
                    ? "text-[#B7F36B]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-[18px] left-0 h-[3px] w-full rounded-full bg-[#B7F36B]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/shares"
            className="inline-flex items-center gap-2 rounded-lg bg-[#B7F36B] px-5 py-3 text-sm font-bold text-[#10243B] transition hover:bg-[#a5e75a]"
          >
            Explore markets
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[#10243B] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-white/10 text-[#B7F36B]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-semibold"
              >
                Login
              </Link>

              <Link
                href="/shares"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-[#B7F36B] px-4 py-3 text-center text-sm font-bold text-[#10243B]"
              >
                Explore markets
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
