 
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search, Menu, ChevronDown, ChevronLeft, ChevronRight,
  FileText, ArrowUpRight, Smartphone, CalendarDays,
  X, TrendingUp, ExternalLink
} from "lucide-react";

type EventItem = {
  id: number;
  date: string;
  company: string;
  initials?: string;
  type: string;
  title: string;
  description: string;
  ratio?: string;
  logo?: boolean;
};

const events: EventItem[] = [
  {
    id: 1, date: "2026-11-24",
    company: "Cosmic PV Power Limited", initials: "CP",
    type: "EGM",
    title: "EGM Notice of Alteration of AOA for IPO Lock-in",
    description: "Notice of EGM of Cosmic PV Power Limited to be held on November 24, 2026, to amend the Articles of Association for lock-in of pre-IPO shares, including pledged shares, in line with SEBI ICDR rules, ahead of the company’s proposed IPO."
  },
  {
    id: 2, date: "2026-11-20",
    company: "Infobay Ai Limited", initials: "IA",
    type: "EGM",
    title: "EGM Notice for Issuing 3,660 Series B CCPS",
    description: "Seeks shareholder approval to raise about ₹149.2 crore by issuing 3,660 Series B CCPS and 50 equity shares at ₹4,02,155 each to 22 investors, with a supporting valuation report."
  },
  {
    id: 3, date: "2026-11-15",
    company: "PharmEasy Unlisted Shares",
    type: "Corporate action",
    logo: true,
    title: "API Holdings Postal Ballot: ₹347.5 Crore Share Swap for Akna Medical",
    description: "API Holdings, PharmEasy’s parent, is seeking shareholder approval by postal ballot to issue about 53.38 crore CCPS C at ₹6.51 each to Lightrock in exchange for its 31.33% stake in Akna Medical, making Akna a wholly owned subsidiary without any cash outflow."
  },
  {
    id: 4, date: "2026-11-12",
    company: "Incred Capital Financial Services Limited", initials: "IC",
    type: "Corporate action",
    title: "EGM Notice of ₹300 cr Private Placement of Equity",
    description: "InCred Capital Financial Services is asking shareholders to approve, at an EGM on 12 November 2026, an issue of up to 58.82 lakh shares at ₹510 each to 21 investors, a price set by a DCF valuation of about ₹8,493 crore."
  },
  {
    id: 5, date: "2026-10-28",
    company: "63sats Cybertech Limited", initials: "SC",
    type: "Corporate action",
    title: "63SATS Cybertech signs ₹65 crore warrant deal with BCCL",
    description: "63 moons' material subsidiary 63SATS Cybertech will issue 65 warrants worth ₹65 crore to BCCL (Times Group). BCCL will initially pay 10% (₹6.5 crore), with the remaining ₹58.5 crore payable upon conversion into equity shares."
  },
  {
    id: 6, date: "2026-10-26",
    company: "Incred Capital Financial Services Limited", initials: "IC",
    type: "Split",
    title: "Split from ₹10 to ₹1",
    description: "InCred Capital Financial Services announces a subdivision of its equity shares.",
    ratio: "10:1"
  },
  {
    id: 7, date: "2026-10-26",
    company: "C&S Electric Limited Unlisted Shares",
    type: "Other",
    logo: true,
    title: "Compulsory Capital Reduction by C&S Electric",
    description: "Reducing equity capital by buying back 0.78% (3,43,948) minority shares at ₹1,016.10 each."
  },
  {
    id: 8, date: "2026-10-15",
    company: "Anheuser Busch Inbev (Sabmiller) India Limited",
    type: "Corporate action",
    logo: true,
    title: "Postal Ballot Voting for ₹435 Crore Preferential Issue to AB InBev Asia B.V.",
    description: "Shareholders to vote (16 Sep–15 Oct 2026) on issuing 8.30 crore equity shares at ₹52.42 each to parent AB InBev Asia B.V. for operational needs, raising its stake from 85.14% to 86.26%."
  },
  {
    id: 9, date: "2026-10-03",
    company: "Maverick Simulation Solutions Limited",
    type: "Other",
    logo: true,
    title: "Raising ~125 Cr via Series-B CCPS and Acquisition of Voxel-Man at INR 3118 per share.",
    description: "Raising approximately ₹125 crore through Series-B CCPS issued to Paragon Partners Growth Fund II, VantEdge Partners LLP and Inviga Healthcare Fund I at ₹3,118 per share. The company also plans an approximately ₹260 crore acquisition of Voxel-Man via share swap.",
  },
  {
    id: 10, date: "2026-10-02",
    company: "Calcutta Stock Exchange Unlisted Shares",
    type: "Bonus",
    logo: true,
    title: "Bonus shares issued in 2:1",
    description: "Bonus shares issued with record date as 01 Oct 2026.",
    ratio: "2:1"
  },
  {
    id: 11, date: "2026-09-30",
    company: "Soleos Energy Private Limited",
    type: "Corporate action",
    logo: true,
    title: "DRHP Filed",
    description: "Soleos Energy has filed its Draft Red Herring Prospectus.",
  },
  {
    id: 12, date: "2026-09-30",
    company: "Goldi Solar Limited", initials: "GS",
    type: "Split",
    title: "Split from 10 to 2",
    description: "Goldi Solar announces a subdivision of equity shares.",
    ratio: "10:2"
  },
  {
    id: 13, date: "2026-09-30",
    company: "Goldi Solar Limited", initials: "GS",
    type: "Bonus",
    title: "Bonus Shares Issued in 40:1.",
    description: "Goldi Solar announces a bonus issue of equity shares.",
    ratio: "40:1"
  },
  {
    id: 14, date: "2026-09-30",
    company: "IKF Finance Limited Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "Annual General Meeting (AGM) of IKF Finance Limited",
    description: "IKF Finance Limited is holding its AGM in person at its Registered Office, #40-1-144, 3rd Floor, Corporate Centre, M.G. Road, Vijayawada – 520010, Andhra Pradesh."
  },
  {
    id: 15, date: "2026-09-30",
    company: "India Gold Metaverse Limited", initials: "IG",
    type: "AGM",
    title: "3rd Annual General Meeting (AGM) of India Gold Metaverse Limited",
    description: "India Gold Metaverse Limited, formerly India Gold Metaverse Private Limited, is holding its 3rd AGM in person at its Registered Office, FT Tower, 4th Floor, Chakala, Andheri (East), Mumbai. The company became a public limited company on July 22, 2026."
  },
  {
    id: 16, date: "2026-09-30",
    company: "Gamma Rotors Limited",
    type: "AGM",
    logo: true,
    title: "8th Annual General Meeting (AGM) of Gamma Rotors Limited",
    description: "Gamma Rotors Limited is holding its 8th AGM in person at the Conference Room, The Circle, 2nd Floor, Omaxe Square, Jasola Vihar, New Delhi."
  },
  {
    id: 17, date: "2026-09-30",
    company: "India Exposition Mart Ltd Unlisted Share",
    type: "AGM",
    logo: true,
    title: "25th Annual General Meeting (AGM) of India Exposition Mart Limited",
    description: "India Exposition Mart Limited is holding its 25th AGM at the Govt. Servants Co-operative House Building Society Limited, Kalyan Kendra, 9, Paschimi Marg, Vasant Vihar, New Delhi."
  },
  {
    id: 18, date: "2026-09-30",
    company: "Incred Holdings Limited Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "16th Annual General Meeting (AGM) of InCred Holdings Limited",
    description: "InCred Holdings Limited is holding its 16th AGM through two-way Video Conferencing (VC) / Other Audio Visual Means (OAVM) on the NSDL e-voting platform."
  },
  {
    id: 19, date: "2026-09-30",
    company: "Incred Capital Financial Services Limited", initials: "IC",
    type: "AGM",
    title: "29th Annual General Meeting (AGM) of InCred Capital Financial Services Limited",
    description: "InCred Capital Financial Services Limited is holding its 29th AGM in person at its Registered and Corporate Office, The Capital, Bandra Kurla Complex, Mumbai."
  },
  {
    id: 20, date: "2026-09-30",
    company: "Inox Leasing and Finance Limited Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "31st Annual General Meeting of Inox Leasing and Finance Limited",
    description: "Inox Leasing and Finance Limited is holding its 31st AGM through Video Conferencing (VC) / Other Audio Visual Means (OAVM) on the NSDL e-voting platform."
  },
  {
    id: 21, date: "2026-09-30",
    company: "Delta Galaxy Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "15th Annual General Meeting of Delta Galaxy Engineering Services Limited",
    description: "Delta Galaxy Engineering Services Limited is holding its 15th AGM in person at The Panache Kautilya, Patna, Bihar."
  },
  {
    id: 22, date: "2026-09-30",
    company: "Absolute Projects (India) Limited",
    type: "AGM",
    logo: true,
    title: "31st Annual General Meeting of Absolute Projects (India) Limited",
    description: "Absolute Projects (India) Limited is holding its 31st AGM through Video Conferencing on Google Meet."
  },
  {
    id: 23, date: "2026-09-30",
    company: "PharmEasy Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "7th Annual General Meeting (AGM) of API Holdings Limited",
    description: "API Holdings Limited is holding its 7th AGM through Video Conferencing (VC) / Other Audio Visual Means (OAVM)."
  },
  {
    id: 24, date: "2026-09-30",
    company: "Raviraj Process Control Ltd",
    type: "AGM",
    logo: true,
    title: "7th Annual General Meeting (AGM) of Raviraj Process Controls Limited",
    description: "Raviraj Process Controls Limited is holding its 7th AGM at its Registered Office, A-677, Khairne MIDC, TTC, Koparkhairne, Navi Mumbai."
  },
  {
    id: 25, date: "2026-09-30",
    company: "Gynofem Healthcare Unlisted Shares Price",
    type: "AGM",
    logo: true,
    title: "Fourth Annual General Meeting of Gynofem Healthcare and Pharmaceuticals Limited",
    description: "Gynofem Healthcare and Pharmaceuticals Limited is holding its Fourth AGM at its Registered Office in Vijay Nagar, Indore. Members will consider audited financial statements and other ordinary business."
  },
  {
    id: 26, date: "2026-09-30",
    company: "Hindon Mercantile Limited",
    type: "AGM",
    logo: true,
    title: "41st Annual General Meeting of Hindon Mercantile Limited",
    description: "Hindon Mercantile Limited is holding its 41st AGM at its Registered Office, Best Sky Tower, Netaji Subhash Place, New Delhi."
  },
  {
    id: 27, date: "2026-09-29",
    company: "Inox Clean Energy Limited",
    type: "Other",
    logo: true,
    title: "INOX Clean Energy Files INR 10,000 Cr DRHP",
    description: "INOX Clean has filed its ₹10,000 crore IPO Draft Red Herring Prospectus."
  },
  {
    id: 28, date: "2026-09-29",
    company: "Lakeshore Hospital Unlisted Share Price",
    type: "AGM",
    logo: true,
    title: "30th Annual General Meeting of Lakeshore Hospital",
    description: "Lakeshore Hospital is holding its 30th AGM online by video conference, following its annual report for the year ended 31 March 2026."
  },
  {
    id: 29, date: "2026-09-29",
    company: "Sun Drops Energia Limited",
    type: "AGM",
    logo: true,
    title: "7th Annual General Meeting of Sun Drops Energia Limited",
    description: "Sun Drops Energia Limited is holding its 7th AGM in person at its Registered Office, KP House, Surat, Gujarat."
  },
  {
    id: 30, date: "2026-09-29",
    company: "Fino Paytech Limited Unlisted Shares",
    type: "AGM",
    logo: true,
    title: "20th Annual General Meeting of Fino PayTech Limited",
    description: "Fino PayTech Limited is holding its 20th AGM through Video Conferencing on the NSDL e-voting platform."
  }
];

