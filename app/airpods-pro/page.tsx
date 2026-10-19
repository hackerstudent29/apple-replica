import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Volume2, Battery, ShieldCheck, Heart, Sparkles, Sliders } from "lucide-react";

export const metadata = {
  title: "AirPods Pro 2 - Apple",
  description: "Pro-level Active Noise Cancellation, Adaptive Audio, Hearing Aid feature, and Personalized Spatial Audio with dynamic head tracking.",
};

export default function AirPodsProPage() {
  return (
    <ProductDetailLayout
      id="airpods-pro"
      category="airpods"
      name="AirPods Pro"
      badge="Hearing Health Innovation"
      tagline="Rebuilt from the sound up."
      description="Featuring up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, and a scientifically validated clinical-grade Hearing Aid feature with Hearing Protection."
      startingPrice="$249.00"
      monthlyPrice="$41.50/mo. for 6 mo."
      colors={[
        {
          name: "White",
          hex: "#ffffff",
          imageSrc: "https://www.apple.com/v/airpods-pro/j/images/overview/hero/hero__f1k80h3a0oae_large_2x.png",
        },
      ]}
      specs={[
        { label: "Audio Chip", value: "Apple H2 headphone chip in earbuds, U1 in case", icon: <Volume2 className="w-5 h-5" /> },
        { label: "Noise Cancellation", value: "Up to 2x more active noise cancellation", icon: <Sliders className="w-5 h-5" /> },
        { label: "Hearing Health", value: "Clinically validated Hearing Test and Hearing Aid", icon: <Heart className="w-5 h-5" /> },
        { label: "Battery Life", value: "Up to 6 hours listening with ANC, 30 hours total", icon: <Battery className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "All-in-One Hearing Health",
          description: "Take an FDA-cleared hearing test from your iPhone in minutes. If hearing loss is detected, AirPods Pro can seamlessly function as a personalized medical-grade hearing aid.",
          badge: "Clinical Health",
        },
        {
          title: "Intelligent Adaptive Audio",
          description: "Dynamically blends Active Noise Cancellation and Transparency mode based on changing ambient environments as you move throughout your day.",
          badge: "Acoustics",
        },
        {
          title: "Conversation Awareness",
          description: "When you start speaking with someone nearby, AirPods Pro automatically lowers media volume, dampens background noise, and enhances voices in front of you.",
          badge: "Intelligence",
        },
        {
          title: "MagSafe Charging Case (USB-C)",
          description: "Precision Finding with built-in speaker, lanyard loop, and IP54 dust, sweat, and water resistance for earphones and case alike.",
          badge: "Hardware",
        },
      ]}
    />
  );
}
