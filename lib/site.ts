import type { Metadata } from "next";

export const siteUrl = "https://thelearnerzone.in";
export const siteName = "The Learner Zone";
export const siteDescription =
  "Learn driving in India with beginner-friendly car controls, Indian road signs, practice questions and driving lesson enquiries. Build confidence one step at a time.";

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = new URL(path, siteUrl).href;
  const fullTitle = path === "/" ? title : `${title} | ${siteName}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_IN",
      title: fullTitle,
      description,
      url,
      images: [{
        url: `${siteUrl}/images/indian-learner-swift.webp`,
        alt: "Indian learner car from The Learner Zone",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/images/indian-learner-swift.webp`],
    },
  };
}
