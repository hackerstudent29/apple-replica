"use client";

import { Smartphone, Sparkles, Sliders, Shield, Lock, Layers } from "lucide-react";

export default function IOSPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full">
          Operating System
        </span>
        <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          iOS 19. Makes every day extraordinary.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          Deep personalization for Home Screen and Control Center, revolutionary Apple Intelligence, and major updates to Photos and Messages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Sliders className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Unconstrained Home Screen</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Place app icons and widgets in any open position. Darken or tint icons with any accent color to match your wallpaper.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Sparkles className="w-8 h-8 text-[#af52de] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Apple Intelligence</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Generative AI integrated natively across system apps with Writing Tools, Clean Up in Photos, and supercharged Siri.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Lock className="w-8 h-8 text-[#34c759] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Lock and Hide Apps</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Protect sensitive apps with Face ID or move them to a locked, hidden apps folder that won’t show notifications or search results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
