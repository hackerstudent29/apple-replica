"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SwiftUIModal from "./SwiftUIModal";

interface TvShow {
  id: string;
  title: string;
  genre: string;
  description: string;
  imageSrc: string;
  streamBadge: string;
}

const TV_SHOWS: TvShow[] = [
  {
    id: "monarch",
    title: "Monarch: Legacy of Monsters",
    genre: "Sci-Fi",
    description: "Uncovering the secret legacy of titans across three generations.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/ubyMKBPSumJZe4z6Nn1A2A/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "slow-horses",
    title: "Slow Horses",
    genre: "Thriller",
    description: "An espionage drama following a dysfunctional team of MI5 rejects.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/x5JjmiSD75wN12-HmmZRcg/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "hijack",
    title: "Hijack",
    genre: "Suspense",
    description: "When Flight KA29 is hijacked, corporate negotiator Sam Nelson steps up.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/810FL_VK0SEREgoMM3eKtA/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "pluribus",
    title: "Pluribus",
    genre: "Drama",
    description: "A gripping drama examining power, ambition, and world-changing events.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/S9dLxU_nCvhomqGnI3-d_g/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "morning-show",
    title: "The Morning Show",
    genre: "Drama",
    description: "An unapologetically candid look at the modern television workplace.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/OmAEHiPsBUBSNjqgm9ItjA/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "severance",
    title: "Severance",
    genre: "Thriller",
    description: "Mark leads a team of office workers whose memories have been surgically divided.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "ted-lasso",
    title: "Ted Lasso",
    genre: "Comedy",
    description: "Kindness makes a comeback in this multi-Emmy award-winning comedy.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/yLaIuyo68a7gtcjngkHQiQ/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
  {
    id: "silo",
    title: "Silo",
    genre: "Sci-Fi",
    description: "In a ruined and toxic future, thousands live in a giant silo deep underground.",
    imageSrc: "https://is1-ssl.mzstatic.com/image/thumb/DECsbtpVyiT0zpSeop88gg/1250x668sr.jpg",
    streamBadge: "Stream now",
  },
];

export default function TvGallery() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedShow, setSelectedShow] = useState<TvShow | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TV_SHOWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardElements = container.querySelectorAll<HTMLElement>("[data-card-index]");
    const targetCard = cardElements[activeIndex];
    if (targetCard) {
      const targetLeft =
        targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="tv-gallery" className="w-full bg-[#ffffff] py-14 overflow-hidden select-none border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-6 sm:h-8 flex items-center">
            {/* Apple TV+ Logo Lockup (Light Mode) */}
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f] flex items-center gap-1">
              <span>Apple tv</span>
              <span className="text-[#0071e3] text-lg font-light">+</span>
            </span>
          </div>
          <span className="hidden sm:inline-block text-[#86868b] text-sm">
            Endless entertainment. Stream award-winning Apple Originals.
          </span>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Horizontal Fluid Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 px-4 sm:px-8 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {TV_SHOWS.map((show, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={show.id}
              data-card-index={idx}
              onClick={() => scrollToCard(idx)}
              className={`relative shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-md ${
                isActive ? "opacity-100 scale-100 ring-2 ring-[#0071e3]" : "opacity-75 hover:opacity-95 scale-[0.98]"
              }`}
              style={{
                width: "clamp(300px, 68vw, 980px)",
                aspectRatio: "16 / 9",
                scrollSnapAlign: "center",
              }}
            >
              {/* Show poster artwork */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={show.imageSrc}
                alt={show.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Gradient Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
                <div className="flex items-end justify-between">
                  <div className="max-w-xl">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white mb-2">
                      {show.genre}
                    </span>
                    <h4 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                      {show.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-2 max-w-lg">
                      {show.description}
                    </p>
                  </div>

                  {/* Stream Now Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedShow(show);
                    }}
                    className="apple-btn-dark-primary gap-1.5 shrink-0 hidden sm:inline-flex"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{show.streamBadge}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center space-x-2 mt-6">
        {TV_SHOWS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-[#1d1d1f]" : "w-2 bg-[#d2d2d7] hover:bg-[#86868b]"
            }`}
          />
        ))}
      </div>

      {/* Show Preview Modal */}
      {selectedShow && (
        <SwiftUIModal
          isOpen={true}
          onClose={() => setSelectedShow(null)}
          title={selectedShow.title}
          subtitle={`Apple Original • ${selectedShow.genre}`}
        >
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedShow.imageSrc}
                alt={selectedShow.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              {selectedShow.description} Watch now exclusively on the Apple TV app across your Apple devices, smart TVs, and streaming sticks.
            </p>

            <div className="p-4 rounded-xl bg-[#f5f5f7] flex items-center justify-between border border-black/5">
              <div>
                <p className="text-xs text-[#86868b]">Subscription</p>
                <p className="text-sm font-semibold text-[#1d1d1f]">
                  7 days free, then ₹99/month
                </p>
              </div>
              <button
                onClick={() => {
                  alert(`Starting playback for ${selectedShow.title}`);
                  setSelectedShow(null);
                }}
                className="apple-btn-primary"
              >
                Watch Now
              </button>
            </div>
          </div>
        </SwiftUIModal>
      )}
    </section>
  );
}