const typeFilters = [
  { name: "All types", count: 415 },
  { name: "Bonus", count: 22 },
  { name: "Split", count: 12 },
  { name: "EGM", count: 32 },
  { name: "AGM", count: 34 },
  { name: "Financial update", count: 75 },
  { name: "Dividend", count: 23 },
  { name: "Corporate action", count: 111 },
  { name: "Other", count: 106 }
];

const prices = [
  { initials: "MS", name: "Metropolitan Stock Exchange (MSEI) Unlisted Shares", price: "₹6.6" },
  { initials: "HP", name: "Hindustan Power Exchange Limited (HPX India)", price: "₹23.5" },
  { initials: "OR", name: "Onix Renewable Limited", price: "₹45" },
  { initials: "GE", name: "GFCL EV Products Limited", price: "₹39.5" }
];

const today = "2026-11-05";

function dateParts(date: string) {
  const d = new Date(date + "T12:00:00");
  return {
    day: d.getDate(),
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase()
  };
}

function monthLabel(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric"
  });
}

function badgeStyle(type: string) {
  const styles: Record<string, string> = {
    Bonus: "bg-[#eaf7ed] text-[#27834a]",
    Split: "bg-[#eaf1ff] text-[#3867b1]",
    EGM: "bg-[#fff4e5] text-[#b77a26]",
    AGM: "bg-[#eaf3ff] text-[#3867a9]",
    Dividend: "bg-[#fceefa] text-[#a34a90]",
    "Corporate action": "bg-[#f0edff] text-[#6b55a8]",
    "Financial update": "bg-[#e9f7f5] text-[#278477]",
    Other: "bg-[#f1f2f4] text-[#69717d]"
  };
  return styles[type] || styles.Other;
}

