"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, Battery, Camera, Smartphone, Check, ChevronRight } from "lucide-react";

interface ModelSpec {
  name: string;
  tagline: string;
  startingPrice: string;
  imageSrc: string;
  screen: string;
  chip: string;
  camera: string;
  battery: string;
  materials: string;
  colors: string[];
}

const MODELS: ModelSpec[] = [
  {
    name: "iPhone Duo",
    tagline: "The revolutionary foldable dual-screen iPhone.",
    startingPrice: "$1,499",
    imageSrc: "https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large_2x.jpg",
    screen: "Dual 6.3” & 7.9” Super Retina XDR with ProMotion",
    chip: "A19 Pro Bionic with 6-core GPU",
    camera: "Quad 48MP Pro Fusion (Macro, 0.5x, 1x, 2x, 5x, 10x)",
    battery: "Up to 30 hours video playback",
    materials: "Aerospace Titanium & Ceramic Shield",
    colors: ["#f5f5f7", "#1d1d1f"],
  },
  {
    name: "iPhone 18 Pro",
    tagline: "The ultimate pro iPhone with Camera Control.",
    startingPrice: "$999",
    imageSrc: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg",
    screen: "6.3” or 6.9” Super Retina XDR with ProMotion",
    chip: "A19 Pro chip with 6-core GPU",
    camera: "48MP Pro Fusion System with 5x Telephoto",
    battery: "Up to 33 hours video playback",
    materials: "Grade 5 Titanium & textured matte glass",
    colors: ["#501e27", "#9a958e", "#e3e4e5", "#28292b"],
  },
  {
    name: "iPhone 17",
    tagline: "Powerful performance in four vibrant colors.",
    startingPrice: "$799",
    imageSrc: "https://www.apple.com/v/homepage/images/carriers/a/promo_carriers__bkbchi56n5qq_large.jpg",
    screen: "6.1” or 6.7” Super Retina XDR display",
    chip: "A18 chip with 5-core GPU",
    camera: "Advanced dual-camera system (48MP Fusion, 12MP Ultra Wide)",
    battery: "Up to 27 hours video playback",
    materials: "Aluminum with color-infused back glass",
    colors: ["#bfb2c8", "#a2c4c9", "#eed971", "#28292b"],
  },
];

export default function CompareIPhonePage() {
  return (
    <div className="w-full bg-white text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight leading-[1.08]">
            Compare iPhone models.
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-3">
            Get help choosing the right iPhone for your life and workflow.
          </p>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {MODELS.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4">
              <div className="h-[260px] flex items-center justify-center mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.imageSrc} alt={m.name} className="max-h-full max-w-full object-contain" />
              </div>

              {/* Swatches */}
              <div className="flex gap-2 mb-4">
                {m.colors.map((c) => (
                  <span
                    key={c}
                    className="w-3.5 h-3.5 rounded-full border border-black/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <h2 className="text-[26px] font-semibold tracking-tight">{m.name}</h2>
              <p className="text-[14px] text-[#6e6e73] mt-1 h-10">{m.tagline}</p>
              <p className="text-[17px] font-medium mt-2">From {m.startingPrice}</p>

              <Link
                href={`/${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="mt-4 bg-[#0071e3] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
              >
                Learn more
              </Link>

              {/* Specs Breakdown */}
              <div className="w-full mt-12 space-y-8 text-left border-t border-black/10 pt-8">
                <div>
                  <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                    Display
                  </h4>
                  <p className="text-[15px] font-medium">{m.screen}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                    Chip
                  </h4>
                  <p className="text-[15px] font-medium">{m.chip}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                    Camera
                  </h4>
                  <p className="text-[15px] font-medium">{m.camera}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                    Battery Life
                  </h4>
                  <p className="text-[15px] font-medium">{m.battery}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                    Materials
                  </h4>
                  <p className="text-[15px] font-medium">{m.materials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
