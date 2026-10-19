"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface EssentialItem {
  id: string;
  name: string;
  category: string;
  price: string;
  imageSrc: string;
  href: string;
}

interface EssentialsSectionProps {
  title: string;
  subtitle?: string;
  items: EssentialItem[];
}

export default function EssentialsSection({
  title,
  subtitle,
  items,
}: EssentialsSectionProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[17px] sm:text-[19px] text-[#86868b] mt-2 font-normal">
                {subtitle}
              </p>
            )}
          </div>
          <Link
            href="/accessories"
            className="text-[14px] font-medium text-[#0071e3] hover:underline inline-flex items-center mt-3 sm:mt-0"
          >
            Shop all accessories <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-[#f5f5f7] rounded-[24px] p-6 flex flex-col justify-between group border border-black/5 hover:shadow-lg transition-all"
            >
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#86868b]">
                  {item.category}
                </span>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mt-1 group-hover:text-[#0071e3] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[14px] font-medium text-[#1d1d1f] mt-2">
                  {item.price}
                </p>
              </div>

              <div className="h-56 w-full flex items-center justify-center my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <span className="text-xs font-semibold text-[#0071e3] group-hover:underline flex items-center">
                  Buy <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </span>
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-xs text-[#1d1d1f] group-hover:bg-[#0071e3] group-hover:text-white transition-colors">
                  +
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
