import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Heart, Activity, Battery, ShieldCheck, Sparkles, Watch } from "lucide-react";

export const metadata = {
  title: "Apple Watch Series 12 - Apple",
  description: "The most accurate heart rate sensing in a wearable. Explore Apple Watch Series 12 with advanced health metrics, thinner bezels, and fast charging.",
};

export default function AppleWatchSeries12Page() {
  return (
    <ProductDetailLayout
      id="apple-watch-series-12"
      category="watch"
      name="Apple Watch Series 12"
      badge="Health Pioneer"
      tagline="The most accurate heart rate sensing in a wearable."
      description="Featuring breakthrough optical health sensors, blood pressure trend monitoring, sleep apnea detection, and the brightest Always-On Retina display ever built."
      startingPrice="$399.00"
      monthlyPrice="$33.25/mo. for 12 mo."
      colors={[
        {
          name: "Dark Bronze Aluminum",
          hex: "#5c4d43",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
        },
        {
          name: "Midnight",
          hex: "#1d232a",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
        },
        {
          name: "Starlight",
          hex: "#f0e5d3",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
        },
        {
          name: "Silver",
          hex: "#e2e2e4",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12__gnlprtt8526a_large.jpg",
        },
      ]}
      specs={[
        { label: "Sensor Array", value: "Next-gen optical heart sensor + ECG app", icon: <Heart className="w-5 h-5" /> },
        { label: "Display", value: "Wide-angle OLED Always-On Retina up to 2000 nits", icon: <Watch className="w-5 h-5" /> },
        { label: "Durability", value: "WR50 water resistance and IP6X dust resistance", icon: <ShieldCheck className="w-5 h-5" /> },
        { label: "Battery", value: "Up to 24 hours normal use, fast charge to 80% in 30m", icon: <Battery className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Breakthrough Heart Sensing",
          description: "Engineered with dual-frequency photodiode sensors that capture heart rate metrics with medical precision, even during intense workouts.",
          badge: "Clinical Accuracy",
        },
        {
          title: "Sleep Apnea & Vital Tracking",
          description: "Continuous nocturnal breathing disturbance tracking alerts you to potential moderate or severe sleep apnea so you can seek clinical advice.",
          badge: "Wellness",
        },
        {
          title: "Thinnest Design Yet",
          description: "Nearly 10% thinner than previous generations with 30% more active screen area thanks to precision curved micro-borders.",
          badge: "Industrial Design",
        },
        {
          title: "watchOS 12 Intelligence",
          description: "Smart Stack automatically surfaces relevant widgets at the perfect moment, from weather alerts to live transit updates.",
          badge: "watchOS",
        },
      ]}
    />
  );
}
