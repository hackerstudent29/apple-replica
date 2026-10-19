import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Battery, Monitor, HardDrive, Sparkles, Zap } from "lucide-react";

export const metadata = {
  title: "MacBook Pro 14” and 16” - Apple",
  description: "Mind-blowing. Head-turning. Supercharged by M4, M4 Pro, and M4 Max. Up to 24 hours of battery life and Liquid Retina XDR.",
};

export default function MacBookProPage() {
  return (
    <ProductDetailLayout
      id="macbook-pro"
      category="mac"
      name="MacBook Pro"
      badge="Supercharged by M4"
      tagline="Mind-blowing. Head-turning."
      description="MacBook Pro blasts forward with M4, M4 Pro, and M4 Max chips, delivering phenomenal pro performance, up to 24 hours of battery life, and a stunning Liquid Retina XDR display."
      startingPrice="$1,599.00"
      monthlyPrice="$133.25/mo. for 12 mo."
      colors={[
        {
          name: "Space Black",
          hex: "#222325",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg",
        },
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_028335cc2_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip Family", value: "Apple M4, M4 Pro, or M4 Max chip", icon: <Cpu className="w-5 h-5" /> },
        { label: "Display", value: "14.2” or 16.2” Liquid Retina XDR up to 1600 nits", icon: <Monitor className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 24 hours longest Mac battery life ever", icon: <Battery className="w-5 h-5" /> },
        { label: "Unified Memory", value: "Up to 128GB unified memory with 546GB/s bandwidth", icon: <HardDrive className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "M4 Generation Silicon",
          description: "Tackle immense scientific simulations, compile millions of lines of code, or render complex 3D scenes in seconds with next-generation GPU hardware ray tracing.",
          badge: "Extreme Performance",
        },
        {
          title: "Liquid Retina XDR Display",
          description: "1,000,000:1 contrast ratio, 1000 nits sustained full-screen brightness, and nano-texture display option that dramatically cuts reflections in bright lighting.",
          badge: "Reference Grade",
        },
        {
          title: "Thunderbolt 5 and Pro Connectivity",
          description: "Connect up to four high-resolution external displays, MagSafe 3 fast charging, HDMI port supporting 8K, and full-size SDXC card slot.",
          badge: "Ports & I/O",
        },
        {
          title: "12MP Center Stage Camera",
          description: "Advanced camera keeps you centered in frame during video calls, while Desk View displays both your face and your work surface simultaneously.",
          badge: "Video Conferencing",
        },
      ]}
    />
  );
}
