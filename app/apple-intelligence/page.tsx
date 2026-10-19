"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Image, Shield, Cpu, Sliders, ChevronRight } from "lucide-react";

export default function AppleIntelligencePage() {
  return (
    <div className="w-full bg-[#000000] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ff3b30]/20 via-[#af52de]/20 to-[#0071e3]/20 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#af52de]" />
            <span className="text-[13px] font-medium tracking-wide text-[#e3e3e8]">
              Personal, private, powerful
            </span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] font-semibold tracking-tight leading-[1.05] bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Apple Intelligence.
          </h1>
          <p className="text-[20px] sm:text-[24px] text-[#86868b] font-normal mt-4 max-w-2xl mx-auto leading-relaxed">
            AI that knows you, respects your privacy, and integrates seamlessly across your iPhone, iPad, and Mac.
          </p>
        </motion.div>

        {/* Ambient Glow Visual */}
        <div className="relative mt-16 w-full max-w-[800px] h-[340px] flex items-center justify-center">
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#0071e3]/30 via-[#af52de]/40 to-[#ff375f]/30 blur-[90px] pointer-events-none" />
          <div className="relative z-10 p-8 rounded-3xl bg-[#1c1c1e]/80 border border-white/15 backdrop-blur-xl text-left max-w-md w-full shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff453a]" />
              <div className="w-3 h-3 rounded-full bg-[#ffd60a]" />
              <div className="w-3 h-3 rounded-full bg-[#30d158]" />
              <span className="text-xs text-[#86868b] ml-2">Siri with Apple Intelligence</span>
            </div>
            <p className="text-sm text-white/90 font-mono">
              "Find the presentation Sarah emailed last Thursday and summarize the revenue forecasts."
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#0a84ff]">
              <span>Processed On-Device with Private Cloud Compute</span>
              <Shield className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="bg-[#121214] py-20 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
              <div>
                <MessageSquare className="w-8 h-8 text-[#0a84ff] mb-4" />
                <h3 className="text-[20px] font-semibold text-white mb-2">Writing Tools</h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  Rewrite notes in different tones, proofread complex essays, and summarize entire email threads into crisp bullet points anywhere you write.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
              <div>
                <Image className="w-8 h-8 text-[#af52de] mb-4" />
                <h3 className="text-[20px] font-semibold text-white mb-2">Image Playground & Genmoji</h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  Generate unique images in Animation, Illustration, or Sketch styles right within Messages and Keynote, or type a description to make custom Genmoji.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-between">
              <div>
                <Shield className="w-8 h-8 text-[#30d158] mb-4" />
                <h3 className="text-[20px] font-semibold text-white mb-2">Private Cloud Compute</h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  A groundbreaking privacy standard for AI. Larger server models run on Apple silicon servers where your data is never stored and verifiable by independent security researchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
