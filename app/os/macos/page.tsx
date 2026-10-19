"use client";

import { Laptop, Smartphone, Sparkles, Shield, Compass, Layers } from "lucide-react";

export default function MacOSPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full">
          Mac Operating System
        </span>
        <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          macOS Sequoia. Work meets wonder.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          iPhone Mirroring, seamless window tiling, Safari Highlights, and Apple Intelligence transform Mac productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Smartphone className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">iPhone Mirroring</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              View and control your iPhone wirelessly right on your Mac. Interact with iOS apps, receive iPhone notifications, and drag files between devices while iPhone stays locked.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Layers className="w-8 h-8 text-[#5856d6] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Effortless Window Tiling</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Drag windows to the edge of the screen to snap them into side-by-side tiles or four quadrants with keyboard shortcuts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Compass className="w-8 h-8 text-[#34c759] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Safari Highlights & Reader</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Safari automatically surfaces relevant info like directions, summaries, or quick links from webpages as you browse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
