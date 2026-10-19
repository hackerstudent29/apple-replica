"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShieldAlert, Key, CreditCard, Wrench, Headphones, MessageCircle, FileText, ChevronRight } from "lucide-react";

const SUPPORT_TOPICS = [
  {
    name: "iPhone",
    image: "https://www.apple.com/in/iphone/home/images/overview/chapternav/iphone_18_pro__dj48ysc0yagm_large.png",
    href: "/iphone",
  },
  {
    name: "Mac",
    image: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mba_8e00b3bdd_2x.png",
    href: "/mac",
  },
  {
    name: "iPad",
    image: "https://www.apple.com/assets-www/en_WW/ipad/03_chapternav/small/ipad_pro_bd732ab83_2x.png",
    href: "/ipad",
  },
  {
    name: "Watch",
    image: "https://www.apple.com/assets-www/en_IN/watch/chapternav/small/nav_s12_3ffa9e07a_2x.png",
    href: "/watch",
  },
  {
    name: "AirPods",
    image: "https://www.apple.com/v/airpods/af/images/overview/hero__gb4d3fd8jnu6_large.jpg",
    href: "/airpods",
  },
  {
    name: "Apple TV",
    image: "https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg",
    href: "/tv-home",
  },
];

const QUICK_ACTIONS = [
  {
    icon: <Key className="w-6 h-6 text-[#0071e3]" />,
    title: "Forgot Apple Account password",
    description: "Reset your password or learn how to unlock your account.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#ff9500]" />,
    title: "Apple Repair and Service",
    description: "Schedule a repair with an Apple Authorised Service Provider.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#34c759]" />,
    title: "Billing and Subscriptions",
    description: "Manage your subscriptions, view purchase history, or request a refund.",
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#af52de]" />,
    title: "Check Coverage",
    description: "Review AppleCare+ warranty status and coverage expiration for your serial number.",
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white">
      {/* Support Hero Header */}
      <div className="bg-[#f5f5f7] py-20 px-4 text-center border-b border-black/5">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-none mb-3">
            Apple Support
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#86868b] mb-8 font-normal">
            Find answers, repair booking, and dedicated device guides.
          </p>

          {/* Search Bar */}
          <div className="relative shadow-sm rounded-full bg-white border border-black/10">
            <Search className="w-5 h-5 text-[#86868b] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, questions, or device symptoms..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full text-base text-[#1d1d1f] placeholder-[#86868b] outline-none focus:ring-2 focus:ring-[#0071e3]"
            />
          </div>
        </div>
      </div>

      {/* Product Topics Strip */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] text-center mb-10 tracking-tight">
          Select a product for tailored support
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-20">
          {SUPPORT_TOPICS.map((topic) => (
            <Link
              key={topic.name}
              href={topic.href}
              className="bg-[#f5f5f7] rounded-[24px] p-6 flex flex-col items-center justify-center text-center hover:bg-[#e8e8ed] hover:shadow-md transition-all group border border-black/5"
            >
              <div className="h-20 w-20 flex items-center justify-center mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={topic.image}
                  alt={topic.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[14px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                {topic.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Help Actions */}
        <div className="mb-20">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
            Quick solutions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {QUICK_ACTIONS.map((action, idx) => (
              <div
                key={idx}
                className="bg-[#f5f5f7] rounded-[24px] p-8 border border-black/5 flex items-start space-x-5 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="shrink-0 p-3 rounded-2xl bg-white shadow-sm">
                  {action.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-[14px] text-[#86868b] mt-1 leading-relaxed">
                    {action.description}
                  </p>
                  <span className="text-[13px] font-medium text-[#0071e3] mt-3 inline-flex items-center">
                    Get help <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-[#f5f5f7] rounded-[32px] p-8 sm:p-12 border border-black/5 text-center max-w-3xl mx-auto">
          <Headphones className="w-10 h-10 text-[#0071e3] mx-auto mb-4" />
          <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] tracking-tight">
            Connect with an Apple Specialist
          </h3>
          <p className="text-[15px] sm:text-[17px] text-[#86868b] mt-2 mb-8 max-w-lg mx-auto">
            Get personalized assistance via 24/7 online chat or schedule a callback with our support experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => alert("Initiating Apple Support Chat...")}
              className="h-11 px-7 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0077ed] transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start a chat</span>
            </button>
            <button
              onClick={() => alert("Scheduling Apple Support Callback...")}
              className="h-11 px-7 rounded-full border border-[#0071e3] text-[#0071e3] text-[14px] font-medium hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              Call us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
