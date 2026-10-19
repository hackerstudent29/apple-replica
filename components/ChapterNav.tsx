"use client";

import Link from "next/link";

export interface ChapterItem {
  id: string;
  name: string;
  href: string;
  isNew?: boolean;
  imgSrc?: string;
  iconSvg?: React.ReactNode;
}

export default function ChapterNav({ items }: { items: ChapterItem[] }) {
  return (
    <nav
      aria-label="Chapter Navigation"
      className="w-full bg-[#fbfbfd] border-b border-black/5 overflow-x-auto no-scrollbar py-3.5 select-none"
    >
      <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-start md:justify-center space-x-7 sm:space-x-9 min-w-max">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center group text-center"
          >
            <div className="h-[46px] w-[50px] flex items-center justify-center transition-transform group-hover:scale-105">
              {item.imgSrc ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : item.iconSvg ? (
                <div className="w-9 h-9 text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors flex items-center justify-center">
                  {item.iconSvg}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg border border-black/20 flex items-center justify-center text-xs font-semibold text-[#86868b] group-hover:border-[#0071e3] group-hover:text-[#0071e3]">
                  {item.name[0]}
                </div>
              )}
            </div>
            <span className="text-[12px] font-normal tracking-[-0.01em] text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mt-1.5 leading-tight">
              {item.name}
            </span>
            {item.isNew && (
              <span className="text-[10px] text-[#f56300] font-normal leading-none mt-0.5">
                New
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
