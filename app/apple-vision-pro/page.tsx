import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Eye, Layers, Cpu, Battery, Sparkles, Box } from "lucide-react";

export const metadata = {
  title: "Apple Vision Pro - Apple",
  description: "Welcome to the era of spatial computing. Discover Apple Vision Pro with dual 4K micro-OLED displays and visionOS.",
};

export default function AppleVisionProPage() {
  return (
    <ProductDetailLayout
      id="apple-vision-pro"
      category="vision"
      name="Apple Vision Pro"
      badge="Spatial Computer"
      tagline="Welcome to the era of spatial computing."
      description="Seamlessly blends digital content with your physical space. Navigate using your eyes, hands, and voice. Experiences on Apple Vision Pro transform how you work, watch, relive memories, and connect."
      startingPrice="$3,499.00"
      monthlyPrice="$291.58/mo. for 12 mo."
      colors={[
        {
          name: "Laminated Glass & Aluminum",
          hex: "#c4c5c7",
          imageSrc: "https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/hero_hardware__b5ygoxuai0ua_large_2x.jpg",
        },
      ]}
      specs={[
        { label: "Displays", value: "23 million pixels dual 4K micro-OLED", icon: <Eye className="w-5 h-5" /> },
        { label: "Silicon", value: "Apple M2 + all-new R1 sensor-processing chip", icon: <Cpu className="w-5 h-5" /> },
        { label: "Audio", value: "Dual-driver audio pods with Spatial Audio ray tracing", icon: <Layers className="w-5 h-5" /> },
        { label: "Control", value: "Natural navigation with eyes, hands, and voice", icon: <Sparkles className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "An Infinite Canvas for Apps",
          description: "Arrange apps anywhere around your room at any scale. Wirelessly bring your Mac desktop into Apple Vision Pro with a glance, creating a massive 4K portable display.",
          badge: "Productivity",
        },
        {
          title: "The Ultimate Personal Theater",
          description: "Expand movies, shows, and games up to a 100-foot screen with Spatial Audio that places sound all around you with startling realism.",
          badge: "Entertainment",
        },
        {
          title: "Stay Connected with EyeSight",
          description: "When someone approaches you while wearing Vision Pro, the device reveals your eyes through the exterior display so you remain present.",
          badge: "Interaction",
        },
        {
          title: "Spatial Photos and Videos",
          description: "Capture memorable 3D photos and spatial videos with incredible depth so you can relive cherished memories as if standing right there.",
          badge: "Memories",
        },
      ]}
    />
  );
}
