import { Flame } from "lucide-react";

const HERO_IMAGE = "/magaza-dis-gorunum.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Çağdaş Ocakbaşı mağaza dış görünüm — Şanlıurfa"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6 reveal">
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide">Şanlıurfa • Geleneksel Ocakbaşı</span>
        </div>

        <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
          Şanlıurfa'nın Eşsiz <br />
          Lezzet Durağı: <span className="text-gradient-brand">Çağdaş Ocakbaşı</span>
        </h1>

        <p className="reveal mx-auto max-w-2xl text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
          Geleneksel ocakbaşı kültürünü, usta ellerden çıkan eşsiz tatlarla deneyimleyin.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold shadow-fresh hover:scale-105 hover:bg-secondary/90 transition-all"
          >
            Menüyü İncele
          </a>
          <a
            href="#rezervasyon"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-warm hover:scale-105 hover:bg-primary/90 transition-all"
          >
            Masa Ayırt
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase">
        Aşağı kaydır
      </div>
    </section>
  );
}
