"use client";

import ChapterNav, { ChapterItem } from "@/components/ChapterNav";
import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import ProductLineupFilter, { ProductModel } from "@/components/ProductLineupFilter";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import EssentialsSection, { EssentialItem } from "@/components/EssentialsSection";
import { Cpu, Battery, Monitor, HardDrive, Shield } from "lucide-react";

const MAC_CHAPTERS: ChapterItem[] = [
  {
    id: "mba",
    name: "MacBook Air",
    href: "#air",
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mba_8e00b3bdd_2x.png",
  },
  {
    id: "mbp",
    name: "MacBook Pro",
    href: "#pro",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mbp_0b36bc863_2x.png",
  },
  {
    id: "imac",
    name: "iMac",
    href: "#imac",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_imac_24_fbf85926c_2x.png",
  },
  {
    id: "mini",
    name: "Mac mini",
    href: "#mini",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mac_mini_f628f615d_2x.png",
  },
  {
    id: "studio",
    name: "Mac Studio",
    href: "#studio",
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mac_studio_fc7bb80c1_2x.png",
  },
  {
    id: "compare",
    name: "Compare",
    href: "#compare",
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_compare_5c5c25766_2x.png",
  },
  {
    id: "displays",
    name: "Displays",
    href: "#displays",
    imgSrc: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_displays_7c0628398.png",
  },
];

