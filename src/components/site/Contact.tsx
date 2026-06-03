import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="iletisim" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-primary font-semibold uppercase tracking-[0.25em] text-sm">
            İletişim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="reveal space-y-6">
            <InfoRow icon={<MapPin className="w-5 h-5" />} title="Adres" accent="primary">
              Osman Gazi Mah. 400. Sk. No:1 Tepecan Apt,
              <br />
              63300 Şanlıurfa Merkez / Şanlıurfa
            </InfoRow>
            <InfoRow icon={<Phone className="w-5 h-5" />} title="Telefon" accent="secondary">
              <a href="tel:+904143133800" className="hover:text-primary transition-colors">
                0414 313 38 00
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="w-5 h-5" />} title="Çalışma Saatleri" accent="primary">
              Her gün 11:00 - 23:30
            </InfoRow>

            <div className="pt-4">
              <p className="text-sm font-semibold mb-3 text-foreground">Bizi Takip Edin</p>
              <div className="flex gap-3">
                <SocialLink
                  href="https://www.instagram.com/cagdas_ocakbasii/"
                  label="Instagram"
                  external
                >
                  <Instagram className="w-5 h-5" />
                </SocialLink>
              </div>
            </div>
          </div>

          <div className="reveal rounded-3xl overflow-hidden border border-border shadow-lg min-h-[360px] lg:min-h-[440px]">
            <iframe
              title="Çağdaş Ocakbaşı Konum"
              src="https://www.google.com/maps?q=%C3%87a%C4%9Fda%C5%9F+Ocakba%C5%9F%C4%B1@37.1735127,38.8067735&ll=37.1735127,38.8067735&z=18&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent: "primary" | "secondary";
}) {
  const bg = accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary";
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors">
      <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary hover:scale-110 transition-all"
    >
      {children}
    </a>
  );
}
