"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Tv, Gamepad2, Activity, Newspaper, Cloud, CreditCard, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: "apple-tv-plus",
    name: "Apple TV+",
    tagline: "Get 3 months of Apple TV+ free when you buy an Apple device.",
    description: "Stream Apple Original series and films across all your screens.",
    icon: <Tv className="w-8 h-8 text-[#0071e3]" />,
    link: "/entertainment",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    tagline: "Over 100 million songs and Spatial Audio with Dolby Atmos.",
    description: "Listen online or offline. Zero ads. Follow lyrics in real time.",
    icon: <Music className="w-8 h-8 text-[#fa2d48]" />,
    link: "/apple-music",
  },
  {
    id: "apple-arcade",
    name: "Apple Arcade",
    tagline: "Unlimited access to 200+ incredibly fun games.",
    description: "No ads. No in-app purchases. Play across iPhone, iPad, Mac, and Apple TV.",
    icon: <Gamepad2 className="w-8 h-8 text-[#f56300]" />,
    link: "/entertainment",
  },
  {
    id: "apple-fitness",
    name: "Apple Fitness+",
    tagline: "From HIIT to Meditation, stay active anytime, anywhere.",
    description: "Personalized metrics from your Apple Watch live on screen.",
    icon: <Activity className="w-8 h-8 text-[#a2d829]" />,
    link: "/entertainment",
  },
  {
    id: "apple-news",
    name: "Apple News+",
    tagline: "Top stories from the world’s most trusted publications.",
    description: "Full access to hundreds of premium magazines and newspapers.",
    icon: <Newspaper className="w-8 h-8 text-[#ff2d55]" />,
    link: "/entertainment",
  },
  {
    id: "icloud-plus",
    name: "iCloud+",
    tagline: "All your memories and files safely backed up and synced.",
    description: "Includes iCloud Private Relay, Hide My Email, and HomeKit Secure Video.",
    icon: <Cloud className="w-8 h-8 text-[#0071e3]" />,
    link: "/entertainment",
  },
  {
    id: "apple-card",
    name: "Apple Card",
    tagline: "Get up to 3% Daily Cash back with zero fees.",
    description: "Built for iPhone with total financial privacy.",
    icon: <CreditCard className="w-8 h-8 text-[#5856d6]" />,
    link: "/apple-card",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#bf4800] bg-[#bf4800]/10 px-3 py-1 rounded-full">
            Apple Entertainment & Services
          </span>
          <h1 className="text-[44px] sm:text-[60px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
            One subscription. Countless ways to be entertained.
          </h1>
          <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal">
            Bundle up to six Apple services with Apple One and enjoy music, TV, games, fitness, news, and cloud storage for less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f]">{s.name}</h3>
                <p className="text-[14px] font-medium text-[#86868b] mt-1">{s.tagline}</p>
                <p className="text-[14px] text-[#6e6e73] mt-3 leading-relaxed">{s.description}</p>
              </div>
              <Link
                href={s.link}
                className="mt-6 text-[#0071e3] text-sm font-medium hover:underline inline-flex items-center"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
