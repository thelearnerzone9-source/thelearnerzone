import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-learner-zone.jammy-mango-9071.chatgpt.site"),
  openGraph: { type: "website", siteName: "The Learner Zone", title: "The Learner Zone — Learn Driving With Confidence", description: "From your first time behind the wheel to driving independently. Learn, practice, test, drive." },
  title: { default: "The Learner Zone — Learn Driving With Confidence", template: "%s | The Learner Zone" },
  description: "Your journey from complete beginner to confident driver. Explore interactive car controls, driving lessons, road signs and a free practice test.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

