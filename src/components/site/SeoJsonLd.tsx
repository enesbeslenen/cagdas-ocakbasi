import {
  ADDRESS,
  GEO,
  INSTAGRAM_URL,
  OPENING_HOURS,
  PHONE_TEL,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from "@/lib/site";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: SITE_NAME,
  alternateName: "Çağdaş Ocakbaşı Şanlıurfa",
  description:
    "2005'ten beri Şanlıurfa'da geleneksel ocakbaşı kültürü. Kuşbaşı şiş, kebap çeşitleri ve yöresel şıllık tatlısı.",
  url: SITE_URL,
  image: [DEFAULT_OG_IMAGE, `${SITE_URL}/yemek-adana-kebap.jpeg`, `${SITE_URL}/yemek-sillik-tatlisi.jpeg`],
  logo: `${SITE_URL}/favicon.png`,
  telephone: PHONE_TEL,
  priceRange: "$$",
  servesCuisine: ["Turkish", "Kebab", "Ocakbaşı"],
  acceptsReservations: true,
  menu: `${SITE_URL}/#menu`,
  hasMenu: `${SITE_URL}/#menu`,
  sameAs: [INSTAGRAM_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:30",
    },
  ],
  openingHours: OPENING_HOURS,
  areaServed: {
    "@type": "City",
    name: "Şanlıurfa",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Şanlıurfa Çağdaş Ocakbaşı resmi web sitesi — menü, galeri, rezervasyon ve iletişim.",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE_URL}/#restaurant` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Menü",
      item: `${SITE_URL}/#menu`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rezervasyon",
      item: `${SITE_URL}/#rezervasyon`,
    },
  ],
};

export function SeoJsonLd() {
  const payload = [restaurantSchema, websiteSchema, breadcrumbSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
