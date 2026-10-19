"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When pathname changes, briefly trigger a swift progress indication
    setLoading(true);
    setProgress(30);

    const t1 = setTimeout(() => {
      setProgress(85);
    }, 60);

    const t2 = setTimeout(() => {
      setProgress(100);
      const t3 = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      return () => clearTimeout(t3);
    }, 180);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#0071e3] via-[#af52de] to-[#0071e3] transition-all duration-200 ease-out shadow-[0_0_8px_rgba(0,113,227,0.8)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? "width 150ms ease-out, opacity 200ms ease-out" : "width 150ms ease-out",
        }}
      />
    </div>
  );
}
