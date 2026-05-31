import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reservation } from "@/components/site/Reservation";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Çağdaş Ocakbaşı — Şanlıurfa'nın Eşsiz Lezzet Durağı" },
      {
        name: "description",
        content:
          "Şanlıurfa Çağdaş Ocakbaşı: geleneksel kebaplar, mezeler ve sıcacık bir atmosfer. WhatsApp üzerinden hızlı rezervasyon.",
      },
      { property: "og:title", content: "Çağdaş Ocakbaşı — Şanlıurfa" },
      {
        property: "og:description",
        content: "Geleneksel ocakbaşı kültürü, usta ellerden eşsiz tatlar.",
      },
      { property: "og:url", content: "https://cagdas-ocakbasi.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://cagdas-ocakbasi.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
