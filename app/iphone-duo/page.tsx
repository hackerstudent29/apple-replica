import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Battery, Camera, ShieldCheck, Sparkles, Smartphone } from "lucide-react";

export const metadata = {
  title: "iPhone Duo - Apple",
  description: "Hello, hello. Hello, Hello. hello. Explore the all-new iPhone Duo with foldable dual-screen engineering and Apple Intelligence.",
};

export default function IPhoneDuoPage() {
  return (
    <ProductDetailLayout
      id="iphone-duo"
      category="iphone"
      name="iPhone Duo"
      badge="All-New Form Factor"
      tagline="Hello, hello. Hello, Hello. hello."
      description="The revolutionary foldable iPhone with dual Super Retina XDR displays, titanium alloy hinge, and next-generation A19 Pro Bionic with Apple Intelligence."
      startingPrice="$1,499.00"
      monthlyPrice="$62.45/mo. for 24 mo."
      colors={[
        {
          name: "Star White",
          hex: "#f5f5f7",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large_2x.jpg",
        },
        {
          name: "Deep Space",
          hex: "#1d1d1f",
          imageSrc: "https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip", value: "A19 Pro Bionic chip with 6-core GPU", icon: <Cpu className="w-5 h-5" /> },
        { label: "Displays", value: "Dual 6.3” & 7.9” Super Retina XDR with ProMotion", icon: <Smartphone className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 30 hours video playback", icon: <Battery className="w-5 h-5" /> },
        { label: "Camera", value: "Quad 48MP Pro Fusion System with 10x Optical Zoom", icon: <Camera className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Revolutionary Dual Screen",
          description: "Seamlessly fold between a pocketable compact smartphone and an expansive 7.9-inch creative canvas. Zero creasing, aerospace titanium hinge.",
          badge: "Display Innovation",
        },
        {
          title: "Apple Intelligence Built In",
          description: "Generative AI tailored for your life. Rewrite, proofread, summarize text, create custom Genmoji, and prioritize notifications instantly.",
          badge: "AI Powered",
        },
        {
          title: "Pro Fusion Camera Array",
          description: "Ultra-high resolution 48MP sensors with second-generation sensor-shift optical image stabilization and spatial video capture.",
          badge: "Photography",
        },
        {
          title: "Aerospace Titanium & Ceramic Shield",
          description: "Engineered with Grade 5 titanium frame and next-gen Ceramic Shield front and back for industry-leading durability.",
          badge: "Materials",
        },
      ]}
    />
  );
}
