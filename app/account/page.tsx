"use client";

import Link from "next/link";
import { User, Package, ShieldCheck, CreditCard, Laptop, Smartphone, Watch, Tablet, LogOut, ChevronRight, CheckCircle2 } from "lucide-react";

export default function AccountPage() {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@icloud.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    phone: "+91 98765 43210",
  };

  const devices = [
    {
      name: "MacBook Pro 16” (M4 Max)",
      serial: "C02G1234MD6R",
      os: "macOS Sequoia 15.1",
      coverage: "AppleCare+ Active until Oct 2027",
      icon: <Laptop className="w-6 h-6 text-[#1d1d1f]" />,
    },
    {
      name: "iPhone 18 Pro",
      serial: "F2LZ8901NX41",
      os: "iOS 18.2",
      coverage: "Limited Warranty until Sept 2027",
      icon: <Smartphone className="w-6 h-6 text-[#1d1d1f]" />,
    },
    {
      name: "Apple Watch Ultra 4",
      serial: "G4H56789KJ12",
      os: "watchOS 11",
      coverage: "AppleCare+ Active",
      icon: <Watch className="w-6 h-6 text-[#1d1d1f]" />,
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto space-y-10">
        {/* Profile Card Header */}
        <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-black/5"
            />
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759] text-xs font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Apple Account</span>
              </div>
              <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-[#86868b]">{user.email}</p>
              <p className="text-xs text-[#86868b] mt-0.5">{user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="px-4 py-2 rounded-full border border-black/15 text-[#1d1d1f] text-xs font-medium hover:bg-black/5 transition-colors inline-flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign out</span>
            </Link>
          </div>
        </div>

        {/* Recent Order & Shipment Tracking */}
        <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-[#0071e3]" />
              <h2 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight">
                Your Orders
              </h2>
            </div>
            <Link href="/bag" className="text-xs font-medium text-[#0071e3] hover:underline flex items-center">
              View Bag <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          <div className="bg-[#f5f5f7] rounded-2xl p-6 border border-black/5 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#34c759]">
                  Order Placed • Arriving Friday
                </span>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mt-0.5">
                  iPhone Duo 256GB - Space Black
                </h3>
                <p className="text-xs text-[#86868b]">Order #W987162534 • Express Delivery</p>
              </div>
              <span className="text-base font-semibold text-[#1d1d1f]">₹129900.00</span>
            </div>

            {/* Tracking progress bar */}
            <div className="space-y-2 pt-2">
              <div className="w-full bg-black/10 rounded-full h-2 overflow-hidden">
                <div className="bg-[#34c759] h-2 rounded-full w-2/3" />
              </div>
              <div className="flex justify-between text-[11px] font-medium text-[#86868b]">
                <span className="text-[#34c759]">Order Confirmed</span>
                <span className="text-[#34c759]">Shipped</span>
                <span>Out for Delivery</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registered Devices */}
        <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight">
              Your Devices ({devices.length})
            </h2>
            <Link href="/support" className="text-xs font-medium text-[#0071e3] hover:underline flex items-center">
              Device Support <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devices.map((dev, idx) => (
              <div
                key={idx}
                className="bg-[#f5f5f7] rounded-2xl p-6 border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{dev.icon}</div>
                  <h3 className="text-base font-semibold text-[#1d1d1f]">{dev.name}</h3>
                  <p className="text-xs text-[#86868b] mt-0.5">{dev.os}</p>
                  <p className="text-[11px] text-[#86868b]">Serial: {dev.serial}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5">
                  <span className="text-[11px] font-medium text-[#0071e3] flex items-center">
                    <ShieldCheck className="w-3 h-3 mr-1 text-[#34c759]" />
                    {dev.coverage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Security Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-[#0071e3]" />
              <h3 className="text-lg font-semibold text-[#1d1d1f]">Payment Methods</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#f5f5f7] border border-black/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">ICICI Coral Credit Card</p>
                <p className="text-xs text-[#86868b]">Ending in •••• 4092 (Instant Cashback Eligible)</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 bg-white rounded-md border border-black/10">Default</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f5f5f7] border border-black/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Apple Account Balance</p>
                <p className="text-xs text-[#86868b]">Linked to iCloud Family Sharing</p>
              </div>
              <span className="text-xs font-semibold text-[#34c759]">₹4,500.00</span>
            </div>
          </div>

          {/* Security & Sign In */}
          <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#34c759]" />
              <h3 className="text-lg font-semibold text-[#1d1d1f]">Sign-In and Security</h3>
            </div>
            <div className="p-4 rounded-xl bg-[#f5f5f7] border border-black/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Two-Factor Authentication</p>
                <p className="text-xs text-[#86868b]">High security enabled on trusted devices</p>
              </div>
              <span className="text-xs font-semibold text-[#34c759]">On</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f5f5f7] border border-black/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Passkeys & Face ID</p>
                <p className="text-xs text-[#86868b]">Passwordless fast sign-in</p>
              </div>
              <span className="text-xs font-semibold text-[#0071e3]">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
