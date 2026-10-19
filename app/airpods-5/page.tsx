import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Volume2, Battery, ShieldCheck, Sparkles, Sliders } from "lucide-react";

export const metadata = {
  title: "AirPods 5 - Apple",
  description: "Next-level audio with available Active Noise Cancellation in an open-ear design. Discover AirPods 5 with Personalized Spatial Audio.",
};

export default function AirPods5Page() {
  return (
    <ProductDetailLayout
      id="airpods-5"
      category="airpods"
      name="AirPods 5"
      badge="Next-Gen Sound"
      tagline="Iconic design. Audio transformed."
      description="Engineered for exceptional fit and acoustics. Now available with Active Noise Cancellation in an open-ear design, Voice Isolation, and the smallest wireless charging case ever made."
      startingPrice="$129.00"
      monthlyPrice="$21.50/mo. for 6 mo."
      colors={[
        {
          name: "White",
          hex: "#ffffff",
          imageSrc: "https://www.apple.com/v/airpods-4/b/images/overview/hero/hero_endframe__cve5v4bch5w2_large_2x.jpg",
        },
      ]}
      specs={[
        { label: "Audio Chip", value: "Apple H2 headphone chip with computational audio", icon: <Volume2 className="w-5 h-5" /> },
        { label: "Design", value: "Refined acoustic open-ear fit for all-day comfort", icon: <Sparkles className="w-5 h-5" /> },
        { label: "Case", value: "USB-C wireless charging case with built-in speaker", icon: <Sliders className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 30 hours total listening time with case", icon: <Battery className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Available Active Noise Cancellation",
          description: "For the first time, experience powerful Active Noise Cancellation in an open-ear form factor that eliminates airplane engine hum and office chatter.",
          badge: "Open-Ear ANC",
        },
        {
          title: "Personalized Spatial Audio",
          description: "Sound placed all around you with dynamic head tracking turns movies, shows, and games into immersive theater-like sonic journeys.",
          badge: "Acoustics",
        },
        {
          title: "Crystal-Clear Voice Isolation",
          description: "Computational audio isolates your voice and suppresses loud wind noise or blaring café espresso machines during phone calls.",
          badge: "Call Quality",
        },
        {
          title: "Siri Interactions",
          description: "Simply nod your head yes or shake your head no to answer calls, dismiss announcements, or manage incoming messages hands-free.",
          badge: "Hands-Free",
        },
      ]}
    />
  );
}
