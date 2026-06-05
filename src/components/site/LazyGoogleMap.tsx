import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { GEO } from "@/lib/site";

const MAP_EMBED_URL = `https://www.google.com/maps?q=%C3%87a%C4%9Fda%C5%9F+Ocakba%C5%9F%C4%B1@${GEO.latitude},${GEO.longitude}&ll=${GEO.latitude},${GEO.longitude}&z=18&output=embed`;

export function LazyGoogleMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[360px] lg:min-h-[440px] bg-muted"
    >
      {shouldLoad ? (
        <iframe
          title="Çağdaş Ocakbaşı Konum"
          src={MAP_EMBED_URL}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground bg-muted/80">
          <MapPin className="w-8 h-8 text-primary animate-pulse" />
          <p className="text-sm font-medium">Harita yükleniyor…</p>
        </div>
      )}
    </div>
  );
}
