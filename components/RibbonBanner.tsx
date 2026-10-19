"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, CreditCard, Sparkles, ShieldCheck, Music } from "lucide-react";
import SwiftUIModal from "./SwiftUIModal";

export default function RibbonBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const isAirPods = pathname?.includes("/airpods");

  return (
    <>
      <div className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] border-b border-black/5 dark:border-white/10 text-center py-2.5 px-4 transition-colors">
        <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#1d1d1f] dark:text-[#f5f5f7] max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-1.5 gap-y-0.5 font-normal">
          {isAirPods ? (
            <>
              <span>Get 3 months of Apple Music free with your AirPods.‡</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-[#0071e3] hover:underline inline-flex items-center font-normal ml-0.5 group"
              >
                <span>Buy</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </>
          ) : (
            <>
              <span>Get $180–$650 in credit when you trade in iPhone 11 or higher.*</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-[#0071e3] hover:underline inline-flex items-center font-normal ml-1 group"
              >
                <span>Shop iPhone</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </>
          )}
        </p>
      </div>

      {/* Offer Details Modal */}
      <SwiftUIModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Apple Trade In & Financing"
        category="Official Apple Offer"
      >
        <div className="space-y-4 text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">
          <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-start space-x-3">
            <CreditCard className="w-5 h-5 text-[#0071e3] mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">Trade In Credit</h4>
              <p className="text-[#86868b] text-xs sm:text-sm mt-0.5">
                Trade in an eligible device for instant credit toward a new purchase or an Apple Gift Card you can use anytime.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-[#f56300] mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">Apple Card Monthly Installments</h4>
              <p className="text-[#86868b] text-xs sm:text-sm mt-0.5">
                Pay interest-free over time when you choose Apple Card Monthly Installments. Plus get 3% Daily Cash back up front.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#34c759] mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">Carrier Deals</h4>
              <p className="text-[#86868b] text-xs sm:text-sm mt-0.5">
                Connect your new iPhone to AT&T, Boost Infinite, T-Mobile, or Verizon directly through Apple.
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs text-[#86868b] leading-normal border-t border-black/10 dark:border-white/10">
            * Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit.
          </div>
        </div>
      </SwiftUIModal>
    </>
  );
}
