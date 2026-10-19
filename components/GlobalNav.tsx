"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Search, Plus, Minus, Trash2 } from "lucide-react";
import AppleLogo from "./AppleLogo";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface NavSection {
  id: string;
  label: string;
  href: string;
  columns?: {
    heading: string;
    items: { label: string; href: string; isNew?: boolean }[];
  }[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    id: "store",
    label: "Store",
    href: "/store",
    columns: [
      {
        heading: "Shop",
        items: [
          { label: "Shop the Latest", href: "/store" },
          { label: "Mac", href: "/mac" },
          { label: "iPad", href: "/ipad" },
          { label: "iPhone", href: "/iphone" },
          { label: "Apple Watch", href: "/watch" },
          { label: "Accessories", href: "/accessories" },
        ],
      },
      {
        heading: "Quick Links",
        items: [
          { label: "Find a Store", href: "/retail" },
          { label: "Apple Trade In", href: "/shop/trade-in" },
          { label: "iPhone Upgrade Program", href: "/shop/apple-upgrade" },
          { label: "Certified Refurbished", href: "/shop/refurbished" },
        ],
      },
      {
        heading: "Shop Special Stores",
        items: [
          { label: "Education", href: "/education/k12" },
          { label: "Business", href: "/business" },
          { label: "Government", href: "/government" },
        ],
      },
    ],
  },
  {
    id: "mac",
    label: "Mac",
    href: "/mac",
    columns: [
      {
        heading: "Explore Mac",
        items: [
          { label: "Explore All Mac", href: "/mac" },
          { label: "MacBook Air", href: "/macbook-air" },
          { label: "MacBook Pro", href: "/macbook-pro", isNew: true },
          { label: "iMac", href: "/imac", isNew: true },
          { label: "Mac mini", href: "/mac-mini", isNew: true },
          { label: "Compare Mac", href: "/mac/compare" },
        ],
      },
      {
        heading: "Shop Mac",
        items: [
          { label: "Shop Mac", href: "/mac" },
          { label: "Mac Accessories", href: "/accessories" },
          { label: "Apple Trade In", href: "/shop/trade-in" },
        ],
      },
      {
        heading: "More from Mac",
        items: [
          { label: "macOS Sequoia", href: "/os/macos" },
          { label: "Apple Intelligence", href: "/apple-intelligence", isNew: true },
          { label: "Mac Support", href: "/support" },
        ],
      },
    ],
  },
  {
    id: "ipad",
    label: "iPad",
    href: "/ipad",
    columns: [
      {
        heading: "Explore iPad",
        items: [
          { label: "Explore All iPad", href: "/ipad" },
          { label: "iPad Pro", href: "/ipad-pro", isNew: true },
          { label: "iPad Air", href: "/ipad-air", isNew: true },
          { label: "iPad mini", href: "/ipad-mini" },
          { label: "Compare iPad", href: "/ipad/compare" },
        ],
      },
      {
        heading: "Shop iPad",
        items: [
          { label: "Shop iPad", href: "/ipad" },
          { label: "iPad Accessories", href: "/accessories" },
          { label: "Apple Trade In", href: "/shop/trade-in" },
        ],
      },
      {
        heading: "More from iPad",
        items: [
          { label: "iPadOS", href: "/os/ipados" },
          { label: "iPad Support", href: "/support" },
        ],
      },
    ],
  },
  {
    id: "iphone",
    label: "iPhone",
    href: "/iphone",
    columns: [
      {
        heading: "Explore iPhone",
        items: [
          { label: "Explore All iPhone", href: "/iphone" },
          { label: "iPhone Duo", href: "/iphone-duo", isNew: true },
          { label: "iPhone 18 Pro", href: "/iphone-18-pro", isNew: true },
          { label: "Compare iPhone", href: "/iphone/compare" },
        ],
      },
      {
        heading: "Shop iPhone",
        items: [
          { label: "Shop iPhone", href: "/iphone" },
          { label: "iPhone Accessories", href: "/accessories" },
          { label: "Apple Trade In", href: "/shop/trade-in" },
          { label: "Carrier Deals", href: "/shop/trade-in" },
        ],
      },
      {
        heading: "More from iPhone",
        items: [
          { label: "iOS 19", href: "/os/ios" },
          { label: "Apple Intelligence", href: "/apple-intelligence", isNew: true },
          { label: "iPhone Support", href: "/support" },
        ],
      },
    ],
  },
  {
    id: "watch",
    label: "Watch",
    href: "/watch",
    columns: [
      {
        heading: "Explore Watch",
        items: [
          { label: "Explore All Apple Watch", href: "/watch" },
          { label: "Apple Watch Series 12", href: "/apple-watch-series-12", isNew: true },
          { label: "Apple Watch Ultra 4", href: "/apple-watch-ultra-4", isNew: true },
          { label: "Compare Apple Watch", href: "/watch/compare" },
        ],
      },
      {
        heading: "Shop Watch",
        items: [
          { label: "Shop Apple Watch", href: "/watch" },
          { label: "Apple Watch Bands", href: "/accessories" },
          { label: "Apple Trade In", href: "/shop/trade-in" },
        ],
      },
      {
        heading: "More from Watch",
        items: [
          { label: "watchOS 12", href: "/os/watchos" },
          { label: "Apple Watch Support", href: "/support" },
        ],
      },
    ],
  },
  {
    id: "vision",
    label: "Vision",
    href: "/apple-vision-pro",
    columns: [
      {
        heading: "Explore Vision",
        items: [
          { label: "Apple Vision Pro", href: "/apple-vision-pro", isNew: true },
          { label: "visionOS 2", href: "/os/visionos" },
        ],
      },
      {
        heading: "Shop Vision",
        items: [
          { label: "Buy Apple Vision Pro", href: "/apple-vision-pro" },
          { label: "Book a Demo Session", href: "/retail" },
        ],
      },
    ],
  },
  {
    id: "airpods",
    label: "AirPods",
    href: "/airpods",
    columns: [
      {
        heading: "Explore AirPods",
        items: [
          { label: "Explore All AirPods", href: "/airpods" },
          { label: "AirPods 5", href: "/airpods-5", isNew: true },
          { label: "AirPods Pro 2", href: "/airpods-pro", isNew: true },
          { label: "Compare AirPods", href: "/airpods/compare" },
        ],
      },
      {
        heading: "Shop AirPods",
        items: [
          { label: "Shop AirPods", href: "/airpods" },
          { label: "AirPods Accessories", href: "/accessories" },
        ],
      },
      {
        heading: "More from AirPods",
        items: [
          { label: "Hearing Health", href: "/airpods-pro" },
          { label: "AirPods Support", href: "/support" },
        ],
      },
    ],
  },
  {
    id: "tv-home",
    label: "TV & Home",
    href: "/tv-home",
    columns: [
      {
        heading: "Explore TV & Home",
        items: [
          { label: "Explore TV & Home", href: "/tv-home" },
          { label: "Apple HomeView", href: "/apple-homeview", isNew: true },
          { label: "Apple TV 4K", href: "/apple-tv-4k" },
          { label: "HomePod", href: "/homepod-2nd-generation" },
          { label: "HomePod mini", href: "/homepod-mini" },
        ],
      },
    ],
  },
  {
    id: "entertainment",
    label: "Entertainment",
    href: "/entertainment",
    columns: [
      {
        heading: "Explore Entertainment",
        items: [
          { label: "Apple One", href: "/services" },
          { label: "Apple TV+", href: "/entertainment" },
          { label: "Apple Music", href: "/apple-music" },
          { label: "Apple Arcade", href: "/entertainment" },
          { label: "Apple Fitness+", href: "/services" },
          { label: "Apple Card", href: "/apple-card" },
        ],
      },
    ],
  },
  {
    id: "accessories",
    label: "Accessories",
    href: "/accessories",
    columns: [
      {
        heading: "Shop Accessories",
        items: [
          { label: "Shop All Accessories", href: "/accessories" },
          { label: "Mac Accessories", href: "/accessories" },
          { label: "iPad Accessories", href: "/accessories" },
          { label: "iPhone Accessories", href: "/accessories" },
          { label: "Apple Watch Straps", href: "/accessories" },
          { label: "AirTag", href: "/airtag" },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    href: "/support",
    columns: [
      {
        heading: "Explore Support",
        items: [
          { label: "Support Home", href: "/support" },
          { label: "Genius Bar Reservation", href: "/retail/geniusbar" },
          { label: "Today at Apple Workshops", href: "/today" },
          { label: "Apple Care+", href: "/support" },
          { label: "Find a Store", href: "/retail" },
        ],
      },
    ],
  },
];

const SEARCH_SUGGESTIONS = [
  { label: "iPhone Duo", href: "/iphone-duo" },
  { label: "iPhone 18 Pro", href: "/iphone-18-pro" },
  { label: "MacBook Pro M4", href: "/macbook-pro" },
  { label: "MacBook Air", href: "/macbook-air" },
  { label: "Apple HomeView", href: "/apple-homeview" },
  { label: "Apple Watch Series 12", href: "/apple-watch-series-12" },
  { label: "Apple Card", href: "/apple-card" },
  { label: "AirPods Pro", href: "/airpods-pro" },
  { label: "Apple Trade In", href: "/shop/trade-in" },
  { label: "Genius Bar", href: "/retail/geniusbar" },
  { label: "Site Map Directory", href: "/sitemap" },
];

export default function GlobalNav() {
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { items: cartItems, totalCount, totalAmount, updateQuantity, removeFromCart } = useCart();
  const enterTimerRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavMouseEnter = (sectionId: string) => {
    if (searchOpen || bagOpen) return;
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    if (activeFlyout) {
      setActiveFlyout(sectionId);
    } else {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      enterTimerRef.current = setTimeout(() => {
        setActiveFlyout(sectionId);
      }, 160);
    }
  };

  const handleNavMouseLeave = () => {
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
  };

  const handleHeaderMouseEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  };

  const handleHeaderMouseLeave = () => {
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setActiveFlyout(null);
    }, 140);
  };

  // Close menus on route change
  useEffect(() => {
    setActiveFlyout(null);
    setSearchOpen(false);
    setBagOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveFlyout(null);
        setSearchOpen(false);
        setBagOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeSection = NAV_SECTIONS.find((s) => s.id === activeFlyout);

  const filteredResults = searchQuery.trim()
    ? SEARCH_SUGGESTIONS.filter((s) =>
        s.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : SEARCH_SUGGESTIONS.slice(0, 5);

  return (
    <>
      <header
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          activeFlyout || searchOpen || bagOpen || mobileMenuOpen
            ? "bg-white text-[#1d1d1f] shadow-sm"
            : scrolled
            ? "bg-white/80 text-[#1d1d1f] backdrop-blur-md border-b border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            : "bg-white/95 text-[#1d1d1f] backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between text-[12px] font-normal tracking-[-0.01em]">
          {/* Apple Logo */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center text-[#1d1d1f] hover:opacity-70 transition-opacity py-0 -ml-2"
            aria-label="Apple Home"
          >
            <AppleLogo className="w-[14px] h-[44px] text-[#1d1d1f]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-between flex-1 mx-6 lg:mx-8">
            {NAV_SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                prefetch={true}
                onMouseEnter={() => handleNavMouseEnter(section.id)}
                onMouseLeave={handleNavMouseLeave}
                className={`transition-opacity duration-150 text-[#1d1d1f] hover:opacity-100 py-2 text-[12px] ${
                  activeFlyout && activeFlyout !== section.id
                    ? "opacity-50"
                    : "opacity-80"
                }`}
              >
                {section.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons: Search & Bag */}
          <div className="flex items-center space-x-6 text-[#1d1d1f]">
            {/* Search Icon */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setActiveFlyout(null);
                setBagOpen(false);
              }}
              aria-label="Search apple.com"
              className="hover:opacity-65 transition-opacity text-[#1d1d1f] flex items-center justify-center h-[44px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="44" viewBox="0 0 15 44" fill="currentColor">
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.032-2.467-5.5-5.5-5.5c-3.033,0-5.5,2.468-5.5,5.5 c0,3.031,2.467,5.5,5.5,5.5c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.156,0.156,0.359,0.234,0.563,0.234 c0.204,0,0.407-0.078,0.563-0.234C14.61,28.016,14.61,27.514,14.298,27.202z M1.55,20c0-2.481,2.019-4.5,4.5-4.5 c2.481,0,4.5,2.019,4.5,4.5c0,2.481-2.019,4.5-4.5,4.5C3.569,24.5,1.55,22.481,1.55,20z"/>
              </svg>
            </button>

            {/* Shopping Bag Icon with Cart Count */}
            <div className="relative">
              <button
                onClick={() => {
                  setBagOpen(!bagOpen);
                  setActiveFlyout(null);
                  setSearchOpen(false);
                }}
                aria-label="Shopping Bag"
                className="relative hover:opacity-65 transition-opacity text-[#1d1d1f] flex items-center justify-center h-[44px]"
              >
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1679 2.1679 0 0 0 -2.147 2.0537l-.5435 10.3593a2.1683 2.1683 0 0 0 2.1465 2.2783h9.754a2.1683 2.1683 0 0 0 2.1465-2.2783l-.5435-10.3593a2.1679 2.1679 0 0 0 -2.127-2.0537zm-4.3535-1.8648a2.3414 2.3414 0 0 1 2.2222 1.8648h-4.4444a2.3414 2.3414 0 0 1 2.2222-1.8648zm4.9692 14.1845a1.0841 1.0841 0 0 1 -1.0732 1.1407h-9.754a1.0841 1.0841 0 0 1 -1.0732-1.1407l.5435-10.3593a1.084 1.084 0 0 1 1.0732-1.0275h9.754a1.084 1.084 0 0 1 1.0732 1.0275z"/>
                </svg>
                {totalCount > 0 && (
                  <span className="absolute top-2.5 -right-1.5 w-4 h-4 bg-[#0071e3] text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-sm">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Interactive Drawer */}
              <AnimatePresence>
                {bagOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute right-0 top-12 w-84 bg-[#ffffff] text-[#1d1d1f] rounded-2xl shadow-2xl border border-black/10 p-5 z-50 min-w-[320px]"
                  >
                    {cartItems.length > 0 ? (
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3">
                          <h4 className="font-semibold text-sm">Review Bag ({totalCount})</h4>
                          <span className="text-sm font-semibold text-[#0071e3]">
                            ${totalAmount.toLocaleString()}
                          </span>
                        </div>

                        <div className="max-h-56 overflow-y-auto divide-y divide-black/5 mb-4 pr-1">
                          {cartItems.map((item) => (
                            <div key={item.id} className="py-3 flex items-center space-x-3">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 object-contain shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-[#1d1d1f] truncate">
                                  {item.name}
                                </p>
                                <p className="text-[11px] text-[#86868b]">{item.price}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-5 h-5 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 text-xs"
                                  >
                                    <Minus className="w-2.5 h-2.5" />
                                  </button>
                                  <span className="text-xs font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-5 h-5 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 text-xs"
                                  >
                                    <Plus className="w-2.5 h-2.5" />
                                  </button>
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="ml-auto text-xs text-[#86868b] hover:text-[#e03e3e] p-1"
                                    aria-label="Remove item"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/bag"
                          prefetch={true}
                          onClick={() => setBagOpen(false)}
                          className="w-full h-9 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center justify-center transition-colors mb-3 shadow-sm"
                        >
                          Check Out
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-[17px] font-semibold text-[#1d1d1f]">
                          Your Bag is empty.
                        </p>
                        <p className="text-[13px] text-[#86868b] mt-1">
                          Free express shipping and free returns on all orders.
                        </p>
                      </div>
                    )}

                    <div className="border-t border-black/10 pt-3 space-y-2 text-[13px]">
                      <Link
                        href="/account"
                        prefetch={true}
                        onClick={() => setBagOpen(false)}
                        className="flex items-center justify-between text-[#0071e3] hover:underline"
                      >
                        Orders <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/bag"
                        prefetch={true}
                        onClick={() => setBagOpen(false)}
                        className="flex items-center justify-between text-[#0071e3] hover:underline"
                      >
                        Your Bag ({totalCount}) <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/signin"
                        prefetch={true}
                        onClick={() => setBagOpen(false)}
                        className="flex items-center justify-between text-[#0071e3] hover:underline"
                      >
                        Sign in <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 hover:opacity-70 transition-opacity text-[#1d1d1f]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex flex-col space-y-1.5 w-4">
                  <span className="w-full h-0.5 bg-[#1d1d1f] rounded-full" />
                  <span className="w-full h-0.5 bg-[#1d1d1f] rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Flyout Menu */}
        <AnimatePresence>
          {activeFlyout && activeSection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
              onMouseEnter={handleHeaderMouseEnter}
              onMouseLeave={handleHeaderMouseLeave}
              className="w-full bg-[#ffffff] text-[#1d1d1f] border-b border-black/10 overflow-hidden shadow-2xl"
            >
              <div className="max-w-[1024px] mx-auto px-8 py-10 grid grid-cols-3 gap-8">
                {activeSection.columns?.map((col) => (
                  <div key={col.heading} className="space-y-3">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                      {col.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            prefetch={true}
                            onClick={() => setActiveFlyout(null)}
                            className="group flex items-center space-x-2 text-[17px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                          >
                            <span>{item.label}</span>
                            {item.isNew && (
                              <span className="text-[10px] uppercase font-semibold text-[#f56300] bg-[#f56300]/10 px-1.5 py-0.5 rounded">
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Search Drawer Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
              className="w-full bg-[#ffffff] text-[#1d1d1f] border-b border-black/10 overflow-hidden shadow-2xl"
            >
              <div className="max-w-[700px] mx-auto px-6 py-8">
                <div className="relative flex items-center border-b border-black/10 pb-3">
                  <span className="w-5 h-5 text-[#86868b] absolute left-0 flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search apple.com"
                    autoFocus
                    className="w-full pl-8 pr-10 py-1 bg-transparent text-[20px] font-medium text-[#1d1d1f] placeholder-[#86868b] border-none outline-none focus:ring-0"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-[#86868b] hover:text-[#1d1d1f]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="mt-6 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                    {searchQuery.trim() ? "Search Results" : "Quick Links"}
                  </p>
                  <div className="space-y-2.5">
                    {filteredResults.map((term) => (
                      <Link
                        key={term.label}
                        href={term.href}
                        prefetch={true}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center space-x-2 text-[14px] text-[#1d1d1f]/80 hover:text-[#0071e3] group w-full text-left py-1"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#0071e3] transition-colors" />
                        <span className="font-medium">{term.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dimmed backdrop when menu is open */}
      <AnimatePresence>
        {(activeFlyout || searchOpen || bagOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              setActiveFlyout(null);
              setSearchOpen(false);
              setBagOpen(false);
            }}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-[44px] bg-[#ffffff] text-[#1d1d1f] z-40 overflow-y-auto px-8 py-6 space-y-4 md:hidden shadow-xl"
          >
            <div className="space-y-3">
              {NAV_SECTIONS.map((section) => (
                <div key={section.id} className="border-b border-black/10 pb-2.5">
                  <Link
                    href={section.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[19px] font-semibold text-[#1d1d1f] hover:text-[#0071e3] flex items-center justify-between"
                  >
                    <span>{section.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#86868b]" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
