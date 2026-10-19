import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Monitor, Feather, Camera, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "iPad Pro - Apple",
  description: "Thinpossible. Explore iPad Pro featuring Ultra Retina XDR display with tandem OLED, M4 chip, and Apple Pencil Pro.",
};

export default function IPadProPage() {
  return (
    <ProductDetailLayout
      id="ipad-pro"
      category="ipad"
      name="iPad Pro"
      badge="Thinpossible"
      tagline="Unbelievably thin. Incredibly powerful."
      description="The thinnest Apple product ever made. Features the groundbreaking Ultra Retina XDR tandem OLED display, outrageous performance from the M4 chip, and support for Apple Pencil Pro."
      startingPrice="$999.00"
      monthlyPrice="$83.25/mo. for 12 mo."
      colors={[
        {
          name: "Space Black",
          hex: "#222325",
          imageSrc: "https://www.apple.com/v/ipad-pro/at/images/overview/hero/hero_endframe__bcuawyg36vqq_large_2x.jpg",
        },
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/v/ipad-pro/at/images/overview/hero/hero_endframe__bcuawyg36vqq_large_2x.jpg",
        },
      ]}
      specs={[
        { label: "Display", value: "11” or 13” Ultra Retina XDR with Tandem OLED", icon: <Monitor className="w-5 h-5" /> },
        { label: "Thickness", value: "Just 5.1 mm thin — thinnest Apple device ever", icon: <Feather className="w-5 h-5" /> },
        { label: "Silicon", value: "Apple M4 chip with 38 TOPS Neural Engine", icon: <Cpu className="w-5 h-5" /> },
        { label: "Accessories", value: "Apple Pencil Pro and redesigned Magic Keyboard", icon: <Sparkles className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Tandem OLED Technology",
          description: "Two OLED panels combined to generate astonishing 1000 nits full-screen brightness and 1600 nits peak HDR brightness for unbelievable contrast.",
          badge: "Display Breakthrough",
        },
        {
          title: "Next-Gen M4 Power",
          description: "4x faster pro rendering performance than M2 with hardware-accelerated ray tracing and next-generation CPU efficiency.",
          badge: "Speed",
        },
        {
          title: "Apple Pencil Pro Magic",
          description: "Squeeze the barrel to bring up a tool palette, roll the pencil for precision brush orientation with haptic feedback.",
          badge: "Creativity",
        },
        {
          title: "Landscape 12MP Center Stage",
          description: "Now repositioned along the landscape edge for natural eye contact during video conferencing and FaceTime calls.",
          badge: "Camera",
        },
      ]}
    />
  );
}
