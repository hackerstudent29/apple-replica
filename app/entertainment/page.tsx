"use client";

import TvGallery from "@/components/TvGallery";
import { Music, Play, Gamepad2, Radio, Layers, ChevronRight, Check } from "lucide-react";

const SERVICES = [
  {
    id: "tv-plus",
    name: "Apple TV+",
    tagline: "Stream award-winning Apple Originals.",
    description: "New Apple Original series and films every month. Watch on the Apple TV app across all your devices.",
    offer: "7 days free, then ₹99/mo.",
    badge: "Stream now",
    icon: <Play className="w-6 h-6 text-[#0071e3]" />,
    actionText: "Try Apple TV+ free",
    actionHref: "https://tv.apple.com",
  },
  {
    id: "music",
    name: "Apple Music",
    tagline: "Over 100 million songs in Spatial Audio.",
    description: "Listen in Dolby Atmos with dynamic head tracking. Sing along with real-time lyrics and offline downloads.",
    offer: "1 month free, then ₹99/mo.",
    badge: "Listen now",
    icon: <Music className="w-6 h-6 text-[#ff2d55]" />,
    actionText: "Try Apple Music free",
    actionHref: "https://music.apple.com",
  },
  {
    id: "arcade",
    name: "Apple Arcade",
    tagline: "Unlimited access to 200+ incredibly fun games.",
    description: "Curated collection of award-winning titles. Zero ads, zero in-app purchases, and complete family sharing.",
    offer: "1 month free, then ₹99/mo.",
    badge: "Play now",
    icon: <Gamepad2 className="w-6 h-6 text-[#ff9500]" />,
    actionText: "Try Apple Arcade free",
    actionHref: "#arcade",
  },
  {
    id: "podcasts",
    name: "Apple Podcasts",
    tagline: "Millions of shows from world-class creators.",
    description: "Discover stories that inform, inspire, and entertain. Enjoy transcripts, episode chapters, and custom playlists.",
    offer: "Free on all Apple devices.",
    badge: "Explore shows",
    icon: <Radio className="w-6 h-6 text-[#af52de]" />,
    actionText: "Open Apple Podcasts",
    actionHref: "#podcasts",
  },
];

export default function EntertainmentPage() {
  return (
    <div className="w-full bg-white">
      {/* Services Showcase Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-none mb-4">
          All your entertainment. All Apple.
        </h1>
        <p className="text-[17px] sm:text-[20px] text-[#86868b] max-w-2xl mx-auto mb-16 font-normal">
          Award-winning movies, binge-worthy series, immersive Spatial Audio, and top-tier ad-free gaming.
        </p>

        {/* Apple One Featured Banner */}
        <div className="bg-[#f5f5f7] rounded-[32px] p-8 sm:p-12 mb-16 border border-black/5 flex flex-col md:flex-row items-center justify-between text-left gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Apple One</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] tracking-tight leading-snug">
              Bundle up to four Apple services. And enjoy more for less.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#86868b] leading-relaxed">
              Apple Music, Apple TV+, Apple Arcade, and iCloud+ with 50GB storage. Plans start at ₹365/month for individual, or ₹465/month for family.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button className="h-12 px-7 rounded-full bg-[#0071e3] text-white text-[15px] font-medium hover:bg-[#0077ed] transition-colors">
              Try Apple One free
            </button>
            <a
              href="#learn-more"
              className="text-[15px] font-medium text-[#0071e3] hover:underline flex items-center"
            >
              Learn more <ChevronRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-[#f5f5f7] rounded-[28px] p-8 sm:p-10 border border-black/5 flex flex-col justify-between hover:shadow-lg transition-shadow group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                  {s.badge}
                </span>
                <h3 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight mt-1">
                  {s.name}
                </h3>
                <p className="text-[17px] font-medium text-[#1d1d1f] mt-1">
                  {s.tagline}
                </p>
                <p className="text-[14px] text-[#86868b] mt-2.5 leading-relaxed">
                  {s.description}
                </p>
                <p className="text-[13px] font-semibold text-[#1d1d1f] mt-4">
                  {s.offer}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <a
                  href={s.actionHref}
                  className="h-10 px-6 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors inline-flex items-center"
                >
                  {s.actionText}
                </a>
                <span className="text-xs text-[#86868b]">Terms apply</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Endless Apple TV+ Marquee Carousel */}
      <TvGallery />
    </div>
  );
}
