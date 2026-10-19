"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";
import AppleLogo from "./AppleLogo";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_GROUPS: { groupName: string; columns: FooterColumn[] }[] = [
  {
    groupName: "Col1",
    columns: [
      {
        title: "Shop and Learn",
        links: [
          { label: "Store", href: "#store" },
          { label: "Mac", href: "#mac" },
          { label: "iPad", href: "#ipad" },
          { label: "iPhone", href: "#iphone" },
          { label: "Watch", href: "#watch" },
          { label: "AirPods", href: "#airpods" },
          { label: "TV & Home", href: "#tv-home" },
          { label: "AirTag", href: "#" },
          { label: "Accessories", href: "#accessories" },
          { label: "Gift Cards", href: "#" },
        ],
      },
      {
        title: "Apple Wallet",
        links: [
          { label: "Wallet", href: "#" },
          { label: "Apple Pay", href: "#" },
        ],
      },
    ],
  },
  {
    groupName: "Col2",
    columns: [
      {
        title: "Account",
        links: [
          { label: "Manage Your Apple Account", href: "#" },
          { label: "Apple Store Account", href: "#" },
          { label: "iCloud.com", href: "#" },
        ],
      },
      {
        title: "Entertainment",
        links: [
          { label: "Apple TV+", href: "#tv-gallery" },
          { label: "Apple Music", href: "#" },
          { label: "Apple Arcade", href: "#" },
          { label: "Apple Podcasts", href: "#" },
          { label: "Apple Books", href: "#" },
          { label: "App Store", href: "#" },
        ],
      },
    ],
  },
  {
    groupName: "Col3",
    columns: [
      {
        title: "Apple Store",
        links: [
          { label: "Find a Store", href: "#" },
          { label: "Genius Bar", href: "#" },
          { label: "Today at Apple", href: "#" },
          { label: "Group Reservations", href: "#" },
          { label: "Apple Camp", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Ways to Buy", href: "#" },
          { label: "Recycling Programme", href: "#" },
          { label: "Order Status", href: "#" },
          { label: "Shopping Help", href: "#" },
        ],
      },
    ],
  },
  {
    groupName: "Col4",
    columns: [
      {
        title: "For Business",
        links: [
          { label: "Apple and Business", href: "#" },
          { label: "Shop for Business", href: "#" },
        ],
      },
      {
        title: "For Education",
        links: [
          { label: "Apple and Education", href: "#" },
          { label: "Shop for Education", href: "#" },
          { label: "Shop for University", href: "#" },
        ],
      },
      {
        title: "For Healthcare",
        links: [
          { label: "Apple in Healthcare", href: "#" },
          { label: "Health on Apple Watch", href: "#" },
        ],
      },
    ],
  },
  {
    groupName: "Col5",
    columns: [
      {
        title: "Apple Values",
        links: [
          { label: "Accessibility", href: "#" },
          { label: "Education", href: "#" },
          { label: "Environment", href: "#" },
          { label: "Privacy", href: "#" },
          { label: "Supply Chain", href: "#" },
        ],
      },
      {
        title: "About Apple",
        links: [
          { label: "Newsroom", href: "#" },
          { label: "Apple Leadership", href: "#" },
          { label: "Career Opportunities", href: "#" },
          { label: "Investors", href: "#" },
          { label: "Ethics & Compliance", href: "#" },
          { label: "Events", href: "#" },
          { label: "Contact Apple", href: "#" },
        ],
      },
    ],
  },
];

export default function GlobalFooter() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#86868b] text-[12px] font-normal tracking-[-0.01em]">
      <div className="max-w-[1024px] mx-auto px-4 py-8">
        {/* Sosumi Legal Footnotes */}
        <div className="border-b border-black/10 pb-6 space-y-2.5 leading-relaxed text-[11px] sm:text-[12px]">
          <p>
            1. Apple Watch Series 12 requires iPhone 11 or later with iOS 18 or later. Heart rate sensing is not intended for medical diagnoses.
          </p>
          <p>
            2. Festive engraving available exclusively on apple.com and the Apple Store app for eligible AirPods orders.
          </p>
          <p>
            ‡ Instant cashback is available with eligible cards on qualifying transactions. Offer valid till stocks last. Terms and conditions apply.
          </p>
          <p>
            § No Cost EMI is available on qualifying products with selected banks. Additional terms and interest waivers apply.
          </p>
          <p>
            Apple Trade In values may vary based on device condition, configuration, and year of manufacture. You must be at least 18 years old.
          </p>
        </div>

        {/* Apple Breadcrumb Bar */}
        <div className="py-4 flex items-center space-x-2 text-[#1d1d1f]">
          <Link href="/" aria-label="Apple">
            <AppleLogo className="w-3.5 h-3.5 fill-current" />
          </Link>
          <span className="text-[#86868b]">›</span>
          <span className="text-[12px] font-medium text-[#1d1d1f]">Apple (India)</span>
        </div>

        {/* Directory Sitemap Columns */}
        {/* Desktop View (5 columns) */}
        <div className="hidden md:grid grid-cols-5 gap-6 pt-4 pb-8">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.groupName} className="space-y-6">
              {group.columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-semibold text-[#1d1d1f] mb-2.5 text-[12px]">
                    {col.title}
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="hover:text-[#1d1d1f] hover:underline transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Accordions */}
        <div className="md:hidden divide-y divide-black/10 pt-2 pb-6">
          {FOOTER_GROUPS.flatMap((g) => g.columns).map((col) => {
            const isOpen = !!openSections[col.title];
            return (
              <div key={col.title} className="py-2.5">
                <button
                  onClick={() => toggleSection(col.title)}
                  className="w-full flex items-center justify-between text-left font-semibold text-[#1d1d1f] py-1 text-[13px]"
                >
                  <span>{col.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 text-[#86868b] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <ul className="space-y-2 pt-2.5 pb-2 pl-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block text-[#86868b] hover:text-[#1d1d1f] py-0.5"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Copyright and Legal Footnote Bar */}
        <div className="border-t border-black/10 pt-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] sm:text-[12px]">
          <div>
            <span>More ways to shop: </span>
            <a href="#retail" className="text-[#0071e3] hover:underline">
              Find an Apple Store
            </a>{" "}
            <span>or </span>
            <a href="#retailer" className="text-[#0071e3] hover:underline">
              other retailer
            </a>{" "}
            <span>near you. Or call 000800 040 1966.</span>
          </div>

          <div className="flex items-center space-x-1.5 text-[#1d1d1f]">
            <Globe className="w-3.5 h-3.5" />
            <a href="#country" className="hover:underline font-medium">
              India
            </a>
          </div>
        </div>

        <div className="pt-3 flex flex-col lg:flex-row lg:items-center justify-between gap-2 text-[11px] text-[#86868b]">
          <div>Copyright © 2026 Apple Inc. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-black/20">|</span>
            <a href="#terms" className="hover:underline">
              Terms of Use
            </a>
            <span className="text-black/20">|</span>
            <a href="#sales" className="hover:underline">
              Sales Policy
            </a>
            <span className="text-black/20">|</span>
            <a href="#legal" className="hover:underline">
              Legal
            </a>
            <span className="text-black/20">|</span>
            <a href="#sitemap" className="hover:underline">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
