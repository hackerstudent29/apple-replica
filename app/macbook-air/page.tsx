import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Battery, Monitor, Feather, Sparkles, Volume2 } from "lucide-react";

export const metadata = {
  title: "MacBook Air 13” and 15” - Apple",
  description: "Lean. Mean. M3 machine. Explore MacBook Air with strikingly thin design, 18-hour battery, and silent fanless architecture.",
};

export default function MacBookAirPage() {
  return (
    <ProductDetailLayout
      id="macbook-air"
      category="mac"
      name="MacBook Air"
      badge="Strikingly Thin"
      tagline="Lean. Mean. M3 machine."
      description="The world’s most popular laptop is supercharged by the M3 chip. With up to 18 hours of battery life and a strikingly thin aluminum design, take it everywhere and do anything."
      startingPrice="$1,099.00"
      monthlyPrice="$91.58/mo. for 12 mo."
      colors={[
        {
          name: "Midnight",
          hex: "#2e3642",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
        },
        {
          name: "Starlight",
          hex: "#f0e5d3",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
        },
        {
          name: "Space Grey",
          hex: "#7d7e80",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
        },
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_286f55670_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip", value: "Apple M3 chip with 8-core CPU & 10-core GPU", icon: <Cpu className="w-5 h-5" /> },
        { label: "Display", value: "13.6” or 15.3” Liquid Retina display with True Tone", icon: <Monitor className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 18 hours all-day battery life", icon: <Battery className="w-5 h-5" /> },
        { label: "Design", value: "Under 1.2 kg, durable 100% recycled aluminum body", icon: <Feather className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Incredible M3 Speed",
          description: "Blistering performance for everyday multitasking, photo editing in Lightroom, and gaming with hardware-accelerated mesh shading.",
          badge: "Apple Silicon",
        },
        {
          title: "Fanless, Completely Silent",
          description: "No matter how intensive the workload, MacBook Air runs completely silent with zero moving fan parts.",
          badge: "Quiet Architecture",
        },
        {
          title: "Support for Two External Displays",
          description: "Close the laptop lid to connect two high-resolution 5K external displays for an expansive desktop workspace.",
          badge: "Displays",
        },
        {
          title: "MagSafe & All-Day Battery",
          description: "Fast-charging MagSafe power cable pops off safely if tripped over, freeing up two Thunderbolt ports for accessories.",
          badge: "Convenience",
        },
      ]}
    />
  );
}
