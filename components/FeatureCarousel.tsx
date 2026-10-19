"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FeatureCardItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  fullContent?: string;
  imageSrc: string;
  theme?: "light" | "dark";
  tag?: string;
}

interface FeatureCarouselProps {
  title: string;
  subtitle?: string;
  items: FeatureCardItem[];
}

export default function FeatureCarousel({
  title,
  subtitle,
  items,
}: FeatureCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = useState<FeatureCardItem | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll Controls */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[17px] sm:text-[19px] text-[#86868b] mt-2 font-normal">
                {subtitle}
              </p>
            )}
          </div>

          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center text-[#1d1d1f] shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center text-[#1d1d1f] shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCard(item)}
              className="shrink-0 w-[310px] sm:w-[380px] h-[480px] sm:h-[500px] rounded-[28px] overflow-hidden relative cursor-pointer group snap-start shadow-sm hover:shadow-xl transition-shadow bg-white"
            >
              {/* Media Background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div
                className={`absolute inset-0 ${
                  item.theme === "dark"
                    ? "bg-gradient-to-b from-black/60 via-transparent to-black/80"
                    : "bg-gradient-to-b from-black/25 via-transparent to-white/90"
                }`}
              />

              {/* Card Header Content */}
              <div className="absolute top-7 left-7 right-7 z-10">
                <span
                  className={`text-[12px] font-semibold tracking-wider uppercase ${
                    item.theme === "dark" ? "text-white/80" : "text-[#1d1d1f]/80"
                  }`}
                >
                  {item.category}
                </span>
                <h3
                  className={`text-[22px] sm:text-[26px] font-semibold leading-snug tracking-tight mt-1 ${
                    item.theme === "dark" ? "text-white" : "text-[#1d1d1f]"
                  }`}
                >
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p
                    className={`text-[15px] sm:text-[17px] font-normal mt-1 ${
                      item.theme === "dark" ? "text-white/80" : "text-[#1d1d1f]/80"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                )}
              </div>

              {/* Bottom Action Pill */}
              <div className="absolute bottom-6 right-6 z-10">
                <div className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-white text-[#1d1d1f] shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                  <Plus className="w-5 h-5 text-[#1d1d1f]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Sheet */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-white rounded-[32px] max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedCard(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-[#1d1d1f] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-64 sm:h-72 w-full relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCard.imageSrc}
                  alt={selectedCard.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                    {selectedCard.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight mt-1">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 overflow-y-auto space-y-4">
                <p className="text-[17px] leading-relaxed text-[#1d1d1f] font-normal">
                  {selectedCard.description}
                </p>
                {selectedCard.fullContent && (
                  <p className="text-[15px] leading-relaxed text-[#86868b]">
                    {selectedCard.fullContent}
                  </p>
                )}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
