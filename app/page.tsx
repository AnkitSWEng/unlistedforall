
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ShieldCheck,
  TrendingUp,
  Building2,
  ChartNoAxesCombined,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";

const companies = [
  {
    name: "National Stock Exchange",
    symbol: "NSE",
    sector: "Financial Services",
    price: "₹1,850",
    change: "+4.25%",
    initials: "N",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "HDB Financial Services",
    symbol: "HDBFS",
    sector: "Finance",
    price: "₹850",
    change: "+2.80%",
    initials: "H",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Oravel Stays",
    symbol: "OYO",
    sector: "Hospitality",
    price: "₹48",
    change: "+1.65%",
    initials: "O",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Studds Accessories",
    symbol: "STUDDS",
    sector: "Automobile",
    price: "₹610",
    change: "+3.20%",
    initials: "S",
    color: "bg-purple-100 text-purple-700",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Research with confidence",
    desc: "Access company information and financial insights before making decisions.",
  },
  {
    icon: TrendingUp,
    title: "Track indicative prices",
    desc: "Stay updated with indicative prices and historical market information.",
  },
  {
    icon: Building2,
    title: "Discover companies",
    desc: "Explore businesses across multiple sectors and industries.",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
        <ChartNoAxesCombined size={23} />
      </div>
      <span className="text-xl font-extrabold tracking-tight text-slate-900">
        unlisted<span className="text-emerald-600">forall</span>
      </span>
    </Link>
  );
}

function ShareCard({
  company,
}: {
  company: (typeof companies)[number];
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${company.color}`}
        >
          {company.initials}
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {company.change}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {company.symbol}
        </p>
        <h3 className="mt-1 text-lg font-bold text-slate-900">
          {company.name}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{company.sector}</p>
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-500">Indicative price</p>
          <p className="mt-1 text-2xl font-extrabold text-slate-900">
            {company.price}
          </p>
        </div>
        <Link
          href={`/shares/${company.symbol.toLowerCase()}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
          aria-label={`View ${company.name}`}
        >
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="text-emerald-600">Home</Link>
            <Link href="/shares" className="hover:text-emerald-600">Unlisted Shares</Link>
            <Link href="/sectors" className="hover:text-emerald-600">Sectors</Link>
            <Link href="/events" className="hover:text-emerald-600">Events</Link>
            <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-700">
              Login
            </Link>
            <Link
              href="/shares"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore Shares <ArrowRight className="ml-2 inline" size={15} />
            </Link>
          </div>

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded-lg border border-slate-200 p-2">
              <Menu size={22} />
            </summary>
            <nav className="absolute right-0 top-14 z-50 flex w-56 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium shadow-xl">
              <Link href="/">Home</Link>
              <Link href="/shares">Unlisted Shares</Link>
              <Link href="/sectors">Sectors</Link>
              <Link href="/events">Events</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/login">Login</Link>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5FAF8]">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">
              <Sparkles size={14} />
              YOUR GATEWAY TO UNLISTED MARKETS
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Discover what&apos;s
              <span className="block text-emerald-600">beyond listed.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
              Explore India&apos;s unlisted companies, discover investment
              opportunities and make informed decisions with better research.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/shares"
                className="rounded-xl bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                Explore Unlisted Shares <ArrowRight className="ml-2 inline" size={17} />
              </Link>

              <Link
  href="/events"
  className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 hover:border-emerald-500"
>
  Explore Events
</Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck className="text-emerald-600" size={20} />
              Independent research. Transparent information.
            </div>
          </div>

          {/* Market overview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[40px] bg-emerald-200/30 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Market overview</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Explore the market
                  </h2>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <ChartNoAxesCombined size={25} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Discover opportunities</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">
                  Beyond Listed
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Find your next company to research.
                </p>
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <Search size={18} className="text-slate-400" />
                  <span className="text-sm text-slate-400">Search companies...</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {companies.slice(0, 3).map((company) => (
                  <div
                    key={company.symbol}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold ${company.color}`}>
                        {company.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {company.name}
                        </p>
                        <p className="text-xs text-slate-400">{company.symbol}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">{company.price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                Illustrative data for demonstration only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular shares */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                MARKETPLACE
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Explore popular shares
              </h2>
              <p className="mt-3 text-slate-500">
                Discover companies and explore their indicative prices.
              </p>
            </div>

            <Link href="/shares" className="font-semibold text-emerald-700 hover:text-emerald-800">
              View all shares <ArrowRight className="ml-1 inline" size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company) => (
              <ShareCard key={company.symbol} company={company} />
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            All company names and prices shown are demonstration content.
            They are not verified market quotes or investment recommendations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#10243B] px-8 py-14 text-center md:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              START EXPLORING
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold text-white md:text-5xl">
              Your next discovery starts here.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
              Research companies, explore market information and stay informed
              about India&apos;s unlisted share ecosystem.
            </p>
            <Link
              href="/shares"
              className="mt-8 inline-flex items-center rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white hover:bg-emerald-400"
            >
              Explore Companies <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Your destination to explore, research and understand India&apos;s
              unlisted companies.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">Explore</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <Link href="/shares" className="block hover:text-emerald-600">Unlisted Shares</Link>
              <Link href="/sectors" className="block hover:text-emerald-600">Sectors</Link>
              <Link href="/events" className="block hover:text-emerald-600">Events</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">Company</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <Link href="/about" className="block hover:text-emerald-600">About Us</Link>
              <Link href="/contact" className="block hover:text-emerald-600">Contact</Link>
              <Link href="/privacy" className="block hover:text-emerald-600">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-emerald-600">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} unlistedforall. All rights reserved.
          <p className="mx-auto mt-2 max-w-3xl px-5">
            Unlisted shares are subject to liquidity, valuation and transfer risks.
            Indicative prices are not guaranteed transaction prices.
          </p>
        </div>
      </footer>
    </main>
  );
}
