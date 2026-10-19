"use client";

import ChapterNav, { ChapterItem } from "@/components/ChapterNav";
import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import ProductLineupFilter, { ProductModel } from "@/components/ProductLineupFilter";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import EssentialsSection, { EssentialItem } from "@/components/EssentialsSection";
import { Cpu, Sparkles, PenTool, Monitor, Battery } from "lucide-react";

const IPAD_CHAPTERS: ChapterItem[] = [
  {
    id: "pro",
    name: "iPad Pro",
    href: "#pro",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_pro_bd732ab83_2x.png",
  },
  {
    id: "air",
    name: "iPad Air",
    href: "#air",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_air_1ebbfa37b_2x.png",
  },
  {
    id: "ipad",
    name: "iPad",
    href: "#ipad",
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_473e5c831_2x.png",
  },
  {
    id: "mini",
    name: "iPad mini",
    href: "#mini",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_mini_f62883aa9_2x.png",
  },
  {
    id: "compare",
    name: "Compare",
    href: "#compare",
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/compare_51cfd77c0_2x.png",
  },
  {
    id: "pencil",
    name: "Apple Pencil",
    href: "/accessories",
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/apple_pencil_78eb83b97_2x.png",
  },
  {
    id: "keyboards",
    name: "Keyboards",
    href: "/accessories",
    imgSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/keyboards_f5cef0366_2x.png",
  },
];

