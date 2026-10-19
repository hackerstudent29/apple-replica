import Link from "next/link";
import sitemapData from "@/sitemap.json";

export const metadata = {
  title: "Site Map - Apple",
  description: "Browse the complete directory of Apple products, services, support, retail, and corporate information.",
};

export default function SiteMapPage() {
  // Group routes by section
  const sections: { [key: string]: typeof sitemapData.routes } = {};
  sitemapData.routes.forEach((route) => {
    if (!sections[route.section]) {
      sections[route.section] = [];
    }
    sections[route.section].push(route);
  });

  return (
    <div className="w-full bg-[#fbfbfd] text-[#1d1d1f] py-16 px-4 sm:px-8">
      <div className="max-w-[1024px] mx-auto">
        <div className="border-b border-black/10 pb-8 mb-12">
          <h1 className="text-[34px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f]">
            Apple Site Map
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#86868b] mt-2">
            Complete inventory of Apple hardware, software, services, retail, and support resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(sections).map(([sectionName, routes]) => (
            <div key={sectionName} className="flex flex-col">
              <h2 className="text-[14px] font-semibold uppercase tracking-wider text-[#1d1d1f] mb-3 pb-2 border-b border-black/5">
                {sectionName}
              </h2>
              <ul className="space-y-2 text-[13px]">
                {routes.map((r, i) => {
                  const isExternal = r.path_or_url.startsWith("http");
                  const cleanPath = isExternal
                    ? r.path_or_url
                    : r.path_or_url.endsWith("/") && r.path_or_url.length > 1
                    ? r.path_or_url.slice(0, -1)
                    : r.path_or_url;

                  return (
                    <li key={i}>
                      <Link
                        href={cleanPath}
                        className="text-[#424245] hover:text-[#0071e3] transition-colors leading-snug block"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {r.page_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
