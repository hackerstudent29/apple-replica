"use client";

import { Eye, Layers, Hand, Sparkles, Monitor, Users } from "lucide-react";

export default function VisionOSPage() {
  return (
    <div className="w-full bg-[#000000] text-white py-16 px-4 sm:px-8 min-h-screen">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0a84ff] bg-[#0a84ff]/10 border border-[#0a84ff]/20 px-3 py-1 rounded-full">
          Spatial Operating System
        </span>
        <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight text-white mt-6 leading-[1.05]">
          visionOS 2. Spatial computing takes a giant leap.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#86868b] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          Transform 2D photos into breathtaking spatial memories, navigate with new wrist gestures, and expand your Mac into an Ultra Wide virtual display.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10">
            <Layers className="w-8 h-8 text-[#0a84ff] mb-4" />
            <h3 className="text-[20px] font-semibold text-white mb-2">Spatial Photos</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Advanced machine learning adds natural depth to your existing 2D photo library, letting you step back into family moments.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10">
            <Monitor className="w-8 h-8 text-[#30d158] mb-4" />
            <h3 className="text-[20px] font-semibold text-white mb-2">Mac Virtual Display</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Expands into an Ultra Wide curved virtual screen equivalent to two side-by-side 4K displays sitting cleanly in your room.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10">
            <Hand className="w-8 h-8 text-[#af52de] mb-4" />
            <h3 className="text-[20px] font-semibold text-white mb-2">Intuitive Hand Gestures</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Flip your wrist over and tap to access the Home View or flip and pinch to view battery level, volume, and Control Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
