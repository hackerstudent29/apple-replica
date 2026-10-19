"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

export interface SwiftUIModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  subtitle?: string;
  headline?: string;
  subhead?: string;
  imageSrc?: string;
  description?: string;
  features?: string[];
  price?: string;
  onAction?: () => void;
  actionText?: string;
  children?: React.ReactNode;
}

export default function SwiftUIModal({
  isOpen,
  onClose,
  title,
  category,
  subtitle,
  headline,
  subhead,
  imageSrc,
  description,
  features,
  price,
  onAction,
  actionText = "Add to Bag",
  children,
}: SwiftUIModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
          {/* Dimmed backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* SwiftUI Spring Modal Card (Light Mode) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 300,
            }}
            className="relative w-full max-w-2xl bg-[#ffffff] text-[#1d1d1f] rounded-[24px] shadow-2xl border border-black/10 overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <div>
                {category && (
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0071e3] block mb-0.5">
                    {category}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  {title}
                </h3>
                {(subtitle || subhead) && (
                  <p className="text-sm text-[#86868b] mt-0.5">{subtitle || subhead}</p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#86868b] hover:text-[#1d1d1f] transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm sm:text-base leading-relaxed">
              {imageSrc && (
                <div className="h-44 w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageSrc} alt={title} className="max-h-full max-w-full object-contain" />
                </div>
              )}
              {description && (
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">{description}</p>
              )}
              {features && features.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#f5f5f7] space-y-2.5">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                      <Check className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}
              {price && (
                <div className="p-4 rounded-2xl border border-black/10 bg-[#fbfbfd]">
                  <span className="text-xs text-[#86868b] block font-medium">Pricing & Installments</span>
                  <span className="text-lg font-semibold text-[#1d1d1f]">{price}</span>
                </div>
              )}
              {children}
            </div>

            {/* Footer with Apple CTA */}
            <div className="px-6 py-4 bg-[#f5f5f7] flex items-center justify-end gap-3 border-t border-black/5">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full text-sm font-medium text-[#1d1d1f] hover:bg-black/5 transition-colors"
              >
                Close
              </button>
              {onAction && (
                <button
                  onClick={onAction}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all active:scale-95 shadow-sm"
                >
                  {actionText}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
