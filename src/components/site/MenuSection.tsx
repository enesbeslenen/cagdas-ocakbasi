import { useState } from "react";
import {
  CakeSlice,
  ChefHat,
  Flame,
  GlassWater,
  Sandwich,
  type LucideIcon,
} from "lucide-react";

const menu: Record<string, string[]> = {
  "Izgara Çeşitleri": [
    "Kuşbaşı Şiş",
    "Ciğer Şiş",
    "Terbiyesiz Tavuk",
    "Terbiyeli Tavuk",
    "Yürek Şiş",
    "Dalak Şiş",
    "Kanat Şiş",
  ],
  "Kebap Çeşitleri": [
    "Adana Kebap",
    "Urfa Kebap",
    "Patlıcanlı Kebap",
    "Domatesli Kebap",
    "Haşhaş Kebap",
    "Birecik Kebap",
    "Siverek Kebap",
  ],
  Tatlılar: [
    "Cevizli Şıllık Tatlısı Tepsi",
    "Cevizli Kaymaklı Şıllık Tatlısı Tepsi",
    "Fıstıklı Şıllık Tatlısı Tepsi",
    "Fıstıklı Kaymaklı Şıllık Tatlısı Tepsi",
    "Sade Dondurma",
  ],
  "Pide - Lahmacun": [
    "Lahmacun",
    "Kaşarlı Pide",
    "Kuşbaşılı Pide",
    "Kuşbaşılı Kaşarlı Pide",
  ],
  Aparatifler: ["İçli Köfte"],
  İçecekler: [
    "Su",
    "Yayık Ayran",
    "Kola",
    "Fanta",
    "Sprite",
    "Kutu Ayran",
    "Şalgam",
    "Soda",
    "Meyve Suyu",
    "Ice Tea",
  ],
};

type MenuImage = {
  src: string;
  objectPosition?: string;
  /** Açık arka planlı ürünler: multiply; koyu arka planlı ürün görselleri: darkBackground */
  blendMode?: "multiply";
  darkBackground?: boolean;
};

/** Yerel restoran ve ürün fotoğrafları. */
const menuImages: Record<string, MenuImage> = {
  "Kuşbaşı Şiş": { src: "/menu/kuşbaşı-şiş.png", objectPosition: "center 72%" },
  "Ciğer Şiş": { src: "/menu/ciğer-şiş.png", objectPosition: "center 55%" },
  "Terbiyesiz Tavuk": { src: "/menu/terbiyesiz-tavuk.png", objectPosition: "center 58%" },
  "Terbiyeli Tavuk": { src: "/menu/terbiyeli-tavuk.png", objectPosition: "62% 42%" },
  "Yürek Şiş": { src: "/menu/yürek-şiş.png", objectPosition: "center 55%" },
  "Dalak Şiş": { src: "/menu/dalak-şiş.jpeg", objectPosition: "center 22%" },
  "Kanat Şiş": { src: "/menu/kanat-şiş.jpeg", objectPosition: "center 55%" },
  "Adana Kebap": { src: "/menu/adana-kebap.png", objectPosition: "center 65%" },
  "Urfa Kebap": { src: "/menu/urfa-kebap.png", objectPosition: "center 65%" },
  "Patlıcanlı Kebap": { src: "/menu/patlıcanlı-kebap.png", objectPosition: "center 60%" },
  "Domatesli Kebap": { src: "/menu/domatesli-kebap.png", objectPosition: "center 68%" },
  "Haşhaş Kebap": { src: "/menu/haşhaş-menü.png", objectPosition: "center 65%" },
  "Birecik Kebap": { src: "/menu/birecik-kebap.png", objectPosition: "center 78%" },
  "Siverek Kebap": { src: "/menu/siverek-kebap.png", objectPosition: "center 65%" },
  "Cevizli Şıllık Tatlısı Tepsi": { src: "/menu/cevizli-şıllık-tatlısı-tepsi.jpg" },
  "Cevizli Kaymaklı Şıllık Tatlısı Tepsi": {
    src: "/menu/cevizli-kaymaklı-şıllık-tatlısı-tepsi.jpg",
  },
  "Fıstıklı Şıllık Tatlısı Tepsi": { src: "/menu/fıstıklı-şıllık-tatlısı-tepsi.jpg" },
  "Fıstıklı Kaymaklı Şıllık Tatlısı Tepsi": {
    src: "/menu/fıstıklı-kaymaklı-şıllık-tatlısı-tepsi.jpg",
  },
  "Sade Dondurma": { src: "/menu/sade-dondurma.png", objectPosition: "center 88%" },
  Lahmacun: { src: "/menu/lahmacun.png" },
  "Kaşarlı Pide": { src: "/menu/kasarli-pide.png" },
  "Kuşbaşılı Pide": { src: "/menu/kusbasili-pide.png" },
  "Kuşbaşılı Kaşarlı Pide": { src: "/menu/kusbasili-kasarli-pide.png" },
  "İçli Köfte": { src: "/menu/icli-kofte.png" },
  Su: { src: "/menu/su.png" },
  "Yayık Ayran": { src: "/menu/yayik-ayran.png" },
  "Kutu Ayran": { src: "/menu/kutu-ayran.png" },
  Kola: { src: "/menu/kola.png" },
  Fanta: { src: "/menu/fanta.png" },
  Sprite: { src: "/menu/sprite.png" },
  Şalgam: { src: "/menu/salgam.png" },
  Soda: { src: "/menu/soda.png" },
  "Meyve Suyu": { src: "/menu/meyve-suyu.png" },
  "Ice Tea": { src: "/menu/ice-tea.png" },
};

const drinkItems = new Set(menu["İçecekler"]);

/** Tüm yemek kartlarında sabit görsel yüksekliği. */
const MENU_IMAGE_HEIGHT = "h-44 sm:h-48";

const categoryIcons: Record<string, LucideIcon> = {
  "Izgara Çeşitleri": Flame,
  "Kebap Çeşitleri": Flame,
  Tatlılar: CakeSlice,
  "Pide - Lahmacun": Sandwich,
  Aparatifler: ChefHat,
  İçecekler: GlassWater,
};

const categories = Object.keys(menu);

export function MenuSection() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-secondary font-semibold uppercase tracking-[0.25em] text-sm">
            Lezzet Listesi
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ocaktan Sofranıza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Geleneksel tariflere sadık kalarak hazırladığımız özenli menümüzü keşfedin.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 reveal">
          {categories.map((c) => {
            const TabIcon = categoryIcons[c];
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-warm scale-105"
                    : "bg-background text-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                <TabIcon className="w-4 h-4 shrink-0" />
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {menu[active].map((name) => {
            const image = menuImages[name];
            const isDrink = drinkItems.has(name);

            return (
              <article
                key={`${active}-${name}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all animate-fade-in"
              >
                {image && (
                  <div
                    className={`relative ${MENU_IMAGE_HEIGHT} overflow-hidden ${
                      isDrink
                        ? `flex items-center justify-center px-3 py-2 ${
                            image.darkBackground ? "bg-neutral-900" : "bg-white"
                          }`
                        : "bg-muted"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`${name} — Çağdaş Ocakbaşı Şanlıurfa menü`}
                      loading="lazy"
                      decoding="async"
                      className={
                        isDrink
                          ? `max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105${
                              image.darkBackground ? "" : " mix-blend-multiply"
                            }`
                          : "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }
                      style={
                        image.objectPosition
                          ? { objectPosition: image.objectPosition }
                          : undefined
                      }
                    />
                  </div>
                )}

                <div className="px-4 py-4 md:px-5 md:py-5 text-center">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
