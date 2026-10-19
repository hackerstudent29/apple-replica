"use client";

import { CreditCard, RefreshCw, Truck, Sparkles, UserCheck, Shield } from "lucide-react";

interface WhyAppleItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface WhyAppleSectionProps {
  productName: string;
}

export default function WhyAppleSection({ productName }: WhyAppleSectionProps) {
  const items: WhyAppleItem[] = [
    {
      icon: <CreditCard className="w-8 h-8 text-[#0071e3]" />,
      title: "Instant cashback and No Cost EMI",
      description: `Get up to ₹10,000 instant cashback on eligible cards. Plus No Cost EMI up to 12 months on ${productName}.`,
      linkText: "Learn more",
      linkHref: "#emi",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-[#34c759]" />,
      title: "Apple Trade In",
      description: `Exchange your current smartphone, Mac, or tablet for instant credit toward your new ${productName}.`,
      linkText: "Get an estimate",
      linkHref: "#tradein",
    },
    {
      icon: <Truck className="w-8 h-8 text-[#ff9500]" />,
      title: "Free delivery and returns",
      description: "Enjoy fast, free, and secure contactless delivery directly to your doorstep in India.",
      linkText: "Check delivery dates",
      linkHref: "#delivery",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#af52de]" />,
      title: "Make it yours with free engraving",
      description: "Personalise your AirPods or Apple Pencil with a mix of emoji, names, and numbers for free.",
      linkText: "Explore options",
      linkHref: "#engraving",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#0071e3]" />,
      title: "Free online Personal Session",
      description: `From basics to pro tips, get one-on-one guidance from an Apple Specialist after you unbox your ${productName}.`,
      linkText: "Schedule a session",
      linkHref: "#session",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#5856d6]" />,
      title: "AppleCare+ coverage",
      description: "Get unlimited incident repairs, certified battery service, and priority support from Apple experts.",
      linkText: "Learn about AppleCare+",
      linkHref: "#applecare",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Why Apple is the best place to buy {productName}.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#86868b] mt-2 font-normal">
            Specialised services, dedicated financing, and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5f5f7] rounded-[24px] p-8 flex flex-col justify-between border border-black/5 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#86868b] leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {item.linkText && (
                <div className="mt-6 pt-4 border-t border-black/5">
                  <a
                    href={item.linkHref}
                    className="text-[14px] font-medium text-[#0071e3] hover:underline inline-flex items-center"
                  >
                    {item.linkText} <span className="ml-1">›</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