const MAC_MODELS: ProductModel[] = [
  {
    id: "macbook-air",
    name: "MacBook Air 13” and 15”",
    category: "laptops",
    tagline: "Strikingly thin and fast. For work, play, or anything.",
    price: "From $999",
    monthlyEmi: "or $83.25/mo. for 12 mo.*",
    defaultImage: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
    colors: [
      { name: "Midnight", hex: "#2e3642", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg" },
      { name: "Starlight", hex: "#f0e5d3", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg" },
      { name: "Space Gray", hex: "#7d7e80", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg" },
    ],
    specs: [
      { label: "Chip", value: "Apple M2 or M3 chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "13.6” or 15.3” Liquid Retina display", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 18 hours battery life", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Memory", value: "Up to 24GB unified memory", icon: <HardDrive className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "macbook-pro",
    name: "MacBook Pro 14” and 16”",
    category: "laptops",
    tagline: "Mind-blowing. Head-turning. Supercharged by M4.",
    price: "From $1,599",
    monthlyEmi: "or $133.25/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg",
    colors: [
      { name: "Space Black", hex: "#222325", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg" },
    ],
    specs: [
      { label: "Chip", value: "M4, M4 Pro, or M4 Max chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "14.2” or 16.2” Liquid Retina XDR", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Battery", value: "Up to 24 hours battery life", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Memory", value: "Up to 128GB unified memory", icon: <HardDrive className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "imac",
    name: "iMac 24”",
    category: "desktops",
    tagline: "All-in-one. Fits in anywhere. Pops in seven vibrant colors.",
    price: "From $1,299",
    monthlyEmi: "or $108.25/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg",
    colors: [
      { name: "Green", hex: "#49685a", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Yellow", hex: "#f7d26d", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Orange", hex: "#e57e4c", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Pink", hex: "#c9586b", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Purple", hex: "#7a6ba8", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Blue", hex: "#466e99", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg" },
    ],
    specs: [
      { label: "Chip", value: "M4 chip with up to 10-core GPU", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "24” 4.5K Retina display (500 nits)", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Camera", value: "12MP Center Stage camera", icon: <Monitor className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Audio", value: "Six-speaker sound system with Spatial Audio", icon: <HardDrive className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "mac-mini",
    name: "Mac mini",
    category: "desktops",
    tagline: "More muscle. More hustle. Fits in the palm of your hand.",
    price: "From $599",
    monthlyEmi: "or $49.91/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_mini_3a6756873_2x.jpg",
    colors: [{ name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_mini_3a6756873_2x.jpg" }],
    specs: [
      { label: "Chip", value: "M4 or M4 Pro chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Displays", value: "Supports up to three external displays", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Ports", value: "Thunderbolt 5 / 4, HDMI, Gigabit Ethernet", icon: <HardDrive className="w-3.5 h-3.5" /> },
      { label: "Size", value: "Ultra-compact 5 x 5 inch enclosure", icon: <Shield className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
];

const MAC_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "performance",
    category: "Performance and Battery Life",
    title: "Go fast. Go far.",
    subtitle: "Incredible speed meets epic battery endurance.",
    description:
      "Apple silicon gives Mac game-changing performance with efficiency that seems almost impossible. Fly through high-demand creative workflows, large codebases, and 8K video timelines without breaking a sweat.",
    fullContent:
      "Because Apple silicon is so power-efficient, Mac notebooks deliver up to 24 hours of battery life — and deliver the exact same performance whether plugged in or running on battery.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/feature_card/large/fc_performance_694dcddce_2x.jpg",
    theme: "light",
  },
  {
    id: "intelligence",
    category: "A powerful platform for AI",
    title: "Smart. Secure. On device.",
    subtitle: "Built from silicon to software for artificial intelligence.",
    description:
      "Mac has been engineered from the ground up for AI with a dedicated Neural Engine, lightning-fast unified memory architecture, and advanced ML accelerators integrated right into the CPU and GPU.",
    fullContent:
      "Run state-of-the-art Large Language Models and diffusion models locally at blazing speeds while keeping all sensitive data strictly private on your device.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/01_feature_card/large/fc_intelligence_789c458fb_2x.jpg",
    theme: "light",
  },
  {
    id: "macos",
    category: "macOS and Apple Intelligence",
    title: "Easy to use. Easy to love.",
    subtitle: "Intuitive, reliable, and deeply capable.",
    description:
      "macOS is designed to make work seamless, with familiar gestures, Spotlight search, Stage Manager multitasking, and tight Apple Intelligence integration that elevates everyday tasks.",
    fullContent:
      "With automated system updates, time-tested Unix stability, and built-in privacy protections, Mac is as effortless to manage as it is inspiring to use.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_feature_card/large/fc_macos_310b3e6a0_2x.jpg",
    theme: "light",
  },
  {
    id: "continuity",
    category: "Mac and iPhone",
    title: "Dream team.",
    subtitle: "Better together with Continuity.",
    description:
      "Use iPhone Mirroring to see and control your iPhone right on your Mac screen. Copy text or photos on your iPhone and paste them directly on your Mac with Universal Clipboard.",
    fullContent:
      "Pick up phone calls, reply to texts, and automatically use your iPhone camera as an HD webcam for studio-quality video calls.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_feature_card/large/fc_iphone_1a4c9f1e5_2x.jpg",
    theme: "light",
  },
];

const MAC_ESSENTIALS: EssentialItem[] = [
  {
    id: "keyboard",
    name: "Magic Keyboard with Touch ID and Numeric Keypad",
    category: "Keyboards",
    price: "$199.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_664024e20_2x.jpg",
    href: "/accessories",
  },
  {
    id: "mouse",
    name: "Magic Mouse (USB-C)",
    category: "Mice & Trackpads",
    price: "$99.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
    href: "/accessories",
  },
  {
    id: "display",
    name: "Studio Display - Standard glass",
    category: "Displays",
    price: "$1,599.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg",
    href: "/accessories",
  },
];

export default function MacPage() {
  return (
    <div className="w-full bg-white">
      {/* Chapter Nav Strip with Real Apple 2x PNG Icons */}
      <ChapterNav items={MAC_CHAPTERS} />

      {/* Top Ribbon */}
      <div className="bg-[#f5f5f7] py-3 text-center text-[12px] sm:text-[14px] text-[#1d1d1f] border-b border-black/5">
        Get $150–$1,000 in credit when you trade in a Mac.{" "}
        <a href="/shop/trade-in" className="text-[#0071e3] hover:underline font-medium">
          See what your Mac is worth &gt;
        </a>
      </div>

      {/* Hero Showcase 1: MacBook Air */}
      <HeroUnit
        id="air"
        theme="light"
        headline="MacBook Air"
        subhead="Lean. Mean. M3 machine."
        callout="From $999 or $83.25/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/macbook-air"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        imageSrc="https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg"
        imageAlt="MacBook Air"
      />

      {/* Hero Showcase 2: MacBook Pro */}
      <HeroUnit
        id="pro"
        theme="light"
        headline="MacBook Pro"
        subhead="Built for Apple Intelligence. Mind-blowing speed."
        callout="From $1,599 or $133.25/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/macbook-pro"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        imageSrc="https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg"
        imageAlt="MacBook Pro"
      />

      {/* Explore the Lineup Section with Segmented Tabs, Color Dots & Tech Specs */}
      <ProductLineupFilter
        title="Explore all Mac models."
        subtitle="Supercharged by Apple silicon. Which Mac is right for you?"
        tabs={[
          { id: "all", label: "All products" },
          { id: "laptops", label: "Laptops" },
          { id: "desktops", label: "Desktops" },
        ]}
        products={MAC_MODELS}
      />

      {/* Get to know Mac Feature Carousel */}
      <FeatureCarousel
        title="Get to know Mac."
        subtitle="Discover why millions of creators, developers, and students choose Mac."
        items={MAC_FEATURE_CARDS}
      />

      {/* Why Apple is the best place to buy Mac */}
      <WhyAppleSection productName="Mac" />

      {/* Mac Essentials Accessories Grid */}
      <EssentialsSection
        title="Mac essentials."
        subtitle="Power your workspace with Apple accessories."
        items={MAC_ESSENTIALS}
      />
    </div>
  );
}
