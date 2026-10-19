"use client";

import ChapterNav, { ChapterItem } from "@/components/ChapterNav";
import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import ProductLineupFilter, { ProductModel } from "@/components/ProductLineupFilter";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import EssentialsSection, { EssentialItem } from "@/components/EssentialsSection";
import { Sparkles, Camera, Cpu, Battery, Shield } from "lucide-react";

const IPHONE_CHAPTERS: ChapterItem[] = [
  {
    id: "duo",
    name: "iPhone Duo",
    href: "#duo",
    isNew: true,
    imgSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/chapternav/iphone_duo__hefmlegzwbmi_large.png",
  },
  {
    id: "18pro",
    name: "iPhone 18 Pro",
    href: "#18pro",
    isNew: true,
    imgSrc: "https://www.apple.com/in/iphone/home/images/overview/chapternav/iphone_18_pro__dj48ysc0yagm_large.png",
  },
  {
    id: "air",
    name: "iPhone Air",
    href: "#air",
    isNew: true,
    imgSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/chapternav/iphone_air__b5qmgl05ojyq_large.png",
  },
  {
    id: "17",
    name: "iPhone 17",
    href: "#17",
    isNew: true,
    imgSrc: "https://www.apple.com/in/iphone/home/images/overview/chapternav/iphone_17__fb1277oq3eaa_large.png",
  },
  {
    id: "16",
    name: "iPhone 16",
    href: "#16",
    imgSrc: "https://www.apple.com/in/iphone/home/images/overview/chapternav/iphone_16__b6tkv86m2gc2_large.png",
  },
  {
    id: "compare",
    name: "Compare",
    href: "#compare",
    imgSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/chapternav/compare__e479gubocjau_large.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    href: "/accessories",
    imgSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/chapternav/accessories__ghgqo4vsxcqe_large.png",
  },
  {
    id: "shop",
    name: "Shop iPhone",
    href: "/store",
    imgSrc: "https://www.apple.com/in/iphone/home/images/overview/chapternav/shop__dmmu8wcl1iie_large.png",
  },
];