function Brand() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#102d4b] text-lg font-black text-white">U</span>
      <span className="text-[21px] font-extrabold tracking-tight text-[#152b43]">
        Unlisted<span className="text-[#ed9b37]">Zone</span>
      </span>
    </Link>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const date = dateParts(event.date);

  return (
    <article className="group flex gap-4 border-b border-[#edf0f2] py-6 first:pt-2 last:border-0 md:gap-6">
      <div className="flex w-[53px] shrink-0 flex-col items-center pt-1">
        <span className="text-[27px] font-bold leading-8 text-[#26394d]">{date.day}</span>
        <span className="mt-1 text-[11px] font-bold tracking-wide text-[#87919d]">{date.month}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {event.logo ? (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8ebef] bg-[#f6f8fa] text-[11px] font-bold text-[#52677e]">
              {event.company.slice(0, 1).toUpperCase()}
            </span>
          ) : (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf2f7] text-[11px] font-bold text-[#3c607d]">
              {event.initials}
            </span>
          )}

          <h3 className="text-[14px] font-bold text-[#293e52]">
            {event.company}
          </h3>

          <span className={`rounded px-2 py-1 text-[9px] font-bold uppercase tracking-wider ${badgeStyle(event.type)}`}>
            {event.type}
          </span>
        </div>

        <h4 className="mt-3 text-[15px] font-bold leading-6 text-[#24384c] transition group-hover:text-[#d88a2e] md:text-[16px]">
          {event.title}
        </h4>

        <p className="mt-2 text-[13px] leading-[1.8] text-[#75818d]">
          {event.description}
        </p>

        {event.ratio && (
          <span className="mt-3 inline-flex rounded-md border border-[#e8ebef] bg-[#f8fafb] px-3 py-1.5 text-xs font-bold text-[#42566c]">
            {event.ratio}
          </span>
        )}

        <button
          type="button"
          className="mt-3 flex items-center gap-1.5 text-[12px] font-bold text-[#d58a31] transition hover:text-[#ad681a]"
        >
          <FileText size={14} />
          View document
          <