import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Cpu, Monitor, Wifi, Camera, Sparkles, Feather } from "lucide-react";

export const metadata = {
  title: "iPad Air 11” and 13” - Apple",
  description: "Fresh Air. Now supercharged by M4 in two sizes: 11-inch and an all-new 13-inch Liquid Retina display.",
};

export default function IPadAirPage() {
  return (
    <ProductDetailLayout
      id="ipad-air"
      category="ipad"
      name="iPad Air"
      badge="Fresh Air"
      tagline="Now supercharged by M4."
      description="Now available in a redesigned 11-inch and an all-new 13-inch model. Featuring the supercharged M4 chip, landscape front camera, and blazing Wi-Fi 6E connectivity."
      startingPrice="$599.00"
      monthlyPrice="$49.91/mo. for 12 mo."
      colors={[
        {
          name: "Blue",
          hex: "#5b84a6",
          imageSrc: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
        },
        {
          name: "Purple",
          hex: "#bfb2c8",
          imageSrc: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
        },
        {
          name: "Starlight",
          hex: "#f0e5d3",
          imageSrc: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
        },
        {
          name: "Space Grey",
          hex: "#7d7e80",
          imageSrc: "https://www.apple.com/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg",
        },
      ]}
      specs={[
        { label: "Display Sizes", value: "11” or all-new 13” Liquid Retina display", icon: <Monitor className="w-5 h-5" /> },
        { label: "Chip", value: "Apple M4 chip with 8-core CPU & 10-core GPU", icon: <Cpu className="w-5 h-5" /> },
        { label: "Camera", value: "Landscape 12MP Ultra Wide with Center Stage", icon: <Camera className="w-5 h-5" /> },
        { label: "Compatibility", value: "Supports Apple Pencil Pro & Magic Keyboard", icon: <Sparkles className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Two Sizes. Infinite Versatility.",
          description: "Choose the ultra-portable 11-inch iPad Air or the expansive 13-inch model with 30% more screen space for multitasking.",
          badge: "Form Factors",
        },
        {
          title: "M4 Performance Boost",
          description: "Blisteringly fast CPU and GPU performance turns iPad Air into a powerful studio for music production, digital painting, and 3D modeling.",
          badge: "Apple Silicon",
        },
        {
          title: "Landscape Front Camera",
          description: "Positioned on the long edge so you are always looking straight at your colleagues during Zoom calls or FaceTime gatherings.",
          badge: "Video Calls",
        },
        {
          title: "Apple Pencil Pro Support",
          description: "Barrel roll, squeeze gestures, and precise haptics unlock an astonishingly fluid drawing and writing experience.",
          badge: "Creative Control",
        },
      ]}
    />
  );
}
