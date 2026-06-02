export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <a href="#home" className="flex items-baseline gap-1 font-display text-2xl font-bold">
            <span className="text-primary">Çağdaş</span>
            <span className="text-secondary">Ocakbaşı</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            Şanlıurfa'nın kalbinde, geleneksel ocakbaşı kültürünü modern bir
            atmosferde sunan lezzet durağı.
          </p>
        </div>

        <div className="md:text-center">
          <h4 className="font-display text-lg font-bold text-white mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</a></li>
            <li><a href="#menu" className="hover:text-primary transition-colors">Menü</a></li>
            <li><a href="#galeri" className="hover:text-primary transition-colors">Galeri</a></li>
            <li><a href="#rezervasyon" className="hover:text-primary transition-colors">Rezervasyon</a></li>
            <li><a href="#iletisim" className="hover:text-primary transition-colors">İletişim</a></li>
          </ul>
        </div>

        <div className="md:text-right">
          <h4 className="font-display text-lg font-bold text-white mb-4">İletişim</h4>
          <p className="text-sm">Osman Gazi Mah. 400. Sk. No:1</p>
          <p className="text-sm">Tepecan Apt, 63300 Şanlıurfa Merkez</p>
          <p className="text-sm mt-2">0414 313 38 00</p>
          <p className="text-sm">Her gün 11:00 - 23:30</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-white/50">
          <p>Tasarım & geliştirme — sıcacık bir ocak başında.</p>
          <p>© 2026 Çağdaş Ocakbaşı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
