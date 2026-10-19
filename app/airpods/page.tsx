"use client";

import { useState, useRef } from "react";
import ChapterNav, { ChapterItem } from "@/components/ChapterNav";
import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import ProductLineupFilter, { ProductModel } from "@/components/ProductLineupFilter";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import EssentialsSection, { EssentialItem } from "@/components/EssentialsSection";
import { Volume2, Battery, ShieldCheck, Sparkles, Headphones } from "lucide-react";

const AIRPODS_CHAPTERS: ChapterItem[] = [
  {
    id: "airpods4",
    name: "AirPods 4",
    href: "#airpods4",
    isNew: true,
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/airpods_4__fqax1brwh46e_large.svg",
  },
  {
    id: "pro2",
    name: "AirPods Pro 2",
    href: "#pro2",
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/airpods_pro_light__ets5a19rt3au_large.png",
  },
  {
    id: "max",
    name: "AirPods Max",
    href: "#max",
    isNew: true,
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/airpods_max_light__cvaaddhgazqu_large.png",
  },
  {
    id: "compare",
    name: "Compare",
    href: "#compare",
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    href: "/accessories?category=airpods",
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/airpods_accessories_dark__b1i95uxaf7f6_large.png",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    href: "/entertainment",
    imgSrc: "https://www.apple.com/v/airpods/ag/images/chapternav/apple_music_light__fexraacz3dme_large.png",
  },
];

