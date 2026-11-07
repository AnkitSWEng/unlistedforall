
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

type ShareCardProps = {
  company: {
    name: string;
    symbol: string;
    sector: string;
    price: string;
    change: string;
    initials: string;
    color: string;
  };
};

export default function ShareCard({ company }: ShareCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7F36B] hover:shadow-xl hover:shadow-slate-900/5">

      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10243B] text-lg font-bold text-[#B7F36B]">
          {company.initials}
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
          <TrendingUp size={13} />
          {company.change}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          {company.symbol}
        </p>

        <h3 className="mt-2 min-h-12 text-lg font-bold leading-6 text-[#10243B] transition group-hover:text-emerald-700">
          {company.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {company.sector}
        </p>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Indicative price
          </p>

          <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#10243B]">
            {company.price}
          </p>
        </div>

        <Link
          href={`/shares/${company.symbol.toLowerCase()}`}
          aria-label={`View ${company.name}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10243B] text-[#B7F36B] transition-all group-hover:bg-[#B7F36B] group-hover:text-[#10243B]"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </article>
  );
}

