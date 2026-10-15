const SITE_URL = "https://www.bashntech.com"

// One place for the facts Google should know about the business. "BashNTech"
// reads like the Unix shell (bash) plus "tech" to a search engine, so this
// states plainly that it is a company and ties it to its official profiles.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BashNTech",
      alternateName: ["Bash N Tech"],
      description:
        "AI consulting, automation, and website design for small businesses.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "BashNTech",
      alternateName: ["Bash N Tech"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo-square.png`,
      image: `${SITE_URL}/opengraph-image.png`,
      description:
        "BashNTech builds websites for small businesses and consults on AI: crew and subcontractor scheduling, paperwork automation, custom models, and dashboards.",
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Website design",
        "AI consulting",
        "Business process automation",
        "Subcontractor scheduling",
        "Local SEO",
      ],
      sameAs: [
        "https://www.linkedin.com/company/bashntech/",
        "https://www.instagram.com/bashntech/",
      ],
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
      }}
    />
  )
}
