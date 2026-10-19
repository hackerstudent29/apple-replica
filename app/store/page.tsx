"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CreditCard, Sparkles, ShieldCheck, Truck, Headphones, Check } from "lucide-react";
import SwiftUIModal from "@/components/SwiftUIModal";
import { useCart } from "@/context/CartContext";

const STORE_CATEGORIES = [
  {
    name: "Mac",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mba_8e00b3bdd_2x.png",
    href: "/mac",
  },
  {
    name: "iPhone",
    image: "https://www.apple.com/in/iphone/home/images/overview/chapternav/iphone_18_pro__dj48ysc0yagm_large.png",
    href: "/iphone",
  },
  {
    name: "iPad",
    image: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_pro_bd732ab83_2x.png",
    href: "/ipad",
  },
  {
    name: "Apple Watch",
    image: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_s12_3ffa9e07a_2x.png",
    href: "/watch",
  },
  {
    name: "AirPods",
    image: "https://www.apple.com/v/airpods/af/images/overview/hero__gb4d3fd8jnu6_large.jpg",
    href: "/airpods",
  },
  {
    name: "Accessories",
    image: "https://www.apple.com/v/iphone/home/ck/images/overview/chapternav/accessories__ghgqo4vsxcqe_large.png",
    href: "/accessories",
  },
  {
    name: "Apple TV 4K",
    image: "https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg",
    href: "/tv-home",
  },
];

