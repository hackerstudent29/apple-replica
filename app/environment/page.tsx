"use client";

import { Leaf, Sun, Recycle, ShieldCheck, Award, ChevronRight } from "lucide-react";

export default function EnvironmentPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#34c759] bg-[#34c759]/10 px-3 py-1 rounded-full">
          Apple 2030 Carbon Neutral
        </span>
        <h1 className="text-[40px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          Our goal is to leave the world better than we found it.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          By 2030, all Apple products will be made with 100% recycled and renewable electricity, zero net carbon footprint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Recycle className="w-8 h-8 text-[#34c759] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">100% Recycled Aluminum</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Every MacBook Air, iPad, and Apple Watch enclosure is machined from 100% recycled certified aluminum alloys.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Sun className="w-8 h-8 text-[#ff9500] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Clean Renewable Energy</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              All Apple corporate facilities, data centers, and offices worldwide operate on 100% renewable electricity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Leaf className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Plastic-Free Packaging</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              We have eliminated plastic from product boxes, switching to 100% fiber-based paper sourced from responsibly managed forests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
