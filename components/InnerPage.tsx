import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined } from "lucide-react";

export default function InnerPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
            <ChartNoAxesCombined className="text-emerald-600" />
            unlisted<span className="-ml-2 text-emerald-600">forall</span>
          </Link>
          <nav className="flex flex-wrap gap-5 text-sm font-medium">
            <Link href="/shares">Shares</Link>
            <Link href="/sectors">Sectors</Link>
            <Link href="/research">Research</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#F5FAF8] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm text-emerald-700">Home / {title}</Link>
          <h1 className="mt-7 text-4xl font-extrabold md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <Link href="/shares" className="mt-8 inline-flex items-center rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white">
            Explore shares <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-5 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} unlistedforall
      </footer>
    </main>
  );
}
