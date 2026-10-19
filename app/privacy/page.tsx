"use client";

import { Shield, Lock, EyeOff, Key, ChevronRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full">
          Fundamental Human Right
        </span>
        <h1 className="text-[40px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          Privacy. That’s Apple.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          At Apple, we believe privacy is a fundamental human right. That’s why we design our products and services to protect it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Lock className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">On-Device Processing</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Features like Face ID biometric data, Health records, and keyboard predictions are computed on your device, not on servers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <EyeOff className="w-8 h-8 text-[#34c759] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">App Tracking Transparency</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              You choose which apps can track your activity across other companies’ apps and websites. If you say no, they cannot track you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Key className="w-8 h-8 text-[#5856d6] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">End-to-End Encryption</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              iMessage, FaceTime calls, and Advanced Data Protection in iCloud keep your private conversations and photos strictly between you and your recipients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