const IPHONE_MODELS: ProductModel[] = [
  {
    id: "iphone-18-pro",
    name: "iPhone 18 Pro",
    category: "pro",
    tagline: "The ultimate iPhone. Built for Apple Intelligence.",
    price: "From $999",
    monthlyEmi: "or $41.62/mo. for 24 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg",
    colors: [
      { name: "Desert Titanium", hex: "#c4a88f", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg" },
      { name: "Natural Titanium", hex: "#9a958e", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg" },
      { name: "White Titanium", hex: "#e5e5e5", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg" },
      { name: "Black Titanium", hex: "#3b3b3e", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg" },
    ],
    specs: [
      { label: "Intelligence", value: "Apple Intelligence personal AI", icon: <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Processor", value: "A18 Pro chip with 6-core GPU", icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "48MP Fusion | 5x Telephoto | Camera Control", icon: <Camera className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 33 hours video playback", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
  {
    id: "iphone-duo",
    name: "iPhone Duo",
    category: "pro",
    tagline: "Two screens. Infinite possibilities.",
    price: "From $1,299",
    monthlyEmi: "or $54.12/mo. for 24 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_duo__hefmlegzwbmi_large_2x.jpg",
    colors: [
      { name: "Space Black", hex: "#1d1d1f", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_duo__hefmlegzwbmi_large_2x.jpg" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_duo__hefmlegzwbmi_large_2x.jpg" },
    ],
    specs: [
      { label: "Intelligence", value: "Dual Screen Apple Intelligence", icon: <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Processor", value: "A18 Pro Dual-Screen Engine", icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "Dual 48MP Pro Cameras", icon: <Camera className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 30 hours video playback", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
  {
    id: "iphone-air",
    name: "iPhone Air",
    category: "base",
    tagline: "Impossibly thin. Unbelievably capable.",
    price: "From $899",
    monthlyEmi: "or $37.45/mo. for 24 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_air__b5qmgl05ojyq_large_2x.jpg",
    colors: [
      { name: "Sky Blue", hex: "#7ea3cc", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_air__b5qmgl05ojyq_large_2x.jpg" },
      { name: "Cloud White", hex: "#f5f5f7", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_air__b5qmgl05ojyq_large_2x.jpg" },
      { name: "Space Gray", hex: "#4a4a4f", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_air__b5qmgl05ojyq_large_2x.jpg" },
    ],
    specs: [
      { label: "Intelligence", value: "Apple Intelligence built-in", icon: <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Processor", value: "A18 chip with ultra-efficient core", icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "48MP Fusion Camera with 2x optical crop", icon: <Camera className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 24 hours video playback", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    category: "base",
    tagline: "Total powerhouse. Fresh vibrant colors.",
    price: "From $799",
    monthlyEmi: "or $33.29/mo. for 24 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg",
    colors: [
      { name: "Ultramarine", hex: "#5267b2", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg" },
      { name: "Teal", hex: "#7a9b9e", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg" },
      { name: "Pink", hex: "#d8859e", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg" },
      { name: "White", hex: "#f0f0f0", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg" },
      { name: "Black", hex: "#222224", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_17__fb1277oq3eaa_large_2x.jpg" },
    ],
    specs: [
      { label: "Intelligence", value: "Apple Intelligence ready", icon: <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Processor", value: "A18 chip with 5-core GPU", icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "48MP Fusion | 2x Telephoto | Camera Control", icon: <Camera className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 27 hours video playback", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    category: "base",
    tagline: "Incredible value. Superfast performance.",
    price: "From $699",
    monthlyEmi: "or $29.12/mo. for 24 mo.*",
    defaultImage: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_16__b6tkv86m2gc2_large_2x.jpg",
    colors: [
      { name: "Blue", hex: "#6389a8", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_16__b6tkv86m2gc2_large_2x.jpg" },
      { name: "Yellow", hex: "#f2dc87", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_16__b6tkv86m2gc2_large_2x.jpg" },
      { name: "Green", hex: "#cde3c1", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_16__b6tkv86m2gc2_large_2x.jpg" },
      { name: "Black", hex: "#1f2022", image: "https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_16__b6tkv86m2gc2_large_2x.jpg" },
    ],
    specs: [
      { label: "Intelligence", value: "iOS 18 with AI enhancements", icon: <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Processor", value: "A16 Bionic chip", icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "Advanced Dual Camera System", icon: <Camera className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 22 hours video playback", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
];

const IPHONE_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "ai",
    category: "Apple Intelligence",
    title: "AI that truly gets you.",
    subtitle: "Personal, private, powerful.",
    description:
      "Apple Intelligence helps you write, express yourself, and get things done effortlessly. Groundbreaking privacy protections ensure no one else can access your data — not even Apple.",
    fullContent:
      "Integrated into the core of iOS, Siri has a richer language understanding, onscreen awareness, and can take hundreds of new actions across your apps.",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/consider/getting_started__c6vq76n4ufu6_large_2x.jpg",
    theme: "light",
  },
  {
    id: "camera",
    category: "Cutting-Edge Cameras",
    title: "Picture your best photos and videos.",
    subtitle: "Camera Control gives you instant visual mastery.",
    description:
      "Take stunning 48MP photos with unprecedented detail and color. Zoom smoothly, adjust exposure and depth of field, and toggle between lenses with the brand-new touch-sensitive Camera Control.",
    fullContent:
      "Capture cinematic 4K 120 fps Dolby Vision video with studio-quality mics that reduce unwanted wind and background noise.",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/consider/camera__faw4z87c69mu_large_2x.jpg",
    theme: "light",
  },
  {
    id: "chip",
    category: "Pro Performance",
    title: "A chip that runs circles around the rest.",
    subtitle: "Supercharged gaming and neural computing.",
    description:
      "The custom A18 Pro architecture powers hardware-accelerated ray tracing for immersive AAA console titles with fluid frame rates and realistic lighting.",
    fullContent:
      "The 16-core Neural Engine processes on-device generative models twice as fast as the previous generation while saving battery life.",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/consider/performance__d4n0c15lhy6a_large_2x.jpg",
    theme: "light",
  },
  {
    id: "durability",
    category: "Designed to Last",
    title: "Tougher than any smartphone glass.",
    subtitle: "Aerospace-grade durability.",
    description:
      "Latest-generation Ceramic Shield is 50% tougher than the first generation and two times tougher than glass on any other phone. Water, splash, and dust resistant.",
    fullContent:
      "Crafted with 100% recycled aluminum internal structural frames, upholding Apple's 2030 climate pledge.",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/essentials/iphone_accessories__ewu4v2diihw2_large_2x.jpg",
    theme: "light",
  },
];

const IPHONE_ESSENTIALS: EssentialItem[] = [
  {
    id: "case",
    name: "iPhone 18 Pro Silicone Case with MagSafe",
    category: "Case",
    price: "$49.00",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/essentials/iphone_accessories__ewu4v2diihw2_large_2x.jpg",
    href: "/accessories",
  },
  {
    id: "magsafe",
    name: "MagSafe Charger (2m)",
    category: "Power",
    price: "$39.00",
    imageSrc: "https://www.apple.com/v/iphone/home/ck/images/overview/essentials/iphone_accessories__ewu4v2diihw2_large_2x.jpg",
    href: "/accessories",
  },
  {
    id: "airpods",
    name: "AirPods Pro 2",
    category: "Audio",
    price: "$249.00",
    imageSrc: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    href: "/airpods-pro",
  },
];

export default function IPhonePage() {
  return (
    <div className="w-full bg-white">
      {/* Chapter Nav Strip */}
      <ChapterNav items={IPHONE_CHAPTERS} />

      {/* Top Trade In Ribbon */}
      <div className="bg-[#f5f5f7] py-3 text-center text-[12px] sm:text-[14px] text-[#1d1d1f] border-b border-black/5">
        Get $180–$650 in credit when you trade in iPhone 11 or higher.{" "}
        <a href="/shop/trade-in" className="text-[#0071e3] hover:underline font-medium">
          Shop iPhone &gt;
        </a>
      </div>

      {/* Hero 1: iPhone Duo with Official Apple Inline Video */}
      <HeroUnit
        id="duo"
        theme="light"
        headline="iPhone Duo"
        subhead="Hello, hello. Two screens. Infinite possibilities."
        callout="From $1,299 or $54.12/mo. for 24 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/iphone-duo"
        secondaryCtaText="Pre-order"
        secondaryCtaLink="/store"
        videoSrc="https://www.apple.com/105/media/in/homepage/2026/dfe63e15-1d50-4ed5-bffc-c121fa0b8626/anim/large_2x.mp4"
        imageSrc="https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_duo__hefmlegzwbmi_large_2x.jpg"
        imageAlt="iPhone Duo"
      />

      {/* Hero 2: iPhone 18 Pro */}
      <HeroUnit
        id="18pro"
        theme="light"
        headline="iPhone 18 Pro"
        subhead="Pro further. Hello, Apple Intelligence."
        callout="From $999 or $41.62/mo. for 24 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/iphone-18-pro"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        imageSrc="https://www.apple.com/v/iphone/home/ck/images/overview/select/iphone_18_pro__dj48ysc0yagm_large_2x.jpg"
        imageAlt="iPhone 18 Pro"
      />

      {/* Explore the Lineup Section with Segmented Tabs, Color Dots & Tech Specs */}
      <ProductLineupFilter
        title="Explore the line-up."
        subtitle="Compare all models and find the one that fits you best."
        tabs={[
          { id: "all", label: "All models" },
          { id: "pro", label: "Pro models" },
          { id: "base", label: "Standard models" },
        ]}
        products={IPHONE_MODELS}
      />

      {/* Get to know iPhone Feature Carousel */}
      <FeatureCarousel
        title="Get to know iPhone."
        subtitle="Remarkable technology designed for your everyday life."
        items={IPHONE_FEATURE_CARDS}
      />

      {/* Why Apple is the best place to buy iPhone */}
      <WhyAppleSection productName="iPhone" />

      {/* iPhone Essentials Accessories Grid */}
      <EssentialsSection
        title="iPhone essentials."
        subtitle="Accessories designed specifically to complement your iPhone."
        items={IPHONE_ESSENTIALS}
      />
    </div>
  );
}
