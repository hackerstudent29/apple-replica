"use client";

import Link from "next/link";
import { Newspaper, Calendar, ChevronRight } from "lucide-react";

const ARTICLES = [
  {
    tag: "Press Release",
    date: "October 18, 2026",
    title: "Apple introduces revolutionary iPhone Duo with foldable dual-screen engineering",
    description: "Features dual Super Retina XDR displays, titanium alloy hinge, next-generation A19 Pro Bionic, and Apple Intelligence.",
    link: "/iphone-duo",
  },
  {
    tag: "Press Release",
    date: "October 18, 2026",
    title: "Apple debuts Apple HomeView: the intelligent smart home hub and entertainment display",
    description: "Combines 10.9-inch Liquid Retina screen with high-excursion spatial audio and seamless home automation.",
    link: "/apple-homeview",
  },
  {
    tag: "Update",
    date: "October 15, 2026",
    title: "Apple unveils new M4 lineup across MacBook Pro and redesigned Mac mini",
    description: "Blistering performance, hardware ray tracing, up to 24 hours of battery life, and Apple’s first carbon neutral Mac.",
    link: "/macbook-pro",
  },
];

export default function NewsroomPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full">
            Official Announcements
          </span>
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
            Apple Newsroom
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-2">
            The official source for news, press releases, photography, and leadership perspectives from Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((a) => (
            <div key={a.title} className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#bf4800] mb-2 block">
                  {a.tag} • {a.date}
                </span>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  {a.description}
                </p>
              </div>
              <Link
                href={a.link}
                className="mt-6 text-[#0071e3] text-xs font-medium hover:underline inline-flex items-center"
              >
                <span>Read press release</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
