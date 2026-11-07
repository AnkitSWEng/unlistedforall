
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";
import Navbar from "./Navbar";

export default function InnerPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="min-h-screen bg-[#F4F6F8] text-[#10243B]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#10243B]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-[320px] w-[320px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#B7F36B]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B7F36B]">
              <span className="h-px w-8 bg-[#B7F36B]" />
              UNLISTEDFORALL / MARKET INTELLIGENCE
            </div>

            <div className="mb-6">
              <Link
                href="/"
                className="text-sm text-slate-400 transition hover:text-[#B7F36B]"
              >
                Home
              </Link>
              <span className="mx-3 text-slate-600">/</span>
              <span className="text-sm text-slate-300">{title}</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              {title}
              <span className="text-[#B7F36B]">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shares"
                className="inline-flex items-center gap-3 rounded-lg bg-[#B7F36B] px-6 py-4 text-sm font-bold text-[#10243B] transition hover:bg-[#a5e75a]"
              >
                Explore companies
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center gap-3 rounded-lg border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#B7F36B] hover:text-[#B7F36B]"
              >
                Latest announcements
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <ChartNoAxesCombined className="mb-3 text-[#B7F36B]" size={22} />
              <p className="text-sm font-bold text-white">Market intelligence</p>
              <p className="mt-1 text-xs text-slate-400">
                Explore private markets
              </p>
            </div>

            <div>
              <ShieldCheck className="mb-3 text-[#B7F36B]" size={22} />
              <p className="text-sm font-bold text-white">Research focused</p>
              <p className="mt-1 text-xs text-slate-400">
                Make informed decisions
              </p>
            </div>

            <div>
              <ArrowUpRight className="mb-3 text-[#B7F36B]" size={22} />
              <p className="text-sm font-bold text-white">Company discovery</p>
              <p className="mt-1 text-xs text-slate-400">
                Discover opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/shares"
            className="group rounded-2xl border border-[#E2E8EE] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
              EXPLORE
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#10243B]">
              Discover unlisted companies
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Explore companies and their available market information.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#10243B] group-hover:text-[#168653]">
              Explore shares <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            href="/events"
            className="group rounded-2xl border border-[#E2E8EE] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
              STAY INFORMED
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#10243B]">
              Corporate events and announcements
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Follow important corporate actions, filings and shareholder events.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#10243B] group-hover:text-[#168653]">
              View events <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#E2E8EE] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-[#10243B]">
            <ChartNoAxesCombined className="text-[#168653]" size={20} />
            unlisted<span className="text-[#168653]">forall</span>
          </Link>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} UnlistedForAll. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
