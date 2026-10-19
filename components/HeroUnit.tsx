"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import SwiftUIModal from "./SwiftUIModal";
import { useCart } from "@/context/CartContext";

export interface HeroUnitProps {
  id: string;
  theme?: "light" | "dark";
  headline: string;
  subhead: string;
  callout?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  contentPlacement?: "top" | "bottom";
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  logoSrc?: string;
}

export default function HeroUnit({
  id,
  theme = "light",
  headline,
  subhead,
  callout,
  primaryCtaText = "Learn more",
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  contentPlacement = "top",
  imageSrc,
  imageAlt,
  videoSrc,
  logoSrc,
}: HeroUnitProps) {
  const [modalType, setModalType] = useState<"learn" | "order" | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { addToCart } = useCart();

  const isDark = theme === "dark";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            if (isPlaying) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden select-none mb-3 transition-colors hero-unit-height flex flex-col ${
        contentPlacement === "bottom" ? "justify-end" : "justify-start"
      } ${
        isDark ? "bg-[#000000] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
      }`}
    >
      {/* Content Header (Top or Bottom aligned with Apple's 55px/65px padding) */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center w-full ${
          contentPlacement === "bottom"
            ? "pb-[45px] sm:pb-[55px] md:pb-[65px] mt-auto"
            : "pt-[45px] sm:pt-[55px] md:pt-[65px]"
        }`}
      >
        {logoSrc ? (
          <div className="mb-2 h-10 sm:h-12 md:h-14 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt={headline}
              className="max-h-full object-contain"
            />
          </div>
        ) : (
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className={`text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.015em] leading-[1.07] ${
              isDark ? "text-white" : "text-[#1d1d1f]"
            }`}
          >
            {headline}
          </motion.h2>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className={`text-[20px] sm:text-[24px] md:text-[28px] mt-1.5 leading-[1.14] font-normal tracking-[0.007em] max-w-2xl ${
            isDark ? "text-white/85" : "text-[#1d1d1f]"
          }`}
        >
          {subhead}
        </motion.p>

        {callout && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[16px] sm:text-[19px] text-[#86868b] mt-1.5 font-normal tracking-[-0.01em]"
          >
            {callout}
          </motion.p>
        )}

        {/* Big Apple Action Pill Buttons (17px text, 44px height, 22px padding) */}
        {(primaryCtaText || secondaryCtaText) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center justify-center gap-[14px] mt-[16px]"
          >
            {primaryCtaText && (
              primaryCtaLink ? (
                <Link
                  href={primaryCtaLink}
                  prefetch={true}
                  className="h-[44px] px-[22px] rounded-full bg-[#0071e3] text-white text-[17px] font-normal tracking-[-0.022em] hover:bg-[#0077ed] transition-all active:scale-[0.98] shadow-sm flex items-center justify-center"
                >
                  {primaryCtaText}
                </Link>
              ) : (
                <button
                  onClick={() => setModalType("learn")}
                  className="h-[44px] px-[22px] rounded-full bg-[#0071e3] text-white text-[17px] font-normal tracking-[-0.022em] hover:bg-[#0077ed] transition-all active:scale-[0.98] shadow-sm flex items-center justify-center"
                >
                  {primaryCtaText}
                </button>
              )
            )}

            {secondaryCtaText && (
              secondaryCtaLink ? (
                <Link
                  href={secondaryCtaLink}
                  prefetch={true}
                  className="h-[44px] px-[22px] rounded-full border border-[#0071e3] text-[#0071e3] text-[17px] font-normal tracking-[-0.022em] hover:bg-[#0071e3] hover:text-white transition-all active:scale-[0.98] flex items-center justify-center"
                >
                  {secondaryCtaText}
                </Link>
              ) : (
                <button
                  onClick={() => setModalType("order")}
                  className="h-[44px] px-[22px] rounded-full border border-[#0071e3] text-[#0071e3] text-[17px] font-normal tracking-[-0.022em] hover:bg-[#0071e3] hover:text-white transition-all active:scale-[0.98] flex items-center justify-center"
                >
                  {secondaryCtaText}
                </button>
              )
            )}
          </motion.div>
        )}
      </div>

      {/* Hero Visual Media: Fills the entire hero area with authentic Apple scale */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none flex justify-center ${
          contentPlacement === "bottom" ? "items-start" : "items-end"
        }`}
      >
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={imageSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute left-1/2 -translate-x-1/2 h-full w-auto max-w-none transition-opacity duration-700 ${
                contentPlacement === "bottom"
                  ? "top-0 object-top object-contain"
                  : "bottom-0 object-bottom object-contain"
              } ${videoLoaded ? "opacity-100" : "opacity-0"}`}
            />
            {!videoLoaded && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={imageSrc}
                alt={imageAlt}
                referrerPolicy="no-referrer"
                className={`absolute left-1/2 -translate-x-1/2 h-full w-auto max-w-none ${
                  contentPlacement === "bottom"
                    ? "top-0 object-top object-contain"
                    : "bottom-0 object-bottom object-contain"
                }`}
              />
            )}
          </>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={imageAlt}
            referrerPolicy="no-referrer"
            className={`absolute left-1/2 -translate-x-1/2 h-full w-auto max-w-none ${
              contentPlacement === "bottom"
                ? "top-0 object-top object-contain"
                : "bottom-0 object-bottom object-contain"
            }`}
            loading="eager"
          />
        )}
      </div>

      {/* Floating Video Play / Pause Control Button */}
      {videoSrc && (
        <div className="absolute bottom-6 right-6 z-20">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
            className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md flex items-center justify-center text-[#1d1d1f] transition-all shadow-md active:scale-90"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>
        </div>
      )}

      {/* Interactive Modal Sheet */}
      <SwiftUIModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        title={
          modalType === "learn"
            ? `Overview — ${headline}`
            : `Pre-order / Buy — ${headline}`
        }
        subtitle={subhead}
      >
        <div className="space-y-4">
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-black/5 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-full max-w-full object-contain p-4"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-base text-[#1d1d1f]">
              Key Features & Innovations
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#86868b]">
              <li>Next-generation Apple Silicon for extraordinary processing power.</li>
              <li>Engineered for Apple Intelligence — intuitive, fast, and private.</li>
              <li>Super Retina XDR with adaptive ProMotion up to 120Hz.</li>
              <li>Industry-leading ceramic shield and all-day battery life.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#f5f5f7] flex items-center justify-between border border-black/5">
            <div>
              <p className="text-xs text-[#86868b]">Starting from</p>
              <p className="text-lg font-bold text-[#1d1d1f]">
                ₹79,900.00
              </p>
              <p className="text-[11px] text-[#86868b]">
                Or ₹6,658/mo. with No Cost EMI
              </p>
            </div>
            <button
              onClick={() => {
                addToCart({
                  id: id || headline.toLowerCase().replace(/\s+/g, "-"),
                  name: headline,
                  price: "From ₹79900.00*",
                  priceNumber: 79900,
                  image: imageSrc,
                  specs: subhead,
                });
                setModalType(null);
              }}
              className="h-[40px] px-6 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-all"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </SwiftUIModal>
    </section>
  );
}
