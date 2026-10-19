"use client";

import { Watch, Heart, Activity, Sliders, Moon, Sparkles } from "lucide-react";

export default function WatchOSPage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#ff2d55] bg-[#ff2d55]/10 px-3 py-1 rounded-full">
          Apple Watch Operating System
        </span>
        <h1 className="text-[44px] sm:text-[64px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
          watchOS 12. More insightful. More connected.
        </h1>
        <p className="text-[19px] sm:text-[22px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
          The Vitals app, Training Load insights, sleep apnea notifications, and Live Activities in the Smart Stack elevate your day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Activity className="w-8 h-8 text-[#ff2d55] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Training Load</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Understand how the intensity and duration of workouts impact your body over time to help you make informed training decisions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Heart className="w-8 h-8 text-[#30d158] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">The Vitals App</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              View your key overnight health metrics like heart rate, respiratory rate, wrist temperature, and blood oxygen in one glance.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <Sliders className="w-8 h-8 text-[#0071e3] mb-4" />
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Customizable Activity Rings</h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed">
              Pause your Activity rings for a rest day or injury without breaking your award streak, and customize goals by day of the week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
