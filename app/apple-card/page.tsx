"use client";

import { motion } from "framer-motion";
import { CreditCard, DollarSign, ShieldCheck, Smartphone, Check, Sparkles, ChevronRight } from "lucide-react";
import SwiftUIModal from "@/components/SwiftUIModal";
import { useState } from "react";

export default function AppleCardPage() {
  const [applyModal, setApplyModal] = useState(false);

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-10 sm:h-12 mb-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.apple.com/v/homepage/images/logos/apple-card/a/hero_logo_apple_card__dnd4gomtgai6_large.png"
              alt="Apple Card"
              className="max-h-full w-auto object-contain"
            />
          </div>
          <h1 className="text-[40px] sm:text-[60px] font-semibold tracking-tight leading-[1.08]">
            Get up to 3% Daily Cash back with every purchase.
          </h1>
          <p className="text-[19px] sm:text-[22px] text-[#6e6e73] font-normal mt-4 max-w-2xl mx-auto">
            Unlimited cashback deposited directly into your Apple Cash balance every single day. No annual fees. Built with the privacy and security of iPhone.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setApplyModal(true)}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full font-medium text-[15px] transition-all active:scale-95 shadow-sm"
            >
              Apply now
            </button>
          </div>
        </motion.div>

        {/* Card Image Visual */}
        <div className="relative mt-12 w-full max-w-[640px] h-[340px] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.apple.com/v/homepage/images/apple-card/a/hero_apple_card__dpuxs0gw5daq_large_2x.jpg"
            alt="Titanium Apple Card"
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
      </section>

      {/* 3 Pillars: Daily Cash, Transparency, Security */}
      <section className="bg-white py-20 px-4 sm:px-8 border-t border-black/5">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#f5f5f7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-6">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                  Up to 3% Daily Cash
                </h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  Get 3% back on Apple purchases and select partners including Uber, Nike, and Walgreens. 2% back when you pay with iPhone or Apple Watch.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#f5f5f7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                  Zero Hidden Fees
                </h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  No annual fee. No late fees. No foreign transaction fees. No over-the-limit fees. Clear interest calculations right in your Wallet app.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#f5f5f7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#5856d6]/10 text-[#5856d6] flex items-center justify-center mb-6">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                  Laser-Etched Titanium
                </h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  For locations where Mastercard isn’t contactless yet, receive an elegant white titanium card with no numbers, no expiration date, and no CVV on the card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Sheet Modal */}
      <SwiftUIModal
        isOpen={applyModal}
        onClose={() => setApplyModal(false)}
        title="Apply for Apple Card"
        category="CREDIT APPROVAL IN 1 MINUTE"
      >
        <div className="space-y-4 text-sm text-[#1d1d1f]">
          <p className="text-[#86868b]">
            Applying for Apple Card has no impact on your credit score until you accept your offer.
          </p>
          <div className="p-4 rounded-2xl bg-[#f5f5f7] space-y-2">
            <div className="flex items-center space-x-2 text-[#34c759] font-medium text-xs">
              <Check className="w-4 h-4" />
              <span>Instant digital issuance to Apple Wallet upon approval</span>
            </div>
            <div className="flex items-center space-x-2 text-[#34c759] font-medium text-xs">
              <Check className="w-4 h-4" />
              <span>Free titanium physical card shipped to your door</span>
            </div>
          </div>
          <button
            onClick={() => setApplyModal(false)}
            className="w-full bg-[#0071e3] text-white py-2.5 rounded-full font-medium transition-all active:scale-95"
          >
            Start Demonstration Application
          </button>
        </div>
      </SwiftUIModal>
    </div>
  );
}
