"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Sparkles, Shield, Cpu, Battery, Eye, Box, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SwiftUIModal from "./SwiftUIModal";

export interface ColorVariant {
  name: string;
  hex: string;
  imageSrc: string;
}

export interface SpecItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  badge?: string;
  imageSrc?: string;
}

export interface ProductDetailProps {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: string;
  monthlyPrice: string;
  colors: ColorVariant[];
  specs: SpecItem[];
  features: FeatureHighlight[];
  heroVideo?: string;
  badge?: string;
}

export default function ProductDetailLayout({
  id,
  category,
  name,
  tagline,
  description,
  startingPrice,
  monthlyPrice,
  colors,
  specs,
  features,
  badge,
}: ProductDetailProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSpecModal, setSelectedSpecModal] = useState(false);
  const [arModalOpen, setArModalOpen] = useState(false);
  const [tradeInModalOpen, setTradeInModalOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "compare">("overview");
  const { addToCart } = useCart();

  const currentColor = colors[selectedColorIndex] || colors[0];

  const scrollToSection = (sectionId: string, tab: "overview" | "specs") => {
    setActiveTab(tab);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBuy = () => {
    addToCart({
      id: `${id}-${currentColor.name}`,
      name: `${name} (${currentColor.name})`,
      price: startingPrice,
      priceNumber: parseFloat(startingPrice.replace(/[^0-9.]/g, "")) || 0,
      image: currentColor.imageSrc,
      specs: `${specs[0]?.label}: ${specs[0]?.value}`,
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] min-h-screen">
      {/* Added to Bag Toast Notification */}
      <AnimatePresence>
        {addedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#1d1d1f] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center space-x-2.5 text-xs font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-[#34c759]" />
            <span>Added {name} ({currentColor.name}) to your Bag</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Local Subnav */}
      <nav className="sticky top-[44px] z-40 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-black/10 py-2.5 px-4 sm:px-8">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-[19px] sm:text-[21px] tracking-tight">{name}</span>
            {badge && (
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#bf4800] bg-[#bf4800]/10 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-6 text-[12px]">
            <div className="hidden sm:flex items-center space-x-5 text-[#6e6e73]">
              <button
                onClick={() => scrollToSection("product-overview", "overview")}
                className={`transition-colors hover:text-[#0071e3] ${
                  activeTab === "overview" ? "text-[#1d1d1f] font-medium" : ""
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("tech-specs", "specs")}
                className={`transition-colors hover:text-[#0071e3] ${
                  activeTab === "specs" ? "text-[#1d1d1f] font-medium" : ""
                }`}
              >
                Tech Specs
              </button>
              <Link href={`/${category}/compare`} prefetch={true} className="transition-colors hover:text-[#0071e3]">
                Compare
              </Link>
            </div>
            <button
              onClick={handleBuy}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] px-3.5 py-1 rounded-full font-medium transition-all active:scale-95 shadow-sm"
            >
              Buy
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Showcase */}
      <section id="product-overview" className="relative overflow-hidden pt-12 pb-16 px-4 text-center max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-[#bf4800] font-semibold text-[17px] mb-2">{badge || "All-New"}</p>
          <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight leading-[1.06] text-[#1d1d1f]">
            {name}
          </h1>
          <p className="text-[21px] sm:text-[28px] text-[#6e6e73] font-medium mt-3 tracking-tight">
            {tagline}
          </p>
          <p className="text-[17px] sm:text-[19px] text-[#1d1d1f] mt-4 font-normal">
            From {startingPrice} or {monthlyPrice}
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handleBuy}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] px-5 py-2 rounded-full font-medium transition-all active:scale-95 shadow-sm"
            >
              Add to Bag
            </button>
            <button
              onClick={() => setArModalOpen(true)}
              className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white text-[14px] px-4 py-2 rounded-full font-medium transition-all active:scale-95 inline-flex items-center space-x-1.5"
            >
              <Box className="w-4 h-4" />
              <span>View in your space</span>
            </button>
          </div>
        </motion.div>

        {/* Product Media Display with Color Switcher */}
        <div className="relative w-full max-w-[800px] h-[360px] sm:h-[480px] my-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentColor.imageSrc}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentColor.imageSrc}
                alt={`${name} in ${currentColor.name}`}
                className="max-h-full max-w-full object-contain filter drop-shadow-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Color Swatch Picker */}
        {colors.length > 1 && (
          <div className="flex flex-col items-center mt-2">
            <span className="text-[13px] text-[#86868b] font-medium mb-2.5">
              Finish: <span className="text-[#1d1d1f]">{currentColor.name}</span>
            </span>
            <div className="flex items-center gap-2.5 p-1.5 bg-[#f5f5f7] rounded-full border border-black/5 shadow-inner">
              {colors.map((c, idx) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  aria-label={`Select ${c.name}`}
                  className={`w-6 h-6 rounded-full transition-all relative flex items-center justify-center ${
                    selectedColorIndex === idx ? "ring-2 ring-[#0071e3] ring-offset-2 scale-110" : "opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {selectedColorIndex === idx && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Trade-In Banner Bar */}
      <section className="w-full bg-[#f5f5f7] py-6 px-4 text-center border-y border-black/5">
        <div className="max-w-xl mx-auto flex items-center justify-center space-x-3 text-sm">
          <ArrowRightLeft className="w-4 h-4 text-[#0071e3] shrink-0" />
          <span>Get up to $650 in credit when you trade in your current device.</span>
          <button
            onClick={() => setTradeInModalOpen(true)}
            className="text-[#0071e3] hover:underline font-medium inline-flex items-center"
          >
            <span>Estimate</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-tight text-center mb-14 text-[#1d1d1f]">
            Get the highlights.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-[#f5f5f7] flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {f.badge && (
                    <span className="text-[11px] font-semibold text-[#bf4800] tracking-wider uppercase mb-2 block">
                      {f.badge}
                    </span>
                  )}
                  <h3 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-[#86868b] text-[16px] leading-relaxed">
                    {f.description}
                  </p>
                </div>
                {f.imageSrc && (
                  <div className="mt-8 h-48 w-full flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.imageSrc} alt={f.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section id="tech-specs" className="py-20 px-4 sm:px-8 bg-[#fbfbfd] border-t border-black/5">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#1d1d1f]">
                Tech Specs
              </h2>
              <p className="text-[#86868b] text-[15px] mt-1">Detailed hardware architecture and performance data</p>
            </div>
            <button
              onClick={() => setSelectedSpecModal(true)}
              className="text-[#0071e3] hover:underline text-[14px] flex items-center font-normal"
            >
              <span>View full specification</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col items-start hover:border-[#0071e3]/40 transition-colors"
              >
                <div className="mb-3 text-[#0071e3]">
                  {spec.icon || <Cpu className="w-6 h-6" />}
                </div>
                <h4 className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                  {spec.label}
                </h4>
                <p className="text-[17px] font-medium text-[#1d1d1f] leading-snug">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AR View Modal */}
      <SwiftUIModal
        isOpen={arModalOpen}
        onClose={() => setArModalOpen(false)}
        title={`View ${name} in AR`}
        category="AUGMENTED REALITY"
      >
        <div className="space-y-4 text-center">
          <div className="h-48 w-full bg-[#f5f5f7] rounded-2xl flex flex-col items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={currentColor.imageSrc} alt={name} className="max-h-32 object-contain mb-2 animate-bounce" />
            <p className="text-xs text-[#86868b]">3D Object Preview • Rotate & Pinch to zoom</p>
          </div>
          <p className="text-sm text-[#424245]">
            Use Safari on iPhone or iPad with LiDAR scanner to place this exact scale model in your physical room.
          </p>
          <button
            onClick={() => setArModalOpen(false)}
            className="w-full bg-[#0071e3] text-white py-2.5 rounded-full text-xs font-medium"
          >
            Launch Augmented Reality Simulation
          </button>
        </div>
      </SwiftUIModal>

      {/* Trade In Modal */}
      <SwiftUIModal
        isOpen={tradeInModalOpen}
        onClose={() => setTradeInModalOpen(false)}
        title="Estimate Trade-In Credit"
        category="APPLE TRADE IN"
      >
        <div className="space-y-4 text-sm text-[#1d1d1f]">
          <p className="text-[#86868b]">
            Get credit toward your new {name}. Answer a few questions about your device to get an instant estimate.
          </p>
          <select className="w-full p-2.5 rounded-xl border border-black/15 bg-white text-xs">
            <option>Select device type</option>
            <option>iPhone</option>
            <option>Apple Watch</option>
            <option>iPad</option>
            <option>Mac</option>
            <option>Android smartphone</option>
          </select>
          <button
            onClick={() => setTradeInModalOpen(false)}
            className="w-full bg-[#0071e3] text-white py-2.5 rounded-full text-xs font-medium"
          >
            Calculate Credit
          </button>
        </div>
      </SwiftUIModal>

      {/* Full Specs Modal */}
      <SwiftUIModal
        isOpen={selectedSpecModal}
        onClose={() => setSelectedSpecModal(false)}
        title={`${name} Specifications`}
        category={category.toUpperCase()}
      >
        <div className="space-y-4 text-sm text-[#1d1d1f]">
          <p className="text-[#86868b]">{description}</p>
          <div className="divide-y divide-black/10">
            {specs.map((s) => (
              <div key={s.label} className="py-3 flex justify-between">
                <span className="font-medium text-[#86868b]">{s.label}</span>
                <span className="font-semibold text-right max-w-[60%]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SwiftUIModal>
    </div>
  );
}
