"use client";

import { Sparkles, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

const SESSIONS = [
  {
    title: "Photo Walk: Taking Compelling Portraits",
    category: "Photography",
    time: "Today, 4:00 p.m. – 5:00 p.m.",
    location: "Apple Fifth Avenue",
    description: "Learn how to capture stunning portraits using Portrait mode, Studio Lighting, and Camera Control on iPhone.",
  },
  {
    title: "Art Lab: Draw Your Dreams with Apple Pencil",
    category: "Design & Art",
    time: "Tomorrow, 2:00 p.m. – 3:30 p.m.",
    location: "Apple Michigan Avenue",
    description: "Discover drawing techniques in Procreate on iPad Pro with Apple Pencil Pro. Designed for all skill levels.",
  },
  {
    title: "Music Skills: Beatmaking in Logic Pro",
    category: "Music",
    time: "Thursday, 6:00 p.m. – 7:00 p.m.",
    location: "Apple Union Square",
    description: "Build custom drum patterns and layer synth melodies using Quick Sampler and Step Sequencer on Mac.",
  },
];

export default function TodayAtApplePage() {
  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#f56300] bg-[#f56300]/10 px-3 py-1 rounded-full">
            Free Creative Sessions
          </span>
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mt-4 leading-[1.08]">
            Today at Apple
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] mt-4 max-w-2xl mx-auto font-normal">
            Hands-on workshops in photography, coding, video, and music led by creative Pros at your local Apple Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SESSIONS.map((s) => (
            <div key={s.title} className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-2 py-0.5 rounded-full inline-block mb-3">
                  {s.category}
                </span>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3 leading-snug">{s.title}</h3>
                <p className="text-xs text-[#86868b] leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-1.5 text-xs text-[#1d1d1f] font-medium border-t border-black/5 pt-3">
                  <div className="flex items-center space-x-2 text-[#6e6e73]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{s.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#6e6e73]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{s.location}</span>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-2 rounded-full text-xs font-medium transition-colors">
                Sign up free
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
