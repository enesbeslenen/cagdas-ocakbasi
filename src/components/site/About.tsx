import interiorImg from "@/assets/gallery-interior.jpg";
import { Flame, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: Flame,
    title: "Geleneksel Ocakbaşı",
    desc: "Urfa'nın köklü kebap kültürünü, usta ellerle ve gerçek mangal ateşiyle yaşatıyoruz.",
  },
  {
    icon: Heart,
    title: "Özenli Lezzet",
    desc: "Taze malzeme, yöresel baharatlar ve her tabakta aynı sıcaklık ve samimiyet.",
  },
  {
    icon: Users,
    title: "Aile Ortamı",
    desc: "Yıllardır misafirlerimizi ailemiz gibi ağırlıyor; sofrada birlikte güzel anılar biriktiriyoruz.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[520px]">
              <img
                src={interiorImg}
                alt="Çağdaş Ocakbaşı mekan içi"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-warm">
              <p className="font-display text-3xl font-bold leading-none">20+</p>
              <p className="text-sm font-medium mt-1 opacity-90">Yıllık Deneyim</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="reveal mb-8">
              <span className="text-primary font-semibold uppercase tracking-[0.25em] text-sm">
                Hakkımızda
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-5">
                Şanlıurfa'nın Kalbinde Bir Lezzet Evi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Çağdaş Ocakbaşı, Şanlıurfa'nın en köklü lezzet duraklarından biridir. Yıllardır
                misafirlerimize geleneksel ocakbaşı kültürünü, samimi bir atmosferde sunuyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Adana'dan Urfa'ya, ciğerden künefeye kadar geniş menümüzle her damak zevkine hitap
                ediyor; her tabağı ustalıkla, ateşin sıcaklığıyla hazırlıyoruz.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