const IPAD_MODELS: ProductModel[] = [
  {
    id: "ipad-pro",
    name: "iPad Pro",
    category: "pro",
    tagline: "The ultimate iPad experience. Impossibly thin.",
    price: "From $999",
    monthlyEmi: "or $83.25/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_pro_30558c612_2x.png",
    colors: [
      { name: "Space Black", hex: "#232426", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_pro_30558c612_2x.png" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_pro_30558c612_2x.png" },
    ],
    specs: [
      { label: "Chip", value: "Apple M4 chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "Ultra Retina XDR display with tandem OLED", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Accessories", value: "Apple Pencil Pro & Magic Keyboard", icon: <PenTool className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Cameras", value: "12MP Wide back, Center Stage front", icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    category: "air",
    tagline: "Fresh Air. Now in two sizes, supercharged by M2.",
    price: "From $599",
    monthlyEmi: "or $49.91/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png",
    colors: [
      { name: "Space Gray", hex: "#7d7e80", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png" },
      { name: "Starlight", hex: "#f0e5d3", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png" },
      { name: "Purple", hex: "#d5d1df", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png" },
      { name: "Blue", hex: "#cad5e2", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png" },
    ],
    specs: [
      { label: "Chip", value: "Apple M2 chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "11” or 13” Liquid Retina display", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Accessories", value: "Apple Pencil Pro & Magic Keyboard", icon: <PenTool className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Battery", value: "All-day 10 hours battery life", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
  {
    id: "ipad-base",
    name: "iPad (10th gen)",
    category: "standard",
    tagline: "Loveable. Drawable. Magical. All-screen design.",
    price: "From $349",
    monthlyEmi: "or $29.08/mo. for 12 mo.*",
    defaultImage: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_7fc90e139_2x.png",
    colors: [
      { name: "Blue", hex: "#466e99", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_7fc90e139_2x.png" },
      { name: "Pink", hex: "#d8859e", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_7fc90e139_2x.png" },
      { name: "Yellow", hex: "#f7d26d", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_7fc90e139_2x.png" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_7fc90e139_2x.png" },
    ],
    specs: [
      { label: "Chip", value: "A14 Bionic chip", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "10.9” Liquid Retina display", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Accessories", value: "Apple Pencil (USB-C) & Magic Keyboard Folio", icon: <PenTool className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Camera", value: "Landscape 12MP Ultra Wide with Center Stage", icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "ipad-mini",
    name: "iPad mini",
    category: "standard",
    tagline: "Mega power. Mini size. Ultra-portable powerhouse.",
    price: "From $499",
    monthlyEmi: "or $41.58/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_mini_826e3c489_2x.png",
    colors: [
      { name: "Space Gray", hex: "#7d7e80", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_mini_826e3c489_2x.png" },
      { name: "Starlight", hex: "#f0e5d3", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_mini_826e3c489_2x.png" },
      { name: "Purple", hex: "#d5d1df", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_mini_826e3c489_2x.png" },
      { name: "Blue", hex: "#cad5e2", image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_mini_826e3c489_2x.png" },
    ],
    specs: [
      { label: "Chip", value: "A17 Pro chip with Apple Intelligence", icon: <Cpu className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Display", value: "8.3” Liquid Retina display", icon: <Monitor className="w-3.5 h-3.5" /> },
      { label: "Accessories", value: "Apple Pencil Pro supported", icon: <PenTool className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Wireless", value: "Wi-Fi 6E and superfast 5G cellular", icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
];

const IPAD_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "ipados",
    category: "iPadOS Experience",
    title: "Touch, write, and multitask with ease.",
    subtitle: "Built specifically for a large Multi-Touch canvas.",
    description:
      "iPadOS empowers you to run multiple apps at once, write in any text field with Scribble, and navigate seamlessly using touch, the Apple Pencil, or a trackpad.",
    fullContent:
      "Stage Manager lets you resize windows and overlap them effortlessly, creating a flexible workspace that mirrors a full desktop setup.",
    imageSrc: "https://www.apple.com/assets-www/en_IN/ipad/01_feature_card/large/fc_ipados_fa6384cb7_2x.jpg",
    theme: "light",
  },
  {
    id: "intelligence",
    category: "Apple Intelligence",
    title: "Personal, private, powerful AI.",
    subtitle: "Smarter writing and creative tools.",
    description:
      "Apple Intelligence brings breakthrough capabilities to iPad. Transform your sketches into refined images with Image Wand, summarise lecture notes instantly, and remove unwanted objects from photos.",
    fullContent:
      "Groundbreaking on-device processing and Private Cloud Compute ensure your personal notes and sketches remain strictly yours.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/ipad/feature_card/large/fc_apple_intelligence_8a1f37017_2x.jpg",
    theme: "light",
  },
  {
    id: "productivity",
    category: "Productivity",
    title: "Your workspace is wherever you are.",
    subtitle: "Lightweight mobility meets desktop-level power.",
    description:
      "Attach a Magic Keyboard with a built-in trackpad and haptic feedback. iPad gives you the freedom to compose documents, edit 4K timelines in Final Cut Pro, and compile code in Swift Playgrounds on the go.",
    imageSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_feature_card/large/fc_productivity_6d4820e17_2x.jpg",
    theme: "light",
  },
  {
    id: "pencil",
    category: "Creativity & Apple Pencil",
    title: "Draw, sketch, and paint naturally.",
    subtitle: "Apple Pencil Pro delivers magic in your fingertips.",
    description:
      "Squeeze Apple Pencil Pro to bring up a tool palette, rotate the barrel for precise brush orientation, and feel a gentle haptic pulse confirming your actions. The most responsive digital drawing experience in the world.",
    imageSrc: "https://www.apple.com/assets-www/en_IN/ipad/feature_card/large/fc_pencil_1b1a59ae1_2x.jpg",
    theme: "light",
  },
];

const IPAD_ESSENTIALS: EssentialItem[] = [
  {
    id: "pencil-pro",
    name: "Apple Pencil Pro",
    category: "Stylus",
    price: "$129.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/apple_pencil_78eb83b97_2x.png",
    href: "/accessories",
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard for iPad Pro (13-inch)",
    category: "Keyboards",
    price: "$299.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/keyboards_f5cef0366_2x.png",
    href: "/accessories",
  },
  {
    id: "smart-folio",
    name: "Smart Folio for iPad Air",
    category: "Cases & Protection",
    price: "$79.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png",
    href: "/accessories",
  },
];

export default function IPadPage() {
  return (
    <div className="w-full bg-white">
      {/* Chapter Nav Strip with Real Apple 2x PNG Icons */}
      <ChapterNav items={IPAD_CHAPTERS} />

      {/* Top Trade In Ribbon */}
      <div className="bg-[#f5f5f7] py-3 text-center text-[12px] sm:text-[14px] text-[#1d1d1f] border-b border-black/5">
        Get $180–$580 in credit when you trade in an iPad.{" "}
        <a href="/shop/trade-in" className="text-[#0071e3] hover:underline font-medium">
          See your trade-in value &gt;
        </a>
      </div>

      {/* Hero Showcase 1: iPad Pro */}
      <HeroUnit
        id="pro"
        theme="light"
        headline="iPad Pro"
        subhead="Thinpossible. Ultra Retina XDR display with tandem OLED and M4."
        callout="From $999 or $83.25/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/ipad-pro"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        imageSrc="https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_pro_30558c612_2x.png"
        imageAlt="iPad Pro"
      />

      {/* Hero Showcase 2: iPad Air */}
      <HeroUnit
        id="air"
        theme="light"
        headline="iPad Air"
        subhead="Fresh Air. Now in two sizes, supercharged by M2."
        callout="From $599 or $49.91/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/ipad-air"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        logoSrc="https://www.apple.com/v/home/images/logos/ipad-air-m4/a/promo_logo_ipad_air__dqdj4ni03quu_large.png"
        imageSrc="https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_air_ca918354e_2x.png"
        imageAlt="iPad Air"
      />

      {/* Explore the Lineup Section with Segmented Tabs, Color Dots & Tech Specs */}
      <ProductLineupFilter
        title="Explore the iPad family."
        subtitle="Versatile, portable, and extraordinarily powerful."
        tabs={[
          { id: "all", label: "All models" },
          { id: "pro", label: "iPad Pro" },
          { id: "air", label: "iPad Air" },
          { id: "standard", label: "iPad & mini" },
        ]}
        products={IPAD_MODELS}
      />

      {/* Get to know iPad Feature Carousel */}
      <FeatureCarousel
        title="Get to know iPad."
        subtitle="Endless versatility for whatever you love to do."
        items={IPAD_FEATURE_CARDS}
      />

      {/* Why Apple is the best place to buy iPad */}
      <WhyAppleSection productName="iPad" />

      {/* iPad Essentials Accessories Grid */}
      <EssentialsSection
        title="iPad essentials."
        subtitle="Supercharge your productivity and creativity with Apple Pencil and Magic Keyboard."
        items={IPAD_ESSENTIALS}
      />
    </div>
  );
}
