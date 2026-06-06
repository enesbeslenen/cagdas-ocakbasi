import { GEO } from "@/lib/site";

const MAP_EMBED_URL = `https://www.google.com/maps?q=%C3%87a%C4%9Fda%C5%9F+Ocakba%C5%9F%C4%B1@${GEO.latitude},${GEO.longitude}&ll=${GEO.latitude},${GEO.longitude}&z=18&output=embed`;

export function ContactMap() {
  return (
    <div className="relative w-full h-[360px] md:h-[440px] bg-muted">
      <iframe
        title="Çağdaş Ocakbaşı Konum"
        src={MAP_EMBED_URL}
        className="block w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
