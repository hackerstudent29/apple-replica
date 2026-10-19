import ProductDetailLayout from "@/components/ProductDetailLayout";
import { Monitor, Wifi, Volume2, ShieldCheck, Sparkles, Home } from "lucide-react";

export const metadata = {
  title: "Apple HomeView - Apple",
  description: "Designed for life at home. Discover Apple HomeView with magnetic stand, high-fidelity spatial audio, and smart home command.",
};

export default function AppleHomeViewPage() {
  return (
    <ProductDetailLayout
      id="apple-homeview"
      category="tv-home"
      name="Apple HomeView"
      badge="New Family Member"
      tagline="Designed for life at home."
      description="The intelligent smart home hub and entertainment display. Combines a vibrant Liquid Retina screen with room-filling spatial audio, FaceTime Center Stage, and complete smart home controls."
      startingPrice="$499.00"
      monthlyPrice="$20.79/mo. for 24 mo."
      colors={[
        {
          name: "Starlight",
          hex: "#f0e5d3",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-homeview/a/promo_apple_homeview_animated_preorder__ekx0z2j7deeu_large.jpg",
        },
        {
          name: "Midnight",
          hex: "#2c3038",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-homeview/a/promo_apple_homeview_animated_preorder__ekx0z2j7deeu_large.jpg",
        },
        {
          name: "Sage",
          hex: "#8f9f91",
          imageSrc: "https://www.apple.com/v/homepage/images/apple-homeview/a/promo_apple_homeview_animated_preorder__ekx0z2j7deeu_large.jpg",
        },
      ]}
      specs={[
        { label: "Display", value: "10.9” Liquid Retina with anti-reflective coating", icon: <Monitor className="w-5 h-5" /> },
        { label: "Audio", value: "Custom high-excursion woofer with dual tweeters", icon: <Volume2 className="w-5 h-5" /> },
        { label: "Connectivity", value: "Thread, Matter, Wi-Fi 7, and Ultra Wideband", icon: <Wifi className="w-5 h-5" /> },
        { label: "Privacy", value: "Physical camera shutter switch and Secure Enclave", icon: <ShieldCheck className="w-5 h-5" /> },
      ]}
      features={[
        {
          title: "Your Home at a Glance",
          description: "Monitor live security cameras, control lights, climate, and locks with interactive widgets. Optimized for hands-free Siri commands across the room.",
          badge: "Home Hub",
        },
        {
          title: "Immersive Video & Music",
          description: "Stream Apple TV+, FaceTime with family using Center Stage camera tracking, and play your favorite spatial audio playlists throughout your home.",
          badge: "Entertainment",
        },
        {
          title: "Magnetic Floating Stand",
          description: "Effortlessly tilt, swivel, and rotate between portrait and landscape orientations with our precision balanced magnetic hinge.",
          badge: "Industrial Design",
        },
        {
          title: "Apple Intelligence for the Home",
          description: "Intelligent household reminders, smart recipe assistance, family schedule summaries, and automated ambient lighting scenes.",
          badge: "Intelligence",
        },
      ]}
    />
  );
}
