"use client";

import { useState } from "react";
import { Sparkles, RefreshCw, ShieldCheck, Smartphone, Check, ChevronRight } from "lucide-react";
import SwiftUIModal from "@/components/SwiftUIModal";

export default function AppleUpgradePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#000000] text-white py-16 px-4 sm:px-8 min-h-screen">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#af52de] bg-[#af52de]/10 border border-[#af52de]/20 px-3 py-1 rounded-full">
          iPhone Upgrade Program
        </span>
        <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight text-white mt-6 leading-[1.05]">
          Love it. Lease it. Upgrade it.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#86868b] mt-4 max-w-2xl mx-auto font-normal">
          Upgrade to the latest iPhone every single year with AppleCare+ coverage included. Low monthly payments with 0% APR.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base font-medium transition-all active:scale-95 shadow-lg shadow-[#0071e3]/20"
          >
            Check eligibility
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
            <div>
              <RefreshCw className="w-8 h-8 text-[#0a84ff] mb-4" />
              <h3 className="text-[20px] font-semibold text-white mb-2">New iPhone Every Year</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                After making 12 payments, trade in your current model and upgrade directly to the newest flagship iPhone with zero upgrade fees.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-8 h-8 text-[#30d158] mb-4" />
              <h3 className="text-[20px] font-semibold text-white mb-2">AppleCare+ Included</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Enjoy unlimited incidents of accidental damage protection, express replacement service, and 24/7 priority tech support from Apple experts.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
            <div>
              <Smartphone className="w-8 h-8 text-[#af52de] mb-4" />
              <h3 className="text-[20px] font-semibold text-white mb-2">Carrier Freedom</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Choose or change your wireless carrier whenever you want. Your new phone comes unlocked without multi-year carrier service contracts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SwiftUIModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Check Upgrade Eligibility"
        category="IPHONE UPGRADE PROGRAM"
      >
        <div className="space-y-4 text-sm text-[#1d1d1f]">
          <p className="text-[#86868b]">
            Enter your wireless phone number and billing ZIP code to see if your line is ready for immediate upgrade.
          </p>
          <input
            type="tel"
            placeholder="Mobile Phone Number"
            className="w-full p-3 rounded-xl border border-black/15 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
          />
          <button
            onClick={() => setModalOpen(false)}
            className="w-full bg-[#0071e3] text-white py-2.5 rounded-full font-medium"
          >
            Check Status
          </button>
        </div>
      </SwiftUIModal>
    </div>
  );
}
