import kebab from "@/assets/gallery-kebab.jpg";
import fire from "@/assets/gallery-fire.jpg";
import interior from "@/assets/gallery-interior.jpg";
import meze from "@/assets/gallery-meze.jpg";
import lahmacun from "@/assets/gallery-lahmacun.jpg";
import kunefe from "@/assets/gallery-kunefe.jpg";
import ocak from "@/assets/gallery-ocak.jpg";
import cay from "@/assets/gallery-cay.jpg";

const items = [
  { src: kebab, alt: "Adana kebabı sunumu", span: "md:row-span-1" },
  { src: fire, alt: "Ocakbaşı ateşi", span: "md:row-span-2" },
  { src: interior, alt: "Mekan iç tasarımı", span: "md:row-span-1" },
  { src: meze, alt: "Meze tabağı", span: "md:row-span-1" },
  { src: lahmacun, alt: "Lahmacun ve pide", span: "md:row-span-2" },
  { src: kunefe, alt: "Künefe tatlısı", span: "md:row-span-1" },
  { src: ocak, alt: "Mangal keyfi", span: "md:row-span-1" },
  { src: cay, alt: "Türk çayı", span: "md:row-span-1" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-[220px] md:grid-flow-dense">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal relative overflow-hidden rounded-2xl group cursor-pointer ring-1 ring-border hover:ring-2 hover:ring-primary transition-all min-h-[160px] md:min-h-0 h-full ${it.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