const STORE_PRODUCTS = [
  {
    id: "iphone-18-pro",
    title: "iPhone 18 Pro",
    subtitle: "The ultimate iPhone. Built for Apple Intelligence.",
    price: "From ₹119900.00*",
    monthlyEmi: "From ₹9992/mo.",
    badge: "New",
    image: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/promo_iphone_18_pro__9nn5m4mt2bmy_large.jpg",
    href: "/iphone",
  },
  {
    id: "iphone-duo",
    title: "iPhone Duo",
    subtitle: "Two screens. Infinite possibilities.",
    price: "From ₹129900.00*",
    monthlyEmi: "From ₹10825/mo.",
    badge: "New",
    image: "https://www.apple.com/in/homepage/images/iphone-duo/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large.jpg",
    href: "/iphone",
  },
  {
    id: "apple-watch-12",
    title: "Apple Watch Series 12",
    subtitle: "Thinscredible. Advanced health insights.",
    price: "From ₹46900.00*",
    monthlyEmi: "From ₹3908/mo.",
    badge: "New",
    image: "https://www.apple.com/assets-www/en_IN/watch/01_product_tile/large/s12_384367505_2x.png",
    href: "/watch",
  },
  {
    id: "macbook-air",
    title: "MacBook Air 13” and 15”",
    subtitle: "Lean. Mean. M3 machine.",
    price: "From ₹99900.00*",
    monthlyEmi: "From ₹8325/mo.",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
    href: "/mac",
  },
  {
    id: "ipad-pro",
    title: "iPad Pro",
    subtitle: "Thinpossible. Tandem OLED with M4.",
    price: "From ₹99900.00*",
    monthlyEmi: "From ₹8325/mo.",
    badge: "New",
    image: "https://www.apple.com/assets-www/en_WW/ipad/03_product_tile/large/ipad_pro_30558c612_2x.png",
    href: "/ipad",
  },
  {
    id: "airpods-4",
    title: "AirPods 4 with Active Noise Cancellation",
    subtitle: "Iconic. Now supersonic.",
    price: "From ₹17900.00*",
    monthlyEmi: "From ₹1492/mo.",
    badge: "New",
    image: "https://www.apple.com/v/airpods/af/images/overview/hero__gb4d3fd8jnu6_large.jpg",
    href: "/airpods",
  },
];

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof STORE_PRODUCTS)[0] | null>(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleBuy = (prod: (typeof STORE_PRODUCTS)[0]) => {
    setSelectedProduct(prod);
    setAdded(false);
  };

  return (
    <div className="w-full bg-[#f5f5f7] py-12 px-4 sm:px-8 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        {/* Giant Store Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#1d1d1f] tracking-tight leading-none">
              Store. <span className="text-[#86868b]">The best way to buy the products you love.</span>
            </h1>
          </div>
          <div className="text-sm text-[#86868b] flex items-center space-x-3 shrink-0">
            <div className="flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-[#0071e3]" />
              <div>
                <p className="font-medium text-[#1d1d1f]">Need shopping help?</p>
                <a href="#help" className="text-[#0071e3] hover:underline">
                  Ask a Specialist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category Icons Carousel with Real Apple CDN Visuals */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-8 mb-12">
          {STORE_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center group shrink-0 w-28 text-center"
            >
              <div className="w-24 h-24 rounded-3xl bg-white shadow-sm border border-black/5 flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[13px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mt-3">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* The Latest Section */}
        <div className="mb-16">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
            The latest. <span className="text-[#86868b]">Take a look at what’s new right now.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-[28px] p-7 shadow-sm border border-black/5 flex flex-col justify-between hover:shadow-xl transition-shadow group"
              >
                <div>
                  <div className="h-5 mb-1">
                    {prod.badge && (
                      <span className="text-[11px] font-semibold text-[#b64400] uppercase tracking-wider">
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight">{prod.title}</h3>
                  <p className="text-[14px] text-[#86868b] mt-1">{prod.subtitle}</p>
                  <div className="mt-3">
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">{prod.price}</p>
                    <p className="text-[12px] text-[#86868b]">or {prod.monthlyEmi} with No Cost EMI</p>
                  </div>
                </div>

                <div className="h-52 w-full flex items-center justify-center my-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <Link
                    href={prod.href}
                    className="text-[14px] font-medium text-[#0071e3] hover:underline flex items-center"
                  >
                    View details <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <button
                    onClick={() => handleBuy(prod)}
                    className="h-9 px-5 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Apple Difference Grid */}
        <div className="mb-14">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
            The Apple difference. <span className="text-[#86868b]">Even more reasons to shop with us.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
              <CreditCard className="w-8 h-8 text-[#0071e3]" />
              <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Instant Cashback & No Cost EMI</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Save up to ₹10,000 instant cashback with eligible cards. Plus up to 12 months No Cost EMI on all flagship devices.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
              <Truck className="w-8 h-8 text-[#34c759]" />
              <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Free delivery and returns</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Enjoy free delivery on all orders, with secure doorstep delivery across pin codes in India.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border border-black/5 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#f56300]" />
              <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Apple Trade In</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Trade in your current device for instant credit toward your new Apple product. Free doorstep valuation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SwiftUI Buy Modal */}
      <SwiftUIModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct ? `Buy ${selectedProduct.title}` : ""}
        headline={selectedProduct?.price}
        subhead={selectedProduct?.subtitle}
      >
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center space-x-4">
            {selectedProduct && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-contain shrink-0"
              />
            )}
            <div>
              <p className="text-base font-semibold text-[#1d1d1f]">
                {selectedProduct?.title}
              </p>
              <p className="text-xs text-[#86868b]">Free contactless delivery</p>
              <p className="text-sm font-semibold text-[#0071e3] mt-1">
                {selectedProduct?.price}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
              Available Promotions
            </label>
            <div className="p-3.5 rounded-xl border border-black/10 text-xs text-[#1d1d1f] flex justify-between items-center">
              <span>Up to 12 months No Cost EMI</span>
              <span className="font-semibold text-[#0071e3]">Eligible</span>
            </div>
            <div className="p-3.5 rounded-xl border border-black/10 text-xs text-[#1d1d1f] flex justify-between items-center">
              <span>Instant Cashback up to ₹10,000</span>
              <span className="font-semibold text-[#34c759]">Active</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (selectedProduct) {
                const numericPrice = parseInt(selectedProduct.price.replace(/[^0-9]/g, ""), 10) || 0;
                addToCart({
                  id: selectedProduct.id,
                  name: selectedProduct.title,
                  price: selectedProduct.price,
                  priceNumber: numericPrice,
                  image: selectedProduct.image,
                  specs: selectedProduct.subtitle,
                });
                setAdded(true);
                setTimeout(() => {
                  setSelectedProduct(null);
                  setAdded(false);
                }, 800);
              }
            }}
            className="w-full h-11 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors flex items-center justify-center space-x-2"
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <span>Add to Bag</span>
            )}
          </button>
        </div>
      </SwiftUIModal>
    </div>
  );
}
