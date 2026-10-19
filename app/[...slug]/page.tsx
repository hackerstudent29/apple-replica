import { notFound } from "next/navigation";
import Link from "next/link";
import sitemapData from "@/sitemap.json";
import { ChevronRight, ArrowLeft, ExternalLink, ShieldCheck, Sparkles, Box, Info } from "lucide-react";

interface PageProps {
  params: {
    slug: string[];
  };
}

const DEDICATED_ROUTES = new Set([
  "",
  "accessibility",
  "accessories",
  "account",
  "airpods",
  "airpods-5",
  "airpods-pro",
  "apple-card",
  "apple-homeview",
  "apple-intelligence",
  "apple-vision-pro",
  "apple-watch-series-12",
  "apple-watch-ultra-4",
  "bag",
  "cart",
  "entertainment",
  "environment",
  "imac",
  "ipad",
  "ipad-air",
  "ipad-pro",
  "iphone",
  "iphone-18-pro",
  "iphone-duo",
  "iphone/compare",
  "mac",
  "mac-mini",
  "mac/compare",
  "macbook-air",
  "macbook-pro",
  "newsroom",
  "os/ios",
  "os/macos",
  "os/visionos",
  "os/watchos",
  "privacy",
  "retail",
  "retail/geniusbar",
  "services",
  "shop/apple-upgrade",
  "shop/trade-in",
  "signin",
  "sitemap",
  "store",
  "support",
  "today",
  "tv-home",
  "watch",
]);

// Generate static routes from sitemap.json for any subpaths not handled by dedicated static route folders
export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  sitemapData.routes.forEach((route) => {
    if (!route.path_or_url.startsWith("http") && route.path_or_url !== "/") {
      const trimmed = route.path_or_url.replace(/^\/+|\/+$/g, "");
      if (trimmed && !DEDICATED_ROUTES.has(trimmed)) {
        const segments = trimmed.split("/");
        params.push({ slug: segments });
      }
    }
  });

  return params;
}

export default function CatchAllSitemapRoute({ params }: PageProps) {
  const currentPath = "/" + params.slug.join("/");

  // Find route in sitemapData
  const matchedRoute = sitemapData.routes.find((r) => {
    const routeClean = r.path_or_url.replace(/\/+$/, "");
    return routeClean === currentPath || r.path_or_url === currentPath + "/";
  });

  if (!matchedRoute) {
    notFound();
  }

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] min-h-[75vh] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#86868b] mb-8">
          <Link href="/" prefetch={true} className="hover:text-[#0071e3] transition-colors">
            Apple
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/sitemap" prefetch={true} className="hover:text-[#0071e3] transition-colors">
            {matchedRoute.section}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1d1d1f] font-medium">{matchedRoute.page_name}</span>
        </nav>

        {/* Header Block */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full inline-block mb-3">
            {matchedRoute.section} Overview
          </span>
          <h1 className="text-[36px] sm:text-[52px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.08]">
            {matchedRoute.page_name}
          </h1>
          <p className="text-[17px] sm:text-[20px] text-[#6e6e73] mt-3 max-w-2xl font-normal leading-relaxed">
            Official Apple specifications, features, and consumer directory for {matchedRoute.page_name}.
          </p>
        </div>

        {/* Content Body Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-black/5 shadow-sm space-y-6">
            <h2 className="text-[24px] font-semibold text-[#1d1d1f]">About this section</h2>
            <p className="text-[15px] text-[#424245] leading-relaxed">
              This page provides authorized access to Apple’s {matchedRoute.page_name} services, hardware integrations, and documentation as specified in the official Apple sitemap directory.
            </p>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] flex items-start space-x-3 text-xs text-[#6e6e73]">
              <Info className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1d1d1f] block mb-0.5">Sitemap Registry</span>
                <span>Discovery path: {matchedRoute.crawl_result}. Canonical destination verified at {matchedRoute.url}.</span>
              </div>
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={matchedRoute.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-xs font-medium inline-flex items-center space-x-1.5 transition-colors"
              >
                <span>Open Reference Live Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/sitemap"
                prefetch={true}
                className="text-[#0071e3] text-xs font-medium hover:underline"
              >
                Return to Site Map Directory
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-4">Quick Links</h3>
              <ul className="space-y-3 text-xs text-[#0071e3]">
                <li>
                  <Link href="/store" prefetch={true} className="hover:underline block">
                    Shop Apple Store Online
                  </Link>
                </li>
                <li>
                  <Link href="/support" prefetch={true} className="hover:underline block">
                    Apple Support & Help
                  </Link>
                </li>
                <li>
                  <Link href="/retail" prefetch={true} className="hover:underline block">
                    Find Nearest Apple Store
                  </Link>
                </li>
                <li>
                  <Link href="/apple-intelligence" prefetch={true} className="hover:underline block">
                    Apple Intelligence Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-black/10 text-[11px] text-[#86868b]">
              Apple Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
