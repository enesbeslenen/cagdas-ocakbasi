type GalleryItem = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const items: GalleryItem[] = [
  {
    src: "/yemek-kusbasi-sis.jpeg",
    alt: "Çağdaş Ocakbaşı kuşbaşı şiş — Şanlıurfa",
    objectPosition: "center 72%",
  },
  { src: "/yemek-adana-kebap.jpeg", alt: "Adana kebap — Şanlıurfa ocakbaşı" },
  { src: "/yemek-patlican-kebabi.jpeg", alt: "Patlıcanlı kebap — Çağdaş Ocakbaşı" },
  {
    src: "/yemek-kusbasi-sis-2.jpeg",
    alt: "Kuşbaşı şiş ızgara — Şanlıurfa restoran",
    objectPosition: "center 68%",
  },
  { src: "/yemek-karisik-izgara-tabak.jpeg", alt: "Karışık ızgara tabağı — ocakbaşı menü" },
  {
    src: "/yemek-karisik-izgara-tepsi.jpeg",
    alt: "Karışık ızgara tepsi — Şanlıurfa kebap",
    objectPosition: "center 78%",
  },
  { src: "/yemek-sillik-tatlisi.jpeg", alt: "Yöresel şıllık tatlısı — Çağdaş Ocakbaşı" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-primary font-semibold uppercase tracking-[0.25em] text-sm">
            Galeri
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ateşten Sofraya
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mutfağımızdan, ocağımızdan ve sıcacık mekanımızdan kareler.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 md:auto-rows-[200px]">
          {items.map((it) => (
            <figure
              key={it.src}
              className="reveal relative overflow-hidden rounded-2xl group cursor-pointer ring-1 ring-border hover:ring-2 hover:ring-primary transition-all min-h-[160px] md:min-h-0 h-full"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={it.objectPosition ? { objectPosition: it.objectPosition } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <figcaption className="text-white font-display text-lg">{it.alt}</figcaption>
              </div>
              <div className="absolute inset-0 border-2 border-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
