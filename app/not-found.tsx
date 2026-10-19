import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-white text-[#1d1d1f] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-[34px] sm:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-4">
          The page you’re looking for can’t be found.
        </h1>
        <p className="text-[17px] text-[#6e6e73] mb-8 font-normal">
          Check the web address you entered to make sure it’s correct, or try searching for what you’re looking for.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative mb-10">
          <input
            type="text"
            placeholder="Search apple.com"
            className="w-full pl-11 pr-4 py-3 rounded-full border border-black/15 bg-[#f5f5f7] text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
          />
          <Search className="w-4 h-4 text-[#86868b] absolute left-4 top-3.5" />
        </div>

        {/* Helpful links */}
        <div className="border-t border-black/10 pt-8 text-sm space-y-3">
          <p className="font-semibold text-xs text-[#86868b] uppercase tracking-wider">
            Helpful Starting Points
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[#0071e3]">
            <Link href="/" className="hover:underline flex items-center">
              <span>Homepage</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
            <Link href="/sitemap" className="hover:underline flex items-center">
              <span>Apple Site Map</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
            <Link href="/store" className="hover:underline flex items-center">
              <span>Store</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
            <Link href="/support" className="hover:underline flex items-center">
              <span>Support</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
