import Home from "@/components/learner/Home";
import { instagramUrl, whatsappNumber } from "@/lib/contact";
import { pageMetadata, siteDescription, siteName, siteUrl } from "@/lib/site";

export const metadata = pageMetadata(
  "/",
  "The Learner Zone | Learn Driving in India",
  siteDescription,
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: ["TheLearnerZone", "thelearnerzone"],
      url: `${siteUrl}/`,
      description: siteDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
      sameAs: [instagramUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${whatsappNumber}`,
        contactType: "Driving lesson enquiries",
      },
    },
  ],
};

export default function Page() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
    <Home />
  </>;
}
