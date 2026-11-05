"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";

const companies = [
  { name: "Metropolitan Stock Exchange (MSEI)", sector: "Financial Services", price: 6.75, symbol: "MSEI", color: "bg-blue-100 text-blue-700" },
  { name: "Hindustan Power Exchange Limited", sector: "Energy & Power", price: 24, symbol: "HPX", color: "bg-amber-100 text-amber-700" },
  { name: "Onix Renewable Limited", sector: "Renewable Energy", price: 45, symbol: "OR", color: "bg-green-100 text-green-700" },
  { name: "GFCL EV Products Limited", sector: "Automotive", price: 39.5, symbol: "GFCL", color: "bg-purple-100 text-purple-700" },
  { name: "GH2 Solar Limited", sector: "Renewable Energy", price: 315, symbol: "GH2", color: "bg-yellow-100 text-yellow-700" },
  { name: "Zepto Unlisted Shares", sector: "E-Commerce & Internet", price: 29, symbol: "Z", color: "bg-pink-100 text-pink-700" },
  { name: "Oravel Stays Limited", sector: "Hospitality & Tourism", price: 22.5, symbol: "OYO", color: "bg-red-100 text-red-700" },
  { name: "Hinduja Leyland Finance", sector: "NBFC", price: 232, symbol: "HLF", color: "bg-indigo-100 text-indigo-700" },
  { name: "Cochin International Airport", sector: "Aviation", price: 455, symbol: "CIA", color: "bg-cyan-100 text-cyan-700" },
  { name: "Orbis Financial Corporation", sector: "Capital Markets", price: 325, symbol: "ORB", color: "bg-orange-100 text-orange-700" },
  { name: "Chennai Super Kings Cricket", sector: "Media & Entertainment", price: 236, symbol: "CSK", color: "bg-yellow-100 text-yellow-800" },
  { name: "Parag Parikh Financial Advisory", sector: "Financial Services", price: 18500, symbol: "PPFAS", color: "bg-emerald-100 text-emerald-700" },
  { name: "Motilal Oswal Home Finance", sector: "Housing Finance", price: 9.75, symbol: "MOHF", color: "bg-sky-100 text-sky-700" },
  { name: "Polymatech Electronics", sector: "Semiconductors", price: 39.5, symbol: "PE", color: "bg-violet-100 text-violet-700" },
  { name: "NCDEX Limited", sector: "Financial Services", price: 258, symbol: "NCDEX", color: "bg-teal-100 text-teal-700" },
  { name: "Kineco Limited", sector: "Defence", price: 3875, symbol: "K", color: "bg-rose-100 text-rose-700" },
  { name: "Apollo Green Energy", sector: "Renewable Energy", price: 62, symbol: "AGE", color: "bg-lime-100 text-lime-700" },
  { name: "Mohan Meakin Limited", sector: "Consumer Goods & Services", price: 2250, symbol: "MM", color: "bg-orange-100 text-orange-700" },
];

const formatPrice = (price: number) =>
  "₹" + price.toLocaleString("en-IN", { maximumFractionDigits: 2 });

