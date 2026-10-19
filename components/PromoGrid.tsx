"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SwiftUIModal from "./SwiftUIModal";
import { useCart } from "@/context/CartContext";

interface PromoCardData {
  id: string;
  theme: "light" | "dark";
  headline: string;
  subhead: string;
  callout?: string;
  logoSrc?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: string;
  secondaryCta?: string;
  href?: string;
  buyHref?: string;
}

const PROMOS: PromoCardData[] = [
  {
    id: "apple-upgrade",
    theme: "light",
    headline: "Apple Upgrade",
    subhead: "Love it. Lease it. Upgrade it.¹",
    logoSrc:
      "https://www.apple.com/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem_large.png",
    imageSrc:
      "https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_large.jpg",
    imageAlt: "iPhone 18 Pro silhouette fans out in spectral color waves",
    primaryCta: "Learn more",
    href: "/shop/apple-upgrade",
  },
  {
    id: "apple-homeview",
    theme: "light",
    headline: "Apple HomeView",
    subhead: "Designed for life at home.",
    callout: "Available starting 11.13",
    logoSrc:
      "https://www.apple.com/v/homepage/images/logos/apple-homeview/a/promo_logo_apple_homeview__fgteydil04uy_large.png",
    imageSrc:
      "https://www.apple.com/v/homepage/images/apple-homeview/a/promo_apple_homeview_animated_preorder__ekx0z2j7deeu_large.jpg",
    imageAlt: "Multiple Apple HomeView devices in colorful assortment",
    primaryCta: "Learn more",
    secondaryCta: "Pre-order",
    href: "/apple-homeview",
    buyHref: "/store",
  },
  {
    id: "watch-series-12",
    theme: "dark",
    headline: "Apple Watch Series 12",
    subhead: "The most accurate heart rate sensing in a wearable.²",
    logoSrc:
      "https://www.apple.com/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq_large.png",
    imageSrc:
      "https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
    imageAlt: "Two Apple Watch Series 12 devices in dark bronze aluminum case with sensor",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    href: "/apple-watch-series-12",
    buyHref: "/store",
  },
  {
    id: "watch-ultra-4",
    theme: "dark",
    headline: "Apple Watch Ultra 4",
    subhead: "A battery you can’t outrun.",
    logoSrc:
      "https://www.apple.com/v/homepage/images/logos/apple-watch-ultra-4/a/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq_large.png",
    imageSrc:
      "https://www.apple.com/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4__e4r3qertak2u_large.jpg",
    imageAlt: "Apple Watch Ultra 4 titanium case with Ocean Band",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    href: "/apple-watch-ultra-4",
    buyHref: "/store",
  },
  {
    id: "ipad-air",
    theme: "light",
    headline: "iPad Air",
    subhead: "Now supercharged by M4.",
    logoSrc:
      "https://www.apple.com/v/homepage/images/logos/ipad-air-m4/a/promo_logo_ipad_air__dqdj4ni03quu_large.png",
    imageSrc:
      "https://www.apple.com/v/homepage/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
    imageAlt: "iPad Air M4 floating models in blue and space gray",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    href: "/ipad-air",
    buyHref: "/store",
  },
  {
    id: "carriers",
    theme: "light",
    headline: "Incredible carrier deals at Apple",
    subhead: "Explore deals that accept eligible trade-in devices in any condition.³",
    imageSrc:
      "https://www.apple.com/v/homepage/images/carriers/a/promo_carriers__bkbchi56n5qq_large.jpg",
    imageAlt: "Assorted iPhone models with carrier offers",
    primaryCta: "Find your deal",
    href: "/shop/trade-in",
  },
];

export default function PromoGrid() {
  const [selectedPromo, setSelectedPromo] = useState<PromoCardData | null>(null);
  const { addToCart } = useCart();

  return (
    <section className="w-full px-3 sm:px-3.5 my-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1400px] mx-auto">
        {PROMOS.map((promo) => {
          const isDark = promo.theme === "dark";
          return (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group cursor-pointer h-[490px] sm:h-[580px] flex flex-col justify-between ${
                isDark ? "bg-[#000000] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
              }`}
            >
              {/* Copy Container */}
              <div className="relative z-10 pt-10 sm:pt-12 px-6 sm:px-8 text-center flex flex-col items-center">
                {promo.logoSrc ? (
                  <div className="mb-2 h-7 sm:h-9 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={promo.logoSrc}
                      alt={promo.headline}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                ) : (
                  <h3 className="text-[26px] sm:text-[34px] font-semibold tracking-[-0.015em] leading-[1.12]">
                    {promo.headline}
                  </h3>
                )}
                <p className="text-[15px] sm:text-[18px] text-[#86868b] mt-1.5 max-w-[340px] leading-[1.3] font-normal">
                  {promo.subhead}
                </p>
                {promo.callout && (
                  <p className="text-[13px] sm:text-[14px] text-[#bf4800] mt-1 font-medium">
                    {promo.callout}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex items-center gap-3 mt-4">
                  {promo.primaryCta && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPromo(promo);
                      }}
                      className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] sm:text-[14px] px-4 py-1.5 rounded-full font-normal tracking-[-0.01em] transition-all duration-200 active:scale-95"
                    >
                      {promo.primaryCta}
                    </button>
                  )}
                  {promo.secondaryCta && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: promo.id,
                          name: promo.headline,
                          price: "$999",
                          image: promo.imageSrc,
                          specs: "Configured to standard spec",
                        });
                      }}
                      className={`text-[13px] sm:text-[14px] px-4 py-1.5 rounded-full font-normal border transition-all duration-200 active:scale-95 ${
                        isDark
                          ? "border-[#424245] text-white hover:bg-white hover:text-black"
                          : "border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
                      }`}
                    >
                      {promo.secondaryCta}
                    </button>
                  )}
                </div>
              </div>

              {/* Image Container with subtle scale on hover */}
              <div className="relative w-full h-[300px] sm:h-[380px] mt-auto overflow-hidden flex items-end justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={promo.imageSrc}
                  alt={promo.imageAlt}
                  className="w-full h-full object-cover sm:object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SwiftUI Bottom Sheet Modal */}
      <SwiftUIModal
        isOpen={!!selectedPromo}
        onClose={() => setSelectedPromo(null)}
        title={selectedPromo?.headline || "Product Details"}
        category="Apple Official"
        imageSrc={selectedPromo?.imageSrc}
        description={selectedPromo?.subhead}
        features={[
          "Official Apple Hardware & Software engineering",
          "Engineered with 100% recycled aerospace-grade materials",
          "Seamless continuity across Mac, iPhone, and iPad",
          "Complimentary express shipping and 14-day hassle-free returns",
        ]}
        price="$799.00 or $33.29/mo. for 24 mo."
        onAction={() => {
          if (selectedPromo) {
            addToCart({
              id: selectedPromo.id,
              name: selectedPromo.headline,
              price: "$799.00",
              image: selectedPromo.imageSrc,
              specs: "Standard configuration",
            });
            setSelectedPromo(null);
          }
        }}
        actionText="Add to Bag"
      />
    </section>
  );
}
