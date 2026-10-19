"use client";

import { useState } from "react";
import Link from "next/link";
import AppleLogo from "@/components/AppleLogo";
import { ArrowRight, Lock, Shield, Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"email" | "password">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStep("password");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setSignedIn(true);
    }
  };

  return (
    <div className="w-full min-h-[85vh] bg-white flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-[460px] mx-auto text-center">
        {/* Apple Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" aria-label="Apple Home" className="text-[#1d1d1f] hover:opacity-80 transition-opacity">
            <AppleLogo className="w-10 h-10 fill-current" />
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.015em] leading-[1.1] mb-2">
          Sign in with Apple
        </h1>
        <p className="text-[15px] sm:text-[17px] text-[#86868b] leading-[1.29] mb-8 font-normal">
          Manage your Apple Account, orders, devices, and subscriptions.
        </p>

        {signedIn ? (
          <div className="bg-[#ffffff] rounded-[28px] p-8 sm:p-10 border border-black/8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#34c759]/12 text-[#34c759] flex items-center justify-center mx-auto text-2xl font-medium">
              ✓
            </div>
            <h2 className="text-[24px] font-semibold text-[#1d1d1f] tracking-tight">
              Welcome back!
            </h2>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed">
              You are signed in as <strong className="text-[#1d1d1f] font-semibold">{email}</strong>
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/account"
                className="h-[44px] w-full px-6 rounded-full bg-[#0071e3] text-white text-[15px] font-normal hover:bg-[#0077ed] active:bg-[#006edb] transition-all active:scale-[0.99] flex items-center justify-center shadow-sm"
              >
                Go to your Apple Account
              </Link>
              <Link
                href="/store"
                className="h-[44px] w-full px-6 rounded-full bg-[#f5f5f7] border border-black/5 text-[#1d1d1f] text-[15px] font-normal hover:bg-[#e8e8ed] active:bg-[#dfdfe4] transition-all active:scale-[0.99] flex items-center justify-center"
              >
                Continue to Store
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#ffffff] rounded-[28px] p-8 sm:p-10 border border-black/8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            {step === "email" ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="text-left">
                  <label
                    htmlFor="email-input"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2"
                  >
                    Email or Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="email-input"
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full h-[52px] px-4 rounded-xl border border-[#d2d2d7] text-[#1d1d1f] text-[17px] placeholder-[#86868b] outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/15 transition-all"
                      autoFocus
                    />
                    <button
                      type="submit"
                      aria-label="Continue with email"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#86868b] pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-black/20 text-[#0071e3] focus:ring-[#0071e3]"
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" className="text-[#0071e3] hover:underline">
                    Forgotten password?
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="text-left space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#86868b]">{email}</span>
                    <button
                      type="button"
                      onClick={() => setStep("email")}
                      className="text-xs text-[#0071e3] hover:underline"
                    >
                      Change
                    </button>
                  </div>
                  <label
                    htmlFor="password-input"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#86868b]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password-input"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3.5 rounded-xl border border-black/20 text-[#1d1d1f] text-base placeholder-[#86868b] outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-12 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      type="submit"
                      aria-label="Sign in"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white flex items-center justify-center transition-colors shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <a href="#forgot" className="text-[#0071e3] hover:underline">
                    Forgotten your password?
                  </a>
                </div>
              </form>
            )}

            {/* Links and privacy */}
            <div className="mt-8 pt-6 border-t border-black/10 space-y-4 text-xs text-[#86868b]">
              <p>
                Don’t have an Apple Account?{" "}
                <a href="#create" className="text-[#0071e3] hover:underline font-medium">
                  Create yours now.
                </a>
              </p>
              <div className="flex items-center justify-center space-x-1.5 text-[#86868b] pt-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Your Apple Account details are encrypted and secure.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
