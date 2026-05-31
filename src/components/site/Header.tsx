import { useEffect, useState } from "react";
import { Phone, Menu as MenuIcon, X } from "lucide-react";

const links = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#menu", label: "Menü" },
  { href: "#galeri", label: "Galeri" },
  { href: "#rezervasyon", label: "Rezervasyon" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-1 font-display text-xl md:text-2xl font-bold">
          <span className="text-primary">Çağdaş</span>
          <span className="text-secondary">Ocakbaşı</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+904143133800"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 md:px-5 py-2.5 rounded-full font-semibold text-sm shadow-warm hover:scale-105 hover:bg-primary/90 transition-all"
        >
          <Phone className="w-4 h-4" />
          Hemen Ara
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menüyü aç"
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground hover:bg-accent font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+904143133800"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full font-semibold"
            >
              <Phone className="w-4 h-4" />
              Hemen Ara
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
