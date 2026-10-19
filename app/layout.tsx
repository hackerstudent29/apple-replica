import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalNav from "@/components/GlobalNav";
import RibbonBanner from "@/components/RibbonBanner";
import GlobalFooter from "@/components/GlobalFooter";
import RouteProgressBar from "@/components/RouteProgressBar";
import PageTransition from "@/components/PageTransition";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Apple",
  description:
    "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.",
  icons: {
    icon: "https://www.apple.com/favicon.ico",
    apple: "https://www.apple.com/apple-touch-icon.png",
  },
  openGraph: {
    title: "Apple",
    description:
      "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.",
    url: "https://www.apple.com/",
    siteName: "Apple",
    images: [
      {
        url: "https://www.apple.com/ac/structured-data/images/open_graph_logo.png",
        width: 1200,
        height: 630,
        alt: "Apple",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#161617",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-white text-[#1d1d1f] antialiased selection:bg-[#0071e3] selection:text-white">
        <CartProvider>
          <RouteProgressBar />
          <SmoothScroll>
            <GlobalNav />
            <div className="pt-[44px] min-h-screen flex flex-col justify-between">
              <main className="flex-1 flex flex-col">
                <PageTransition>{children}</PageTransition>
              </main>
              <GlobalFooter />
            </div>
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
