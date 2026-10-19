"use client";

import ChapterNav, { ChapterItem } from "@/components/ChapterNav";
import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import ProductLineupFilter, { ProductModel } from "@/components/ProductLineupFilter";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import EssentialsSection, { EssentialItem } from "@/components/EssentialsSection";
import { Heart, Battery, ShieldCheck, Activity, Compass } from "lucide-react";

const WATCH_CHAPTERS: ChapterItem[] = [
  {
    id: "series12",
    name: "Apple Watch Series 12",
    href: "#series12",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_s12_3ffa9e07a_2x.png",
  },
  {
    id: "ultra4",
    name: "Apple Watch Ultra 4",
    href: "#ultra4",
    isNew: true,
    imgSrc: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_ultra4_be5ddb7ae_2x.png",
  },
  {
    id: "se",
    name: "Apple Watch SE",
    href: "#se",
    imgSrc: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_se3_c4870d541_2x.png",
  },
  {
    id: "nike",
    name: "Apple Watch Nike",
    href: "#nike",
    imgSrc: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_nike_5b7846c76_2x.png",
  },
  {
    id: "compare",
    name: "Compare",
    href: "#compare",
    imgSrc: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_compare_8f7bef1fe_2x.png",
  },
  {
    id: "bands",
    name: "Straps",
    href: "/accessories",
    imgSrc: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_bands_58f2591cd_2x.png",
  },
];

