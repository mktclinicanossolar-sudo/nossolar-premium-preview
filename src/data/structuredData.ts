import { CLINIC_SERVICES, CLINIC_FAQS } from "./clinicContent";
import { CLINIC_LOCATIONS } from "./clinicLocations";
import { SERVICE_SEARCH_CONTENT } from "./serviceSearchContent";

export function createStructuredData(siteUrl: string) {
  const base = siteUrl.replace(/\/$/, "");
  const organization = `${base}/#clinica`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organization,
        name: "Clínica Nosso Lar",
        alternateName: "Clínica Comportamental Nosso Lar",
        url: "https://clinicanossolar.com.br/",
        logo: `${base}/nosso_lar_logo.svg`,
        description:
          "Clínica comportamental e multidisciplinar em Mogi Guaçu, com atendimento a crianças, adolescentes e adultos com autismo e outras necessidades do desenvolvimento.",
        telephone: "+55-19-98893-0792",
        areaServed: {
          "@type": "City",
          name: "Mogi Guaçu",
          containedInPlace: { "@type": "State", name: "São Paulo" },
        },
        department: CLINIC_LOCATIONS.map((_, i) => ({
          "@id": `${base}/#unidade-${i + 1}`,
        })),
      },
      ...CLINIC_LOCATIONS.map((unit, i) => ({
        "@type": "MedicalClinic",
        "@id": `${base}/#unidade-${i + 1}`,
        name: `Clínica Nosso Lar — Unidade ${unit.name}`,
        url: `${base}/#unidades`,
        parentOrganization: { "@id": organization },
        telephone: "+55-19-98893-0792",
        image: `${base}/hero/recepcao.webp`,
        hasMap: unit.mapUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${unit.streetAddress}, ${unit.neighborhood}`,
          addressLocality: "Mogi Guaçu",
          addressRegion: "SP",
          addressCountry: "BR",
          ...(unit.postalCode ? { postalCode: unit.postalCode } : {}),
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: unit.latitude,
          longitude: unit.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "11:00",
          },
        ],
      })),
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "Clínica Nosso Lar",
        inLanguage: "pt-BR",
        publisher: { "@id": organization },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#pagina`,
        url: `${base}/`,
        name: "Clínica Nosso Lar | Autismo e terapias em Mogi Guaçu",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": organization },
      },
      ...CLINIC_SERVICES.map((service) => ({
        "@type": "Service",
        "@id": `${base}/#servico-${service.id}`,
        name: `${service.title} em Mogi Guaçu`,
        alternateName: SERVICE_SEARCH_CONTENT[service.id].aliases,
        description: SERVICE_SEARCH_CONTENT[service.id].summary,
        url: `${base}/#${service.id}`,
        serviceType: service.title,
        provider: { "@id": organization },
        areaServed: { "@type": "City", name: "Mogi Guaçu" },
      })),
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: CLINIC_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
