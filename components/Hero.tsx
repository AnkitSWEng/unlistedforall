
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#10243B] text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#B7F36B]/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#B7F36B]/30 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#B7F36B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7F36B]">
              Private market intelligence
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            See beyond
            <span className="block text-[#B7F36B]">the stock market.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Discover India's unlisted companies, explore private market
            opportunities and stay informed about the businesses shaping
            tomorrow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shares"
              className="inline-flex items-center gap-3 rounded-lg bg-[#B7F36B] px-7 py-4 text-sm font-bold text-[#10243B] transition hover:bg-[#a5e75a]"
            >
              Discover companies
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center gap-3 rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#B7F36B] hover:text-[#B7F36B]"
            >
              Market announcements
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div>
              <p className="text-sm font-bold text-white">Company discovery</p>
              <p className="mt-1 text-xs text-slate-400">Explore private businesses</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Market research</p>
              <p className="mt-1 text-xs text-slate-400">Access company insights</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Corporate events</p>
              <p className="mt-1 text-xs text-slate-400">Follow important updates</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[32px] bg-[#B7F36B]/10 blur-2xl" />

          <div className="relative rounded-2xl border border-white/10 bg-[#193650] p-6 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Market intelligence
                </p>
                <h2 className="mt-2 text-xl font-bold text-white">
                  Private markets
                </h2>
              </div>

              <div className="rounded-xl bg-[#B7F36B]/10 p-3 text-[#B7F36B]">
                <ChartNoAxesCombined size={25} />
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#10243B] p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Market overview</span>
                <span className="rounded-full bg-[#B7F36B]/10 px-3 py-1 text-[10px] font-bold text-[#B7F36B]">
                  EXPLORE
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-extrabold text-white">
                    Beyond Listed
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Discover India's private companies
                  </p>
                </div>
                <TrendingUp className="mb-1 text-[#B7F36B]" size={30} />
              </div>

              <div className="mt-6 flex h-20 items-end gap-2">
                {[30, 45, 35, 58, 44, 68, 53, 78, 63, 90, 72, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-[#B7F36B]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.35 + index * 0.055,
                      }}
                    />
                  )
                )}
              </div>

              <p className="mt-3 text-[10px] text-slate-500">
                Illustrative visualization, not live market data.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Explore
                </p>
                <p className="mt-2 font-bold text-white">Companies</p>
                <p className="mt-1 text-xs text-slate-400">Private businesses</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Discover
                </p>
                <p className="mt-2 font-bold text-white">Market events</p>
                <p className="mt-1 text-xs text-slate-400">Corporate updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
