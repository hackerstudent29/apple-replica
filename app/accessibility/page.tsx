"use client";

import { Eye, Ear, Hand, Sparkles, Sliders } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#bf4800] bg-[#bf4800]/10 px-3 py-1 rounded-full">
          Designed for Everyone
        </span>
        <h1 className="text-[40px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          Technology is most powerful when everyone can make their mark.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          Built-in assistive features for vision, hearing, mobility, and speech empower people of all abilities to create, learn, and connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Eye className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">VoiceOver & Magnifier</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              An industry-leading screen reader describes exactly what is happening on your screen in braille or audio, with Point and Speak detection.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Ear className="w-8 h-8 text-[#f56300] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Live Listen & Sound Recognition</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Use iPhone as a directional remote microphone with AirPods, and receive visual alerts when fire alarms or doorbells ring.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Hand className="w-8 h-8 text-[#af52de] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Eye Tracking & AssistiveTouch</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Navigate iPad and iPhone using only your eye gaze with built-in front camera calibration, or trigger actions with subtle wrist gestures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
