import { useState } from "react";

type Item = { name: string; desc: string; price: string };

const menu: Record<string, Item[]> = {
  Kebaplar: [
    { name: "Urfa Kebabı", desc: "Acısız özel kıyma, közlenmiş biber ve domates eşliğinde.", price: "₺320" },
    { name: "Adana Kebabı", desc: "Usta ellerden, hafif acılı klasik şişte kıyma kebabı.", price: "₺320" },
    { name: "Ciğer Şiş", desc: "Taze kuzu ciğeri, közde, soğan ve sumak ile.", price: "₺280" },
    { name: "Beyti Sarma", desc: "Yufkaya sarılı kıyma kebabı, yoğurt ve sos eşliğinde.", price: "₺360" },
  ],
  "Ara Sıcaklar": [
    { name: "İçli Köfte", desc: "El açması bulgur hamuru içinde baharatlı iç harcı.", price: "₺160" },
    { name: "Sigara Böreği", desc: "Çıtır yufka içinde beyaz peynir ve maydanoz.", price: "₺120" },
    { name: "Lahmacun", desc: "İnce hamur, taze kıyma harcı, taş fırında.", price: "₺90" },
  ],
  Mezeler: [
    { name: "Haydari", desc: "Süzme yoğurt, taze nane ve sarımsak.", price: "₺95" },
    { name: "Acılı Ezme", desc: "Domates, biber, soğan ve özel baharatlar.", price: "₺95" },
    { name: "Humus", desc: "Nohut püresi, tahin, zeytinyağı ve közlenmiş biber.", price: "₺110" },
  ],
  Tatlılar: [
    { name: "Künefe", desc: "Antep fıstıklı, taze peynirli, sıcak servis.", price: "₺180" },
    { name: "Şıllık Tatlısı", desc: "Şanlıurfa'ya özgü, cevizli yöresel tatlı.", price: "₺140" },
    { name: "Katmer", desc: "Antep fıstığı ve kaymak ile katmerli tatlı.", price: "₺190" },
  ],
  İçecekler: [
    { name: "Şalgam Suyu", desc: "Acılı veya acısız, kebabın olmazsa olmazı.", price: "₺40" },
    { name: "Mırra", desc: "Geleneksel Urfa kahvesi, fincanda.", price: "₺55" },
    { name: "Ayran", desc: "Ev yapımı, köpüklü taze ayran.", price: "₺35" },
  ],
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
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-warm scale-105"
                  : "bg-background text-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {menu[active].map((item) => (
            <article
              key={`${active}-${item.name}`}
              className="group bg-card rounded-2xl p-6 md:p-7 border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all animate-fade-in"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground flex-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="flex-1 border-b border-dashed border-border self-end mb-2" />
                <span className="font-display text-xl md:text-2xl font-bold text-primary">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
