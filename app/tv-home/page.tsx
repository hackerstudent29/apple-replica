"use client";

import HeroUnit from "@/components/HeroUnit";
import RibbonBanner from "@/components/RibbonBanner";
import FeatureCarousel, { FeatureCardItem } from "@/components/FeatureCarousel";
import WhyAppleSection from "@/components/WhyAppleSection";
import TvGallery from "@/components/TvGallery";

const HOME_FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "sound",
    category: "Acoustic Engineering",
    title: "Pro-level acoustics in every room.",
    subtitle: "High-excursion woofer with beamforming tweeters.",
    description:
      "HomePod delivers rich, deep bass and stunning high-frequency detail. Real-time room sensing automatically adapts acoustics to your environment for the best possible sound.",
    imageSrc: "https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg",
    theme: "light",
  },
  {
    id: "cinema",
    category: "Apple TV 4K",
    title: "The Apple experience. Cinematic in every sense.",
    subtitle: "4K Dolby Vision, HDR10+, and Dolby Atmos.",
    description:
      "Apple TV 4K brings together Apple TV+, Apple Music, and Apple Arcade with all your favorite streaming apps in our highest video and audio quality yet.",
    imageSrc: "https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg",
    theme: "light",
  },
  {
    id: "smart-home",
    category: "Home Automation",
    title: "A smarter home at your command.",
    subtitle: "Control lights, locks, and climate with Siri.",
    description:
      "Set automations that run when you arrive home or go to bed. Apple HomeKit and Matter compatibility let you manage all your smart devices with total security and end-to-end privacy.",
    imageSrc: "https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg",
    theme: "light",
  },
];

export default function TvHomePage() {
  return (
    <div className="w-full bg-white">
      {/* Top Ribbon */}
      <RibbonBanner />

      {/* Hero 1: Apple HomeView with Apple Official Video */}
      <HeroUnit
        id="homeview"
        theme="light"
        headline="Apple HomeView"
        subhead="Designed for life at home."
        callout="Available from 13 November • Pre-order now"
        primaryCtaText="Learn more"
        secondaryCtaText="Pre-order"
        logoSrc="https://www.apple.com/v/homepage/images/logos/apple-homeview/a/hero_logo_apple_homeview__supys4dqs92y_large.png"
        videoSrc="https://www.apple.com/105/media/in/homepage/2026/5f2d3dbd-c471-43f5-9eeb-ff58c55ec152/anim/hero/large_2x.mp4"
        imageSrc="https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg"
        imageAlt="Apple HomeView"
      />

      {/* Hero 2: Apple TV 4K */}
      <HeroUnit
        id="appletv4k"
        theme="light"
        headline="Apple TV 4K"
        subhead="The Apple experience. Cinematic in every sense."
        callout="From ₹14900.00*"
        primaryCtaText="Learn more"
        secondaryCtaText="Buy"
        imageSrc="https://www.apple.com/in/homepage/images/apple-homeview/hero_apple_homeview_animated_preorder__c2imtprr2qy6_large.jpg"
        imageAlt="Apple TV 4K"
      />

      {/* Get to know Home Feature Carousel */}
      <FeatureCarousel
        title="Get to know TV & Home."
        subtitle="Transform your living room into a private cinema and intelligent sanctuary."
        items={HOME_FEATURE_CARDS}
      />

      {/* Why Apple Section */}
      <WhyAppleSection productName="TV & Home" />

      {/* Endless TV Gallery */}
      <TvGallery />
    </div>
  );
}
