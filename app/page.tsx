import HeroUnit from "@/components/HeroUnit";
import PromoGrid from "@/components/PromoGrid";
import TvGallery from "@/components/TvGallery";
import RibbonBanner from "@/components/RibbonBanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Top Banner Ribbon */}
      <RibbonBanner />

      {/* HERO 1: iPhone Duo with Official Apple Inline Video & Media */}
      <HeroUnit
        id="iphone-duo"
        theme="light"
        headline="iPhone Duo"
        subhead="Hello, hello. Hello, Hello. hello."
        callout="Available starting 10.23"
        primaryCtaText="Learn more"
        secondaryCtaText="Pre-order"
        videoSrc="https://www.apple.com/105/media/us/homepage/2026/dfe63e15-1d50-4ed5-bffc-c121fa0b8626/anim/hero/large_2x.mp4"
        imageSrc="https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_animated_preorder__c10i2x3qhi4i_large_2x.jpg"
        imageAlt="Held by hands, iPhone Duo, Star White color, outer display shown with iOS widgets"
      />

      {/* HERO 2: iPhone 18 Pro (Dark Mode) */}
      <HeroUnit
        id="iphone-18-pro"
        theme="dark"
        headline="iPhone 18 Pro"
        subhead="Pro further."
        primaryCtaText="Learn more"
        secondaryCtaText="Buy"
        imageSrc="https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_large_2x.jpg"
        imageAlt="iPhone 18 Pro in burgundy dark red finish with Pro Fusion camera system"
      />

      {/* HERO 3: Apple Card */}
      <HeroUnit
        id="apple-card"
        theme="light"
        headline="Apple Card"
        subhead="Get up to 3% Daily Cash back with every purchase."
        primaryCtaText="Learn more"
        secondaryCtaText="Apply now"
        logoSrc="https://www.apple.com/v/homepage/images/logos/apple-card/a/hero_logo_apple_card__dnd4gomtgai6_large.png"
        imageSrc="https://www.apple.com/v/homepage/images/apple-card/a/hero_apple_card__dpuxs0gw5daq_large_2x.jpg"
        imageAlt="Apple Card, front, titanium card with laser-etched name"
      />

      {/* PROMO GRID: 6 Cards in 2 Columns */}
      <PromoGrid />

      {/* ENDLESS ENTERTAINMENT: Apple TV+ Gallery */}
      <TvGallery />
    </div>
  );
}
