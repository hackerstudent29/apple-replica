import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Compass, BatteryCharging, Shield, Activity, Sparkles, Watch } from "lucide-react";

export const metadata = {
  title: "Apple Watch Ultra 4 - Apple",
  description: "A battery you can't outrun. Discover Apple Watch Ultra 4 with aerospace titanium, 3000-nit display, and precision dual-frequency GPS.",
};

export default function AppleWatchUltra4Page() {
  return (
    <ProductDetailLayout
      id="apple-watch-ultra-4"
      category="watch"
      name="Apple Watch Ultra 4"
      badge="Extreme Endurance"
      tagline="A battery you can’t outrun."
      description="The ultimate sports and adventure watch. Crafted with aerospace-grade natural titanium, sapphire crystal face, dual-frequency GPS, and up to 72 hours of battery life."
      startingPrice="$799.00"
      monthlyPrice="$66.58/mo. for 12 mo."
      colors={[
        {
          name: "Natural Titanium",
          hex: "#9a958e",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4__e4r3qertak2u_large.jpg",
        },
        {
          name: "Black Titanium",
          hex: "#28292b",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4__e4r3qertak2u_large.jpg",
        },
      ]}
      specs={[
        { label: "Case", value: "49mm aerospace grade titanium with raised bezel", icon: <Shield className="w-5 h-5" /> },
        { label: "Display", value: "Sapphire crystal Always-On Retina up to 3000 nits", icon: <Watch className="w-5 h-5" /> },
        { label: "GPS", value: "Precision dual-frequency GPS (L1 and L5)", icon: <Compass className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 36 hours regular use, 72 hours low power", icon: <BatteryCharging className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Unrivaled Battery Endurance",
          description: "Tackle a multi-day backcountry trek or complete a full Ironman triathlon without worrying about battery conservation.",
          badge: "Endurance",
        },
        {
          title: "Customizable Action Button",
          description: "Precision tactile control to instantly start a workout, mark a GPS compass waypoint, or turn on the 86-decibel emergency siren.",
          badge: "Control",
        },
        {
          title: "EN13319 Dive Computer",
          description: "Certified for recreational scuba diving down to 40 meters with oceanic depth gauge, water temperature sensor, and dive log integration.",
          badge: "Aquatic",
        },
        {
          title: "Night Mode with Ambient Light",
          description: "Ultra-bright 3000-nit display automatically transitions to deep monochrome red in low light to preserve night vision.",
          badge: "Visibility",
        },
      ]}
    />
  );
}
