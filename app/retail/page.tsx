"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, Calendar, Wrench, Sparkles, ChevronRight } from "lucide-react";

const STORES = [
  {
    name: "Apple Fifth Avenue",
    address: "767 Fifth Avenue, New York, NY 10022",
    hours: "Open 24 hours a day",
    status: "Open Now",
    image: "https://www.apple.com/v/retail/e/images/overview/flagship/hero_fifth_avenue__f67k0i37hqu2_large_2x.jpg",
  },
  {
    name: "Apple Michigan Avenue",
    address: "401 N Michigan Avenue, Chicago, IL 60611",
    hours: "Open today until 8:00 p.m.",
    status: "Open Now",
    image: "https://www.apple.com/v/retail/e/images/overview/flagship/hero_michigan_avenue__bxo2b04csmau_large_2x.jpg",
  },
  {
    name: "Apple Union Square",
    address: "300 Post Street, San Francisco, CA 94108",
    hours: "Open today until 7:00 p.m.",
    status: "Open Now",
    image: "https://www.apple.com/v/retail/e/images/overview/flagship/hero_union_square__ecx74g6z6xma_large_2x.jpg",
  },
];

export default function RetailStoresPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight leading-[1.08]">
            Find an Apple Store
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-3">
            Shop with a Specialist, get Genius Bar support, or attend Today at Apple sessions.
          </p>

          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city, state, or ZIP code"
              className="w-full pl-11 pr-4 py-3 rounded-full border border-black/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] shadow-sm"
            />
            <Search className="w-5 h-5 text-[#86868b] absolute left-4 top-3.5" />
          </div>
        </div>

        {/* Action Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-xl mx-auto">
          <Link
            href="/retail/geniusbar"
            className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:border-[#0071e3] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Wrench className="w-6 h-6 text-[#0071e3]" />
              <div className="text-left">
                <h4 className="font-semibold text-sm">Genius Bar Reservation</h4>
                <p className="text-xs text-[#86868b]">Hands-on technical repairs</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#86868b]" />
          </Link>

          <Link
            href="/today"
            className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:border-[#0071e3] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-[#f56300]" />
              <div className="text-left">
                <h4 className="font-semibold text-sm">Today at Apple</h4>
                <p className="text-xs text-[#86868b]">Free creative workshops</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#86868b]" />
          </Link>
        </div>

        {/* Featured Store Locations */}
        <h2 className="text-[24px] font-semibold mb-6">Featured Apple Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORES.map((s) => (
            <div key={s.name} className="rounded-3xl bg-white border border-black/5 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#34c759] bg-[#34c759]/10 px-2 py-0.5 rounded-full inline-block mb-3">
                  {s.status}
                </span>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-1">{s.name}</h3>
                <p className="text-xs text-[#86868b] leading-relaxed mb-3">{s.address}</p>
                <p className="text-xs font-medium text-[#1d1d1f]">{s.hours}</p>
              </div>
              <div className="p-6 pt-0">
                <button className="w-full text-center bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#0071e3] py-2 rounded-full text-xs font-medium transition-colors">
                  Store details & directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
