import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Battery, Camera, ShieldCheck, Sparkles, Smartphone } from "lucide-react";

export const metadata = {
  title: "iPhone 18 Pro - Apple",
  description: "Pro further. Explore iPhone 18 Pro with A19 Pro chip, Pro Fusion Camera Control, titanium design, and Apple Intelligence.",
};

export default function IPhone18ProPage() {
  return (
    <ProductDetailLayout
      id="iphone-18-pro"
      category="iphone"
      name="iPhone 18 Pro"
      badge="Pro Further"
      tagline="Mind-blowing. Head-turning. Pro further."
      description="Crafted with titanium and powered by the groundbreaking A19 Pro chip. Features the all-new Camera Control, 48MP Pro Fusion camera system, and industry-leading battery life."
      startingPrice="$999.00"
      monthlyPrice="$41.62/mo. for 24 mo."
      colors={[
        {
          name: "Deep Burgundy",
          hex: "#501e27",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg",
        },
        {
          name: "Natural Titanium",
          hex: "#9a958e",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg",
        },
        {
          name: "White Titanium",
          hex: "#e3e4e5",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg",
        },
        {
          name: "Black Titanium",
          hex: "#28292b",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip", value: "A19 Pro chip with 6-core GPU & Neural Engine", icon: <Cpu className="w-5 h-5" /> },
        { label: "Display", value: "6.3” or 6.9” Super Retina XDR with ProMotion 120Hz", icon: <Smartphone className="w-5 h-5" /> },
        { label: "Camera Control", value: "Tactile switch with force sensor and touch feedback", icon: <Camera className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 33 hours video playback", icon: <Battery className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Camera Control Button",
          description: "An effortless way to quickly access camera tools. Slide your finger to adjust zoom, exposure, depth of field, and switch photographic styles instantly.",
          badge: "Interaction",
        },
        {
          title: "A19 Pro. Power Unmatched.",
          description: "Built on 2nm architecture with next-generation Neural Accelerators delivering uncompromised gaming and AI speed with incredible efficiency.",
          badge: "Performance",
        },
        {
          title: "48MP Pro Fusion System",
          description: "Shoot 4K 120 fps Dolby Vision video with four studio-quality microphones for cinema-grade spatial audio recording.",
          badge: "Video & Photo",
        },
        {
          title: "Grade 5 Titanium Design",
          description: "Precision-machined exterior with micro-blasted texture and refined thin borders for the most immersive display experience ever on iPhone.",
          badge: "Durability",
        },
      ]}
    />
  );
}
