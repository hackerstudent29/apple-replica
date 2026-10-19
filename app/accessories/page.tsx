"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Zap, Sparkles } from "lucide-react";
import SwiftUIModal from "@/components/SwiftUIModal";

const ACCESSORY_TABS = [
  { id: "all", label: "All Accessories" },
  { id: "magsafe", label: "MagSafe & Power" },
  { id: "cases", label: "Cases & Protection" },
  { id: "input", label: "Pencils & Keyboards" },
  { id: "watch", label: "Watch Straps" },
];

const ACCESSORY_PRODUCTS = [
  {
    id: "magsafe-charger",
    name: "MagSafe Charger (1m)",
    category: "magsafe",
    price: "₹4500.00*",
    tagline: "Fast wireless charging up to 25W with 30W power adapter.",
    image: "https://www.apple.com/v/iphone/home/ck/images/overview/essentials/iphone_accessories__ewu4v2diihw2_large_2x.jpg",
  },
  {
    id: "silicone-case",
    name: "iPhone 18 Pro Silicone Case with MagSafe",
    category: "cases",
    price: "₹4900.00*",
    tagline: "Silky, soft-touch finish with built-in magnets for easy attachment.",
    image: "https://www.apple.com/v/iphone/home/ck/images/overview/essentials/iphone_accessories__ewu4v2diihw2_large_2x.jpg",
  },
  {
    id: "pencil-pro",
    name: "Apple Pencil Pro",
    category: "input",
    price: "₹11900.00*",
    tagline: "Pixel-perfect precision, low latency, and squeeze gesture control.",
    image: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/apple_pencil_78eb83b97_2x.png",
  },
  {
    id: "magic-keyboard-ipad",
    name: "Magic Keyboard for iPad Pro 13-inch",
    category: "input",
    price: "₹33900.00*",
    tagline: "Sleek floating cantilever design and glass haptic trackpad.",
    image: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/keyboards_f5cef0366_2x.png",
  },
  {
    id: "sport-loop",
    name: "Apple Watch Sport Loop 45mm",
    category: "watch",
    price: "₹4500.00*",
    tagline: "Soft, breathable, and lightweight with an easily adjustable hook-and-loop fastener.",
    image: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_bands_58f2591cd_2x.png",
  },
  {
    id: "power-adapter-30w",
    name: "30W USB-C Power Adapter",
    category: "magsafe",
    price: "₹3800.00*",
    tagline: "Fast, efficient charging at home, in the office, or on the go.",
    image: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_accessories_1cd55830a_small_2x.png",
  },
];

export default function AccessoriesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<(typeof ACCESSORY_PRODUCTS)[0] | null>(null);

  const filtered =
    activeTab === "all"
      ? ACCESSORY_PRODUCTS
      : ACCESSORY_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="w-full bg-[#f5f5f7] py-16 px-4 sm:px-8 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-none mb-3">
            Mix. Match. MagSafe.
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#86868b] max-w-xl mx-auto">
            Explore accessories designed precisely for your favorite Apple devices.
          </p>

          {/* Segmented Filter Bar */}
          <div className="inline-flex p-1 bg-white rounded-full border border-black/10 mt-8 max-w-full overflow-x-auto no-scrollbar shadow-sm">
            {ACCESSORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 text-[14px] font-medium rounded-full transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-[#1d1d1f] text-white"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-[28px] p-7 border border-black/5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {prod.name}
                </h3>
                <p className="text-[14px] text-[#86868b] mt-1.5 leading-relaxed">
                  {prod.tagline}
                </p>
                <p className="text-[15px] font-semibold text-[#1d1d1f] mt-3">
                  {prod.price}
                </p>
              </div>

              <div className="h-56 w-full flex items-center justify-center my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <span className="text-[13px] font-medium text-[#0071e3] flex items-center">
                  Free delivery
                </span>
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="h-9 px-5 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MagSafe Advantage Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
            <Zap className="w-8 h-8 text-[#0071e3]" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Fast wireless charging</h3>
            <p className="text-[14px] text-[#86868b] leading-relaxed">
              Perfect magnetic alignment guarantees optimal wireless charging up to 25W every time.
            </p>
          </div>
          <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
            <Shield className="w-8 h-8 text-[#34c759]" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Precision fit & protection</h3>
            <p className="text-[14px] text-[#86868b] leading-relaxed">
              Rigorous drop-tested silicone, clear, and fine woven materials protect without adding bulk.
            </p>
          </div>
          <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
            <Sparkles className="w-8 h-8 text-[#af52de]" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Snap on and go</h3>
            <p className="text-[14px] text-[#86868b] leading-relaxed">
              Stack MagSafe wallets, chargers, and car mounts instantly with strong neodymium magnets.
            </p>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      <SwiftUIModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct ? `Buy ${selectedProduct.name}` : ""}
        headline={selectedProduct?.price}
        subhead={selectedProduct?.tagline}
      >
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center space-x-4">
            {selectedProduct && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-contain shrink-0"
              />
            )}
            <div>
              <p className="text-base font-semibold text-[#1d1d1f]">
                {selectedProduct?.name}
              </p>
              <p className="text-xs text-[#86868b]">In stock • Free shipping</p>
              <p className="text-sm font-semibold text-[#0071e3] mt-1">
                {selectedProduct?.price}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              alert(`Added ${selectedProduct?.name} to Bag!`);
              setSelectedProduct(null);
            }}
            className="w-full h-11 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </SwiftUIModal>
    </div>
  );
}
