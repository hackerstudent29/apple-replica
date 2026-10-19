"use client";

import { Wrench, ShieldCheck, Clock, Calendar, CheckCircle, ChevronRight } from "lucide-react";

export default function GeniusBarPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full">
          Expert Technical Support
        </span>
        <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          Genius Bar
        </h1>
        <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal">
          Hands-on hardware repairs and diagnostics by certified Apple Geniuses using genuine Apple parts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Wrench className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Genuine Apple Parts</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Every repair is performed with precision calibration tools to ensure your device functions exactly like new.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#34c759] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">AppleCare+ Warranty</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Screen and back glass damage repairs for just $29 with active AppleCare+ coverage, with same-day service available.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Clock className="w-8 h-8 text-[#5856d6] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Same-Day Service</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Most battery replacements and screen repairs are completed within two hours of your appointment.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base font-medium transition-all active:scale-95 shadow-md">
            Reserve a Genius Bar Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