export default function SharesPage() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All sectors");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const sectors = ["All sectors", ...Array.from(new Set(companies.map(c => c.sector)))];

  const filtered = useMemo(() => {
    let result = companies.filter(company => {
      const matchesSearch =
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        company.sector.toLowerCase().includes(search.toLowerCase());

      const matchesSector =
        sector === "All sectors" || company.sector === sector;

      return matchesSearch && matchesSector;
    });

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, sector, sort]);

  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visibleCompanies = filtered.slice((page - 1) * perPage, page * perPage);

  function resetFilters() {
    setSearch("");
    setSector("All sectors");
    setSort("default");
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white">
              U
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              unlisted<span className="text-emerald-600">forall</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="hover:text-emerald-600">Home</Link>
            <Link href="/shares" className="text-emerald-600">Unlisted Shares</Link>
            <Link href="/sectors" className="hover:text-emerald-600">Sectors</Link>
            <Link href="/research" className="hover:text-emerald-600">Research</Link>
            <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
          </nav>

          <Link href="/contact" className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700">
            Get in touch <ArrowRight className="ml-1 inline" size={15} />
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-slate-500 lg:px-8">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <ChevronRight className="mx-2 inline" size={14} />
          <span className="font-medium text-slate-900">Unlisted Shares</span>
        </div>
      </div>

      {/* Page heading */}
      <section className="bg-[#F5FAF8]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            PRICE LIST
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            All unlisted & pre-IPO shares
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Explore unlisted companies across India. Discover company
            information, indicative prices and business sectors.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-extrabold text-slate-900">266+</p>
              <p className="mt-1 text-sm text-slate-500">Companies tracked</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">18+</p>
              <p className="mt-1 text-sm text-slate-500">Listed here</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">100%</p>
              <p className="mt-1 text-sm text-slate-500">Research focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold">Browse companies</h2>
            <p className="mt-2 text-sm text-slate-500">
              Showing {filtered.length} companies
            </p>
          </div>

          <button onClick={resetFilters} className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
            Reset filters <X className="ml-1 inline" size={15} />
          </button>
        </div>

        {/* Search and filters */}
        <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3">

          <div className="relative md:col-span-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search companies..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="relative">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <select
              value={sector}
              onChange={e => { setSector(e.target.value); setPage(1); }}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
            >
              {sectors.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <select
            value={sort}
            onChange={e => { setSort(e.target.value); setPage(1); }}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
          >
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Company cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {visibleCompanies.map(company => {
            const slug = company.symbol.toLowerCase();

            return (
              <article key={company.symbol} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5">

                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold ${company.color}`}>
                    {company.symbol.slice(0, 3)}
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Indicative
                  </span>
                </div>

                <div className="mt-6 min-h-[80px]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {company.sector}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
                    {company.name}
                  </h3>
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">Indicative price</p>
                    <p className="mt-1 text-2xl font-extrabold text-slate-900">
                      {formatPrice(company.price)}
                    </p>
                  </div>

                  <Link
                    href={`/shares/${slug}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-emerald-600 group-hover:text-white"
                    aria-label={`View ${company.name}`}
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 rounded-xl bg-emerald-600 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    Enquire
                  </Link>

                  <Link
                    href={`/shares/${slug}`}
                    className="flex-1 rounded-xl border border-slate-200 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
                  >
                    Details
                  </Link>
                </div>
              </article>
            );
          })}

        </div>

        {visibleCompanies.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
            <Search className="mx-auto text-slate-300" size={35} />
            <h3 className="mt-4 text-lg font-bold">No companies found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or sector filter.
            </p>
            <button onClick={resetFilters} className="mt-5 font-semibold text-emerald-700">
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filtered.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-10 w-10 rounded-lg text-sm font-bold ${
                  page === p
                    ? "bg-emerald-600 text-white"
                    : "border border-slate-200 text-slate-600 hover:border-emerald-500"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs leading-6 text-slate-400">
          Prices shown are illustrative reference data and are not live market quotes.
          Indicative prices are not guaranteed transaction prices or investment advice.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="rounded-3xl bg-[#10243B] px-8 py-14 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            NEED HELP?
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Looking for a particular company?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Get in touch with our team for company information and enquiries.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white hover:bg-emerald-400">
            Contact us <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 text-sm text-slate-500 md:flex-row lg:px-8">
          <Link href="/" className="font-extrabold text-slate-900">
            unlisted<span className="text-emerald-600">forall</span>
          </Link>
          <p>© {new Date().getFullYear()} unlistedforall. All rights reserved.</p>
          <Link href="/contact" className="hover:text-emerald-600">Contact us</Link>
        </div>
      </footer>
    </main>
  );
}
