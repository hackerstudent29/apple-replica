"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRightLeft, DollarSign, Smartphone, Watch, Laptop, Tablet } from "lucide-react";
import SwiftUIModal from "@/components/SwiftUIModal";

const ESTIMATES = [
  { device: "iPhone 16 Pro Max", value: "Up to $650", icon: <Smartphone className="w-6 h-6 text-[#0071e3]" /> },
  { device: "iPhone 16 Pro", value: "Up to $520", icon: <Smartphone className="w-6 h-6 text-[#0071e3]" /> },
  { device: "MacBook Pro", value: "Up to $1,030", icon: <Laptop className="w-6 h-6 text-[#5856d6]" /> },
  { device: "iPad Pro", value: "Up to $580", icon: <Tablet className="w-6 h-6 text-[#34c759]" /> },
  { device: "Apple Watch Ultra", value: "Up to $365", icon: <Watch className="w-6 h-6 text-[#ff9500]" /> },
];

export default function TradeInPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#34c759] bg-[#34c759]/10 px-3 py-1 rounded-full">
            Apple Trade In
          </span>
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
            Trade in your device. Good for you. Good for the planet.
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal">
            Turn the device you have into the one you want. Get credit toward your next purchase, or recycle it for free.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95"
          >
            Find your trade-in value
          </button>
        </div>

        {/* Estimated Values Grid */}
        <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm mb-16">
          <h2 className="text-[24px] font-semibold mb-6">Estimated trade-in values</h2>
          <div className="divide-y divide-black/10">
            {ESTIMATES.map((e) => (
              <div key={e.device} className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {e.icon}
                  <span className="text-[16px] font-medium">{e.device}</span>
                </div>
                <span className="text-[16px] font-semibold text-[#0071e3]">{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SwiftUIModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Check Device Valuation"
        category="APPLE TRADE IN"
      >
        <div className="space-y-4 text-sm text-[#1d1d1f]">
          <p className="text-[#86868b]">
            Answer a few quick questions regarding your device serial number and physical condition to receive an instant trade-in quote.
          </p>
          <input
            type="text"
            placeholder="Enter Serial Number or IMEI"
            className="w-full p-3 rounded-xl border border-black/15 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
          />
          <button
            onClick={() => setModalOpen(false)}
            className="w-full bg-[#0071e3] text-white py-2.5 rounded-full font-medium"
          >
            Calculate Estimate
          </button>
        </div>
      </SwiftUIModal>
    </div>
  );
}