const WATCH_MODELS: ProductModel[] = [
  {
    id: "watch-s12",
    name: "Apple Watch Series 12",
    category: "series",
    tagline: "Thinscredible. Advanced health insights with precision sensing.",
    price: "From $399",
    monthlyEmi: "or $33.25/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png",
    colors: [
      { name: "Jet Black", hex: "#1c1d1f", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png" },
      { name: "Rose Gold", hex: "#e7b4a8", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png" },
    ],
    specs: [
      { label: "Display", value: "Wide-angle OLED Always-On Retina", icon: <Activity className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Health", value: "ECG, Blood Oxygen, Sleep apnea alerts", icon: <Heart className="w-3.5 h-3.5 text-[#ff2d55]" /> },
      { label: "Battery", value: "Up to 18 hours (36h in Low Power Mode)", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Durability", value: "Water resistant 50m • Dust resistant IP6X", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "watch-ultra4",
    name: "Apple Watch Ultra 4",
    category: "ultra",
    tagline: "The ultimate sports, dive, and endurance watch.",
    price: "From $799",
    monthlyEmi: "or $66.58/mo. for 12 mo.*",
    isNew: true,
    defaultImage: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/u4_101d9df58_2x.png",
    colors: [
      { name: "Black Titanium", hex: "#222325", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/u4_101d9df58_2x.png" },
      { name: "Natural Titanium", hex: "#9a958e", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/u4_101d9df58_2x.png" },
    ],
    specs: [
      { label: "Display", value: "Up to 3,000 nits brightest display", icon: <Activity className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Outdoor", value: "Dual-frequency GPS, Siren, Depth gauge to 40m", icon: <Compass className="w-3.5 h-3.5 text-[#ff9500]" /> },
      { label: "Battery", value: "Up to 36 hours (72h in Low Power Mode)", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
      { label: "Case", value: "49mm aerospace-grade titanium case", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: "watch-se",
    name: "Apple Watch SE",
    category: "se",
    tagline: "All the essentials. Light on price. Easy to love.",
    price: "From $249",
    monthlyEmi: "or $20.75/mo. for 12 mo.*",
    defaultImage: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/se3_dd7cd14d1_2x.png",
    colors: [
      { name: "Midnight", hex: "#2e3642", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/se3_dd7cd14d1_2x.png" },
      { name: "Starlight", hex: "#f0e5d3", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/se3_dd7cd14d1_2x.png" },
      { name: "Silver", hex: "#e2e2e4", image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/se3_dd7cd14d1_2x.png" },
    ],
    specs: [
      { label: "Display", value: "Retina display up to 1,000 nits", icon: <Activity className="w-3.5 h-3.5 text-[#0071e3]" /> },
      { label: "Health", value: "High and low heart rate notifications", icon: <Heart className="w-3.5 h-3.5 text-[#ff2d55]" /> },
      { label: "Safety", value: "Crash Detection, Fall Detection, Emergency SOS", icon: <ShieldCheck className="w-3.5 h-3.5 text-[#ff9500]" /> },
      { label: "Battery", value: "Up to 18 hours battery life", icon: <Battery className="w-3.5 h-3.5 text-[#34c759]" /> },
    ],
  },
];

const WATCH_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "health",
    category: "Health Insights",
    title: "A powerful health monitor on your wrist.",
    subtitle: "Listen to your body like never before.",
    description:
      "Take an ECG anytime, measure your blood oxygen levels, and receive notifications if unusual irregular rhythms or signs of sleep apnea are detected. Keep your doctor informed with detailed health trends in the Health app.",
    imageSrc: "https://www.apple.com/in/homepage/images/apple-watch-series-12/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
    theme: "light",
  },
  {
    id: "fitness",
    category: "Fitness & Training",
    title: "Every move counts. Smash your goals.",
    subtitle: "Custom workouts and advanced training metrics.",
    description:
      "Whether running intervals, swimming laps, or cycling uphill, watchOS tracks your pace, heart rate zones, cadence, and power with pinpoint precision. Close your Activity rings every day to build healthy habits.",
    imageSrc: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/u4_101d9df58_2x.png",
    theme: "light",
  },
  {
    id: "safety",
    category: "Peace of Mind",
    title: "Help is right there when you need it.",
    subtitle: "Innovative safety sensors call for help automatically.",
    description:
      "Crash Detection and Fall Detection can recognize severe car accidents or hard falls. If you are unresponsive, Apple Watch automatically dials emergency services, relays your location, and notifies your emergency contacts.",
    imageSrc: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png",
    theme: "light",
  },
];

const WATCH_ESSENTIALS: EssentialItem[] = [
  {
    id: "sport-band",
    name: "Sport Band - Plum",
    category: "Straps",
    price: "$49.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_bands_58f2591cd_2x.png",
    href: "/accessories",
  },
  {
    id: "charger",
    name: "Apple Watch Magnetic Fast Charger (1m)",
    category: "Power",
    price: "$29.00",
    imageSrc: "https://www.apple.com/assets-www/en_WW/watch/chapternav/small/nav_accessories_1cd55830a_small_2x.png",
    href: "/accessories",
  },
  {
    id: "airpods",
    name: "AirPods 4",
    category: "Audio",
    price: "$129.00",
    imageSrc: "https://www.apple.com/v/airpods/shared/compare/i/images/compare/quicklook_placeholder__blj911n6rvg2_large.jpg",
    href: "/airpods",
  },
];

export default function WatchPage() {
  return (
    <div className="w-full bg-white">
      {/* Chapter Nav Strip with Real Apple 2x PNG Icons */}
      <ChapterNav items={WATCH_CHAPTERS} />

      {/* Top Trade In Ribbon */}
      <div className="bg-[#f5f5f7] py-3 text-center text-[12px] sm:text-[14px] text-[#1d1d1f] border-b border-black/5">
        Get up to $365 in credit when you trade in Apple Watch.{" "}
        <a href="/shop/trade-in" className="text-[#0071e3] hover:underline font-medium">
          Shop Apple Watch &gt;
        </a>
      </div>

      {/* Hero Showcase 1: Series 12 */}
      <HeroUnit
        id="series12"
        theme="light"
        headline="Apple Watch Series 12"
        subhead="The most accurate heart rate sensing in a wearable. ¹"
        callout="From $399 or $33.25/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/apple-watch-series-12"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        logoSrc="https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_large.png"
        imageSrc="https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png"
        imageAlt="Apple Watch Series 12"
      />

      {/* Hero Showcase 2: Ultra 4 */}
      <HeroUnit
        id="ultra4"
        theme="light"
        headline="Apple Watch Ultra 4"
        subhead="A battery you can’t outrun. Built for the wild."
        callout="From $799 or $66.58/mo. for 12 mo."
        primaryCtaText="Learn more"
        primaryCtaLink="/apple-watch-ultra-4"
        secondaryCtaText="Buy"
        secondaryCtaLink="/store"
        logoSrc="https://www.apple.com/v/homepage/images/logos/apple-watch-ultra-4/a/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq_large.png"
        imageSrc="https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/u4_101d9df58_2x.png"
        imageAlt="Apple Watch Ultra 4"
      />

      {/* Explore the Lineup Section with Segmented Tabs, Color Dots & Tech Specs */}
      <ProductLineupFilter
        title="Which Apple Watch is right for you?"
        subtitle="Compare designs, health sensors, battery, and durability."
        tabs={[
          { id: "all", label: "All models" },
          { id: "series", label: "Series 12" },
          { id: "ultra", label: "Ultra 4" },
          { id: "se", label: "SE" },
        ]}
        products={WATCH_MODELS}
      />

      {/* Get to know Apple Watch Feature Carousel */}
      <FeatureCarousel
        title="Get to know Apple Watch."
        subtitle="Your essential companion for a healthier, safer life."
        items={WATCH_FEATURE_CARDS}
      />

      {/* Why Apple is the best place to buy Apple Watch */}
      <WhyAppleSection productName="Apple Watch" />

      {/* Watch Essentials Accessories Grid */}
      <EssentialsSection
        title="Apple Watch essentials."
        subtitle="Make it personal. Make it pop with interchangeable straps and fast chargers."
        items={WATCH_ESSENTIALS}
      />
    </div>
  );
}