const AIRPODS_MODELS: ProductModel[] = [
  {
    id: "airpods-4",
    name: "AirPods 4",
    category: "airpods4",
    tagline: "Iconic. Now supersonic. Open-ear comfort.",
    price: "$129",
    monthlyEmi: "or $10.75/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    colors: [{ name: "White", hex: "#ffffff", image: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg" }],
    specs: [
      { label: "Audio", value: "Personalised Spatial Audio with dynamic head tracking", icon: <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Chip", value: "Apple H2 headphone chip", icon: <Sparkles className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 30 hours total listening time with case", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Case", value: "USB-C Charging Case (smallest yet)", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "airpods-4-anc",
    name: "AirPods 4 with Active Noise Cancellation",
    category: "airpods4",
    tagline: "Active Noise Cancellation in an open-ear design.",
    price: "$179",
    monthlyEmi: "or $14.91/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    colors: [{ name: "White", hex: "#ffffff", image: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg" }],
    specs: [
      { label: "Audio", value: "Active Noise Cancellation, Transparency & Adaptive Audio", icon: <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Chip", value: "Apple H2 headphone chip", icon: <Sparkles className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 30 hours total listening time", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Case", value: "Wireless Charging Case with built-in speaker for Find My", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    category: "pro",
    tagline: "Pro-level Active Noise Cancellation with hearing aid capability.",
    price: "$249",
    monthlyEmi: "or $20.75/mo. for 12 mo.*",
    defaultImage: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    colors: [{ name: "White", hex: "#ffffff", image: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg" }],
    specs: [
      { label: "Audio", value: "Up to 2x more Active Noise Cancellation", icon: <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Health", value: "Scientifically validated Hearing Test & Hearing Aid features", icon: <Sparkles className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Battery", value: "Up to 6 hours listening on one charge (30h with case)", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Case", value: "MagSafe Case (USB-C) with speaker and lanyard loop", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "max",
    tagline: "Symphonic masterpiece with high-fidelity sound.",
    price: "$549",
    monthlyEmi: "or $45.75/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_blue__fsfaleh1smuu_large.png",
    colors: [
      { name: "Midnight", hex: "#232b35", image: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_black__x3byrd2venmu_large.png" },
      { name: "Starlight", hex: "#f0e5d3", image: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_stardust__l9lr6719rmaa_large.png" },
      { name: "Blue", hex: "#466e99", image: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_blue__fsfaleh1smuu_large.png" },
      { name: "Purple", hex: "#8a7ea8", image: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_purple__d9y3g3n7cnyq_large.png" },
      { name: "Orange", hex: "#e57e4c", image: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_orange__gln3ifz5o9ei_large.png" },
    ],
    specs: [
      { label: "Audio", value: "Pro-level Active Noise Cancellation & Transparency mode", icon: <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Design", value: "Knit-mesh canopy and acoustically engineered ear cushions", icon: <Headphones className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 20 hours listening time on a single charge", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Charging", value: "Fast USB-C charging connector", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
];

const AIRPODS_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "spatial",
    category: "Spatial Audio",
    title: "Sound tailored to the shape of your ears.",
    subtitle: "Theatre-like sound wherever you go.",
    description:
      "Personalised Spatial Audio with dynamic head tracking places sound all around you, creating a three-dimensional listening experience for music, TV shows, and games.",
    imageSrc: "https://www.apple.com/v/airpods/af/images/overview/hero__gb4d3fd8jnu6_large.jpg",
    theme: "light",
  },
  {
    id: "hearing",
    category: "Hearing Health",
    title: "Clinical-grade Hearing Aid feature.",
    subtitle: "Protect, test, and enhance your hearing.",
    description:
      "Take a scientifically validated hearing test in the comfort of your home. AirPods Pro 2 can serve as an active, customized hearing aid, amplifying the specific frequencies you need to hear clearly.",
    imageSrc: "https://www.apple.com/in/homepage/images/se-airpods/promo/se-airpods_promo__ddgveck65tyu_large.jpg",
    theme: "light",
  },
  {
    id: "switching",
    category: "Magic Ecosystem",
    title: "Instant setup. Effortless switching.",
    subtitle: "One tap to connect across all your Apple devices.",
    description:
      "Place your AirPods near your iPhone and tap Connect to pair with every device in your iCloud account. Seamlessly switch from watching a movie on your Mac to taking a call on your iPhone.",
    imageSrc: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_blue__fsfaleh1smuu_large.png",
    theme: "light",
  },
];

const AIRPODS_ESSENTIALS: EssentialItem[] = [
  {
    id: "magsafe-charger",
    name: "MagSafe Charger (1m)",
    category: "Power",
    price: "$39.00",
    imageSrc: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    href: "/accessories",
  },
  {
    id: "adapter",
    name: "20W USB-C Power Adapter",
    category: "Power",
    price: "$19.00",
    imageSrc: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    href: "/accessories",
  },
  {
    id: "apple-music",
    name: "Apple Music - 3 months free",
    category: "Services",
    price: "Free with your AirPods",
    imageSrc: "https://www.apple.com/v/airpods/af/images/overview/airpods_max_blue__fsfaleh1smuu_large.png",
    href: "/entertainment",
  },
];

export default function AirPodsPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="w-full bg-white">
      {/* Top Apple Music Ribbon Banner (Exact Replica from Image 1) */}
      <div className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] border-b border-black/5 text-center py-2.5 px-4 transition-colors">
        <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#1d1d1f] dark:text-[#f5f5f7] max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-1 font-normal">
          <span>Get 3 months of Apple Music free with your AirPods.‡</span>
          <a
            href="/store?category=airpods"
            className="text-[#0071e3] hover:underline inline-flex items-center font-normal ml-0.5 group"
          >
            <span>Buy</span>
            <span className="text-sm font-semibold ml-0.5 group-hover:translate-x-0.5 transition-transform">›</span>
          </a>
        </p>
      </div>

      {/* HERO SECTION 1: Exact Rounded Card Showcase from Apple.com (Image 1) */}
      <section className="w-full px-3 sm:px-6 md:px-8 py-3 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] h-[640px] sm:h-[700px] md:h-[756px] w-full bg-[#f97316] select-none shadow-sm flex flex-col justify-end">
          {/* Dual Spotlight Ambient Glow Background (Warm Golden Halos) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, #fba03d 0%, #ea580c 45%, #9a3412 85%), radial-gradient(circle at 70% 50%, #fba03d 0%, #ea580c 45%, #9a3412 85%)",
            }}
          />

          {/* Official Apple Inline Video & Fallback Frame */}
          <video
            ref={videoRef}
            src="https://www.apple.com/105/media/us/airpods/2024/b4e8e99e-af2c-413e-84d4-50a9a5ee4fe3/anim/airpods/large_2x.mp4"
            poster="https://www.apple.com/v/airpods/ag/images/overview/hero__gb4d3fd8jnu6_large_2x.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Top-Right Round Translucent Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute top-6 right-6 z-30 w-9 h-9 rounded-full bg-black/35 hover:bg-black/55 backdrop-blur-md text-white flex items-center justify-center transition-all active:scale-95"
          >
            {isPlaying ? (
              <span className="font-mono text-xs font-bold leading-none tracking-tight">||</span>
            ) : (
              <span className="text-xs leading-none ml-0.5">▶</span>
            )}
          </button>

          {/* Bottom Card Content Overlay (Exact Positioning from Official Apple) */}
          <div className="relative z-20 w-full p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            {/* Bottom-Left Text Copy */}
            <div className="text-left max-w-xl">
              <h1 className="text-[46px] sm:text-[58px] md:text-[68px] font-bold text-white tracking-[-0.02em] leading-none">
                AirPods 5
              </h1>
              <p className="text-[18px] sm:text-[21px] text-white font-normal mt-2.5 leading-snug">
                Discover the magic of Active Noise Cancellation.
              </p>
              <p className="text-[14px] sm:text-[15px] text-white/80 mt-1.5 font-normal tracking-wide">
                Starting at $129
              </p>
            </div>

            {/* Bottom-Right CTA Pill Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#airpods4"
                className="h-[38px] px-5 rounded-full bg-white text-[#1d1d1f] hover:bg-white/90 text-[14px] sm:text-[15px] font-medium transition-all active:scale-[0.98] shadow-sm flex items-center justify-center"
              >
                Learn more
              </a>
              <a
                href="/store?category=airpods"
                className="h-[38px] px-5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-[14px] sm:text-[15px] font-medium transition-all active:scale-[0.98] shadow-sm flex items-center justify-center"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Navigation Bar (Cleanly Docked with No Clutter) */}
      <ChapterNav items={AIRPODS_CHAPTERS} />

      {/* Explore the Lineup Section with Segmented Tabs, Color Dots & Tech Specs */}
      <ProductLineupFilter
        title="Compare AirPods models."
        subtitle="Compare audio quality, active noise cancellation, and battery life."
        tabs={[
          { id: "all", label: "All models" },
          { id: "airpods4", label: "AirPods 4" },
          { id: "pro", label: "AirPods Pro" },
          { id: "max", label: "AirPods Max" },
        ]}
        products={AIRPODS_MODELS}
      />

      {/* Get to know AirPods Feature Carousel */}
      <FeatureCarousel
        title="Get to know AirPods."
        subtitle="Engineered for pristine sound and intuitive magic."
        items={AIRPODS_FEATURE_CARDS}
      />

      {/* Why Apple is the best place to buy AirPods */}
      <WhyAppleSection productName="AirPods" />

      {/* AirPods Essentials Accessories Grid */}
      <EssentialsSection
        title="AirPods essentials."
        subtitle="Enhance your listening with wireless chargers and Apple Music."
        items={AIRPODS_ESSENTIALS}
      />
    </div>
  );
}
