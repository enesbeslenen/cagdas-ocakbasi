import { Flame, Heart, Star } from "lucide-react";
import { INSTAGRAM_URL, PHONE_DISPLAY, SITE_NAME } from "@/lib/site";

const highlights = [
  {
    icon: Flame,
    title: "2005'ten Beri",
    desc: "Şanlıurfa'da ocakbaşı geleneğini aynı özenle sürdürüyoruz.",
  },
  {
    icon: Star,
    title: "Kuşbaşı Şiş",
    desc: "Misafirlerimizin en çok tercih ettiği özel lezzetimiz.",
  },
  {
    icon: Heart,
    title: "Şıllık Tatlısı",
    desc: "Cevizli ve kaymaklı yöresel tatlılarımızla sofranızı tamamlayın.",
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-5 space-y-5">
          <a href="#home" className="inline-flex items-baseline gap-1 font-display text-2xl font-bold">
            <span className="text-primary">Çağdaş</span>
            <span className="text-secondary">Ocakbaşı</span>
          </a>
          <p className="text-sm leading-relaxed text-white/60 max-w-lg">
            <strong className="text-white/90">2005 yılında kurulan</strong> {SITE_NAME}, Şanlıurfa'nın
            köklü lezzet duraklarından biridir. Geleneksel ocakbaşı kültürünü samimi bir atmosferde
            sunuyoruz.
          </p>
          <p className="text-sm leading-relaxed text-white/60 max-w-lg">
            Özellikle <strong className="text-white/90">kuşbaşı şiş</strong> ve yöresel{" "}
            <strong className="text-white/90">şıllık tatlısı</strong> en çok sevilen lezzetlerimizdir.
            Her tabağı ateşin sıcaklığıyla ustalıkla hazırlıyoruz.
          </p>
          <ul className="space-y-3 pt-1">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-3 text-sm">
                <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4" />
                </span>
                <span>
                  <span className="font-display font-bold text-white block">{item.title}</span>
                  <span className="text-white/55 leading-snug">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 lg:col-start-7">
          <h4 className="font-display text-lg font-bold text-white mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hakkimizda" className="hover:text-primary transition-colors">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-primary transition-colors">
                Menü
              </a>
            </li>
            <li>
              <a href="#galeri" className="hover:text-primary transition-colors">
                Galeri
              </a>
            </li>
            <li>
              <a href="#rezervasyon" className="hover:text-primary transition-colors">
                Rezervasyon
              </a>
            </li>
            <li>
              <a href="#iletisim" className="hover:text-primary transition-colors">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-lg font-bold text-white mb-4">İletişim</h4>
          <p className="text-sm">Osman Gazi Mah. 400. Sk. No:1</p>
          <p className="text-sm">Tepecan Apt, 63300 Şanlıurfa Merkez</p>
          <p className="text-sm mt-2">
            <a href="tel:+904143133800" className="hover:text-primary transition-colors">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-sm">Her gün 11:00 - 23:30</p>
          <p className="text-sm mt-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <div className="flex items-center gap-2.5">
            <a
              href="https://enesbeslenen.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enes Beslenen — Web tasarım ve geliştirme"
              className="shrink-0 rounded-md opacity-75 hover:opacity-100 transition-opacity"
            >
              <img
                src="/eb-monogram.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </a>
            <p>Tasarım & geliştirme — sıcacık bir ocak başında.</p>
          </div>
          <p>© 2026 Çağdaş Ocakbaşı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
