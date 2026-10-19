import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Monitor, Camera, Palette, Sparkles, Volume2 } from "lucide-react";

export const metadata = {
  title: "iMac 24” - Apple",
  description: "Color your world. Discover the all-in-one iMac supercharged by M4 with 24-inch 4.5K Retina display and studio microphones.",
};

export default function IMacPage() {
  return (
    <ProductDetailLayout
      id="imac"
      category="mac"
      name="iMac"
      badge="All-in-One Power"
      tagline="Color your world."
      description="The world’s best all-in-one desktop is now supercharged by the M4 chip. Brilliant 24-inch 4.5K Retina display, 12MP Center Stage camera, and 7 vibrant finishes with color-matched accessories."
      startingPrice="$1,299.00"
      monthlyPrice="$108.25/mo. for 12 mo."
      colors={[
        {
          name: "Blue",
          hex: "#5b84a6",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_c865fe2c9_2x.jpg",
        },
        {
          name: "Green",
          hex: "#567b67",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_c865fe2c9_2x.jpg",
        },
        {
          name: "Pink",
          hex: "#ce6471",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_c865fe2c9_2x.jpg",
        },
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_c865fe2c9_2x.jpg",
        },
      ]}
      specs={[
        { label: "Chip", value: "Apple M4 chip with up to 10-core CPU & GPU", icon: <Cpu className="w-5 h-5" /> },
        { label: "Display", value: "24” 4.5K Retina display with 500 nits brightness", icon: <Monitor className="w-5 h-5" /> },
        { label: "Camera", value: "12MP Center Stage camera with Desk View support", icon: <Camera className="w-5 h-5" /> },
        { label: "Audio", value: "Six-speaker sound system with force-cancelling woofers", icon: <Volume2 className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Phenomenal M4 Performance",
          description: "Browse with hundreds of tabs open, edit 4K family video streams, and harness Apple Intelligence tools with unmatched fluid responsiveness.",
          badge: "Speed",
        },
        {
          title: "Nano-Texture Glass Option",
          description: "Reduces glare and reflections while maintaining exceptional image quality and razor-sharp contrast in sunny rooms.",
          badge: "Display Option",
        },
        {
          title: "All-in-One Elegance",
          description: "Just 11.5 millimeters thin. Fits seamlessly onto any desk with a single braided power cable connecting magnetically.",
          badge: "Design",
        },
        {
          title: "Color-Matched Magic Accessories",
          description: "Magic Keyboard with Touch ID and Magic Mouse or Trackpad in colors tailored to complement your iMac.",
          badge: "Accessories",
        },
      ]}
    />
  );
}
