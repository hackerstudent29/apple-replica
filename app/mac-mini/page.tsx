import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, HardDrive, Zap, ShieldCheck, Box, Sparkles } from "lucide-react";

export const metadata = {
  title: "Mac mini - Apple",
  description: "More mighty. Even more mini. Built for Apple Intelligence with M4 and M4 Pro in a tiny 5-by-5 inch footprint.",
};

export default function MacMiniPage() {
  return (
    <ProductDetailLayout
      id="mac-mini"
      category="mac"
      name="Mac mini"
      badge="All-New Compact Design"
      tagline="More mighty. Even more mini."
      description="Completely redesigned around Apple silicon, Mac mini packs gigantic performance into an impossibly small five-by-five inch profile with front and back ports."
      startingPrice="$599.00"
      monthlyPrice="$49.91/mo. for 12 mo."
      colors={[
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_mini_329a1bcf3_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip Family", value: "Apple M4 or M4 Pro chip", icon: <Cpu className="w-5 h-5" /> },
        { label: "Dimensions", value: "5.0” x 5.0” footprint, just 2.0” tall", icon: <Box className="w-5 h-5" /> },
        { label: "Ports", value: "Thunderbolt 5, 2x front USB-C, HDMI & Gigabit Ethernet", icon: <Zap className="w-5 h-5" /> },
        { label: "Carbon Footprint", value: "Apple’s first carbon neutral Mac", icon: <ShieldCheck className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Incredible Shrinking Wonder",
          description: "Less than half the size of the previous generation, Mac mini channels air through its elevated thermal base to stay whisper quiet under full load.",
          badge: "Thermal Engineering",
        },
        {
          title: "Thunderbolt 5 Speeds",
          description: "M4 Pro models feature blazing Thunderbolt 5 transfer speeds up to 120 Gb/s, powering external NVMe arrays and multiple 6K displays.",
          badge: "Pro Connectivity",
        },
        {
          title: "Front-Facing Ports",
          description: "Conveniently plug in flash drives, phones, and peripherals with two front-facing USB-C ports and a 3.5mm headphone jack.",
          badge: "Ergonomics",
        },
        {
          title: "Apple’s First Carbon Neutral Mac",
          description: "Made with over 50% recycled content and manufactured using 100% renewable electricity.",
          badge: "Environment",
        },
      ]}
    />
  );
}
