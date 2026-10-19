"use client";

import Link from "next/link";
import { Cpu, Battery, Monitor, HardDrive } from "lucide-react";

interface MacCompareModel {
  name: string;
  tagline: string;
  price: string;
  image: string;
  chip: string;
  display: string;
  memory: string;
  battery: string;
  weight: string;
}

const MACS: MacCompareModel[] = [
  {
    name: "MacBook Air",
    tagline: "Strikingly thin and fast for everyday life.",
    price: "From $1,099",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
    chip: "Apple M3 chip",
    display: "13.6” or 15.3” Liquid Retina",
    memory: "Up to 24GB unified memory",
    battery: "Up to 18 hours battery life",
    weight: "2.7 lb. (1.24 kg)",
  },
  {
    name: "MacBook Pro",
    tagline: "The ultimate pro laptop supercharged by M4.",
    price: "From $1,599",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg",
    chip: "M4, M4 Pro, or M4 Max",
    display: "14.2” or 16.2” Liquid Retina XDR",
    memory: "Up to 128GB unified memory",
    battery: "Up to 24 hours battery life",
    weight: "3.4 lb. (1.55 kg)",
  },
  {
    name: "iMac",
    tagline: "The all-in-one desktop in seven colors.",
    price: "From $1,299",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_c865fe2c9_2x.jpg",
    chip: "Apple M4 chip",
    display: "24” 4.5K Retina display",
    memory: "Up to 32GB unified memory",
    battery: "Plugged into wall power",
    weight: "9.75 lb. (4.42 kg)",
  },
  {
    name: "Mac mini",
    tagline: "Gigantic power in a five-inch footprint.",
    price: "From $599",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_mini_329a1bcf3_2x.jpg",
    chip: "Apple M4 or M4 Pro",
    display: "Supports up to three external 6K displays",
    memory: "Up to 64GB unified memory",
    battery: "Plugged into wall power",
    weight: "1.5 lb. (0.67 kg)",
  },
];

export default function CompareMacPage() {
  return (
    <div className="w-full bg-white text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight leading-[1.08]">
            Compare Mac models.
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-3">
            Find the perfect Mac for your studio, classroom, or creative desk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MACS.map((m) => (
            <div key={m.name} className="p-6 rounded-3xl bg-[#f5f5f7] flex flex-col justify-between">
              <div>
                <div className="h-[200px] flex items-center justify-center mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-[22px] font-semibold">{m.name}</h3>
                <p className="text-xs text-[#6e6e73] mt-1 h-8">{m.tagline}</p>
                <p className="text-base font-semibold mt-2">{m.price}</p>
              </div>

              <div className="mt-8 space-y-4 border-t border-black/10 pt-4 text-xs">
                <div>
                  <span className="font-semibold text-[#86868b] block mb-0.5">Chip</span>
                  <span className="text-[#1d1d1f] font-medium text-sm">{m.chip}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#86868b] block mb-0.5">Display</span>
                  <span className="text-[#1d1d1f] font-medium text-sm">{m.display}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#86868b] block mb-0.5">Memory</span>
                  <span className="text-[#1d1d1f] font-medium text-sm">{m.memory}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#86868b] block mb-0.5">Battery</span>
                  <span className="text-[#1d1d1f] font-medium text-sm">{m.battery}</span>
                </div>
              </div>

              <Link
                href={`/${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="mt-6 w-full text-center bg-[#0071e3] text-white py-2 rounded-full text-xs font-medium hover:bg-[#0077ed] transition-colors"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
