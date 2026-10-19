"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SwiftUIModal from "@/components/SwiftUIModal";
import { useCart } from "@/context/CartContext";

export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductSpecItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

export interface ProductModel {
  id: string;
  name: string;
  category: string; // e.g. "laptops" | "desktops" | "all"
  tagline: string;
  price: string;
  monthlyEmi?: string;
  isNew?: boolean;
  defaultImage: string;
  colors?: ColorOption[];
  specs: ProductSpecItem[];
}

interface ProductLineupFilterProps {
  title?: string;
  subtitle?: string;
  tabs: { id: string; label: string }[];
  products: ProductModel[];
}

export default function ProductLineupFilter({
  title = "Explore the line-up.",
  subtitle = "Compare all models and find what fits you best.",
  tabs,
  products,
}: ProductLineupFilterProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "all");
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);
  const [activeColors, setActiveColors] = useState<Record<string, ColorOption>>({});
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  const handleColorSelect = (productId: string, color: ColorOption) => {
    setActiveColors((prev) => ({ ...prev, [productId]: color }));
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Filter Tabs */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[17px] sm:text-[19px] text-[#86868b] mt-2 font-normal">
              {subtitle}
            </p>
          )}

          {/* Segmented Filter Pills */}
          {tabs.length > 1 && (
            <div className="inline-flex p-1 bg-[#f5f5f7] rounded-full border border-black/5 mt-8 max-w-full overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2 text-[14px] font-medium rounded-full transition-colors whitespace-nowrap ${
                      isActive ? "text-[#1d1d1f]" : "text-[#86868b] hover:text-[#1d1d1f]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const currentColor = activeColors[prod.id] || prod.colors?.[0];
              const displayImage = currentColor?.image || prod.defaultImage;

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#f5f5f7] rounded-[28px] p-6 flex flex-col items-center text-center border border-black/5 hover:border-black/10 transition-colors"
                >
                  {/* Badge */}
                  <div className="h-5 mb-2">
                    {prod.isNew && (
                      <span className="text-[11px] font-semibold text-[#b64400] uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </div>

                  {/* Product Visual */}
                  <div className="h-64 sm:h-72 w-full flex items-center justify-center mb-6 relative px-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={displayImage}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Color Swatches */}
                  {prod.colors && prod.colors.length > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                      {prod.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => handleColorSelect(prod.id, c)}
                          aria-label={c.name}
                          className={`w-3.5 h-3.5 rounded-full border border-black/15 transition-all ${
                            currentColor?.name === c.name
                              ? "scale-125 ring-2 ring-[#0071e3] ring-offset-2 ring-offset-[#f5f5f7]"
                              : "hover:scale-110 opacity-80 hover:opacity-100"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  )}

                  {/* Product Name & Tagline */}
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight">
                    {prod.name}
                  </h3>
                  <p className="text-[14px] text-[#86868b] mt-1 h-10 flex items-center justify-center leading-snug">
                    {prod.tagline}
                  </p>

                  {/* Price & Installments */}
                  <div className="my-3">
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">
                      {prod.price}
                    </p>
                    {prod.monthlyEmi && (
                      <p className="text-[12px] text-[#86868b] mt-0.5">
                        {prod.monthlyEmi}
                      </p>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-2.5 my-4">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="h-[34px] px-4 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
                    >
                      Buy
                    </button>
                    <a
                      href={`#${prod.id}`}
                      className="h-[34px] px-4 rounded-full border border-[#0071e3] text-[#0071e3] text-[13px] font-medium hover:bg-[#0071e3] hover:text-white transition-colors inline-flex items-center"
                    >
                      Learn more
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-black/10 my-4" />

                  {/* Tech Specs List */}
                  <div className="w-full space-y-3.5 text-left text-xs sm:text-[13px] text-[#1d1d1f]">
                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2.5">
                        {spec.icon && (
                          <div className="shrink-0 mt-0.5 text-[#86868b]">
                            {spec.icon}
                          </div>
                        )}
                        <div>
                          <span className="text-[#86868b] block text-[11px] uppercase tracking-wider">
                            {spec.label}
                          </span>
                          <span className="font-medium text-[#1d1d1f]">
                            {spec.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* SwiftUI Modal Buy Drawer */}
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
                src={selectedProduct.defaultImage}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-contain shrink-0"
              />
            )}
            <div>
              <p className="text-base font-semibold text-[#1d1d1f]">
                {selectedProduct?.name}
              </p>
              <p className="text-xs text-[#86868b]">Free contactless delivery</p>
              <p className="text-sm font-semibold text-[#0071e3] mt-1">
                {selectedProduct?.price}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
              Payment & Financing
            </label>
            <div className="p-3.5 rounded-xl border border-black/10 text-xs text-[#1d1d1f] flex justify-between items-center">
              <span>Apple Card Monthly Installments (0% APR)</span>
              <span className="font-semibold text-[#0071e3]">Available</span>
            </div>
            <div className="p-3.5 rounded-xl border border-black/10 text-xs text-[#1d1d1f] flex justify-between items-center">
              <span>Apple Trade In (Save up to $650)</span>
              <span className="font-semibold text-[#34c759]">Eligible</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (selectedProduct) {
                const numericPrice = parseInt(selectedProduct.price.replace(/[^0-9]/g, ""), 10) || 0;
                addToCart({
                  id: selectedProduct.id,
                  name: selectedProduct.name,
                  price: selectedProduct.price,
                  priceNumber: numericPrice,
                  image: selectedProduct.defaultImage,
                  specs: selectedProduct.tagline,
                });
                setAdded(true);
                setTimeout(() => {
                  setSelectedProduct(null);
                  setAdded(false);
                }, 800);
              }
            }}
            className="w-full h-11 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors"
          >
            {added ? "✓ Added to Bag" : "Add to Bag"}
          </button>
        </div>
      </SwiftUIModal>
    </section>
  );
}
