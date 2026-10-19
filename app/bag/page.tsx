"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, Lock, CreditCard, Truck, ChevronRight, MessageSquare } from "lucide-react";

export default function BagPage() {
  const { items, removeFromCart, updateQuantity, totalAmount, totalCount } = useCart();

  const formattedTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(totalAmount);

  const formattedCashback = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.min(10000, Math.floor(totalAmount * 0.05)));

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Free Delivery Banner */}
        <div className="bg-[#f5f5f7] rounded-2xl p-4 sm:p-5 mb-8 border border-black/5 flex items-center justify-between text-xs sm:text-sm text-[#1d1d1f]">
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-[#34c759] shrink-0" />
            <span>
              Get <strong>free delivery</strong> on every order, plus contactless doorstep delivery.
            </span>
          </div>
          <Link href="/store" className="text-[#0071e3] hover:underline font-medium shrink-0 ml-4">
            Continue shopping
          </Link>
        </div>

        {/* Bag Title */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-none">
            {items.length === 0 ? "Your Bag is empty." : `Review your Bag.`}
          </h1>
          {items.length > 0 && (
            <p className="text-[17px] text-[#86868b] mt-2 font-normal">
              Free delivery and free returns on all items.
            </p>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-[#f5f5f7] rounded-3xl p-12 text-center my-8 border border-black/5">
            <p className="text-xl text-[#1d1d1f] font-medium mb-3">
              Explore our latest products and add them to your Bag.
            </p>
            <p className="text-sm text-[#86868b] mb-6">
              Sign in to see if you have any saved items.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/signin"
                className="h-10 px-6 rounded-full border border-[#0071e3] text-[#0071e3] text-sm font-medium hover:bg-[#0071e3] hover:text-white transition-colors inline-flex items-center"
              >
                Sign in
              </Link>
              <Link
                href="/store"
                className="h-10 px-6 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors inline-flex items-center"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Items List */}
            <div className="lg:col-span-7 space-y-8 divide-y divide-black/10">
              {items.map((item) => (
                <div key={item.id} className="pt-8 first:pt-0 flex flex-col sm:flex-row gap-6">
                  {/* Product Thumbnail */}
                  <div className="w-32 h-32 shrink-0 bg-[#f5f5f7] rounded-2xl p-2 flex items-center justify-center border border-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h2 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight">
                          {item.name}
                        </h2>
                        <span className="text-[17px] font-semibold text-[#1d1d1f] ml-4 shrink-0">
                          {item.price}
                        </span>
                      </div>
                      {item.specs && (
                        <p className="text-[13px] text-[#86868b] mt-1">{item.specs}</p>
                      )}
                      <p className="text-[12px] text-[#34c759] font-medium mt-2 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#34c759] mr-1.5" />
                        In stock • Ships in 1-2 business days
                      </p>
                    </div>

                    {/* Quantity & Remove controls */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-[#86868b] uppercase tracking-wider font-semibold">
                          Qty
                        </span>
                        <div className="flex items-center border border-black/15 rounded-full px-2 py-0.5 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-[#86868b] hover:text-[#1d1d1f]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="mx-2 text-sm font-semibold text-[#1d1d1f]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-[#86868b] hover:text-[#1d1d1f]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#0071e3] hover:underline flex items-center"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary & Checkout Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#f5f5f7] rounded-[28px] p-8 border border-black/5 sticky top-20 space-y-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f]">
                  Order Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-[#86868b]">
                    <span>Items ({totalCount})</span>
                    <span>{formattedTotal}</span>
                  </div>
                  <div className="flex justify-between text-[#86868b]">
                    <span>Shipping</span>
                    <span className="text-[#34c759] font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between text-[#86868b]">
                    <span>Instant Cashback (Eligible)</span>
                    <span className="text-[#34c759] font-medium">-{formattedCashback}</span>
                  </div>
                  <div className="pt-3 border-t border-black/10 flex justify-between text-[19px] font-semibold text-[#1d1d1f]">
                    <span>Total</span>
                    <span>{formattedTotal}</span>
                  </div>
                  <p className="text-[11px] text-[#86868b]">Includes all applicable GST.</p>
                </div>

                {/* Cashback & EMI Pill */}
                <div className="p-3.5 rounded-2xl bg-white border border-black/5 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#0071e3]">
                    <CreditCard className="w-4 h-4" />
                    <span>No Cost EMI available</span>
                  </div>
                  <p className="text-[11px] text-[#86868b]">
                    Pay in 3, 6, 9 or 12 monthly installments with zero interest on qualified cards.
                  </p>
                </div>

                <button
                  onClick={() => alert("Proceeding to Apple Secure Checkout...")}
                  className="w-full h-12 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Lock className="w-4 h-4" />
                  <span>Check Out</span>
                </button>

                <div className="text-center pt-2">
                  <span className="text-xs text-[#86868b] flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5 mr-1 text-[#86868b]" /> 256-bit Apple Secure Checkout
                  </span>
                </div>
              </div>

              {/* Need help assistance */}
              <div className="mt-6 p-6 rounded-2xl bg-white border border-black/5 flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-[#0071e3] shrink-0" />
                <div className="text-xs text-[#1d1d1f]">
                  <p className="font-semibold">Need help completing your order?</p>
                  <p className="text-[#86868b] mt-0.5">
                    Chat with an Apple Specialist online or call 000800 040 1966.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
