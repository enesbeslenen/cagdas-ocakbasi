type GalleryItem = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const items: GalleryItem[] = [
  {
    src: "/magaza-dis-gece.webp",
    alt: "Çağdaş Ocakbaşı gece görünümü — Şanlıurfa",
    objectPosition: "center center",
  },
  {
    src: "/tabela.jpg",
    alt: "Çağdaş Ocakbaşı tabela — Şanlıurfa",
    objectPosition: "center 35%",
  },
  {
    src: "/bahce.jpg",
    alt: "Çağdaş Ocakbaşı bahçe ve servis — Şanlıurfa",
    objectPosition: "center 40%",
  },
  {
    src: "/magaza-dis-gorunum-gallery.jpg",
    alt: "Çağdaş Ocakbaşı mağaza dış görünüm — Şanlıurfa",
    objectPosition: "center 45%",
  },
  {
    src: "/yemek-kusbasi-sis.jpg",
    alt: "Çağdaş Ocakbaşı kuşbaşı şiş — Şanlıurfa",
    objectPosition: "center 72%",
  },
  { src: "/yemek-adana-kebap.jpg", alt: "Adana kebap — Şanlıurfa ocakbaşı" },
  { src: "/yemek-patlican-kebabi.jpg", alt: "Patlıcanlı kebap — Çağdaş Ocakbaşı" },
  {
    src: "/yemek-kusbasi-sis-2.jpg",
    alt: "Kuşbaşı şiş ızgara — Şanlıurfa restoran",
    objectPosition: "center 68%",
  },
  { src: "/yemek-karisik-izgara-tabak.jpg", alt: "Karışık ızgara tabağı — ocakbaşı menü" },
  {
    src: "/yemek-karisik-izgara-tepsi.jpg",
    alt: "Karışık ızgara tepsi — Şanlıurfa kebap",
    objectPosition: "center 78%",
  },
  { src: "/yemek-sillik-tatlisi.jpg", alt: "Yöresel şıllık tatlısı — Çağdaş Ocakbaşı" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((it, index) => (
            <figure
              key={it.src}
              className="site-photo-frame group cursor-pointer ring-1 ring-border/60 hover:ring-2 hover:ring-primary transition-all bg-muted"
            >
              <img
                src={it.src}
                alt={it.alt}
                width={800}
                height={600}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="site-photo transition-transform duration-700 group-hover:scale-105"
                style={it.objectPosition ? { objectPosition: it.objectPosition } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-5 pointer-events-none">
                <figcaption className="text-white font-display text-sm md:text-lg leading-snug">
                  {it.alt}
                </figcaption>
              </div>
              <div className="absolute inset-0 border-2 border-secondary rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
