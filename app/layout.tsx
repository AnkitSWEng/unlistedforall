
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UnlistedForAll | Private Market Intelligence",
    template: "%s | UnlistedForAll",
  },
  description:
    "Explore India's unlisted companies, discover private market opportunities, follow corporate events and access company research with UnlistedForAll.",
  applicationName: "UnlistedForAll",
  keywords: [
    "unlisted shares",
    "private markets",
    "Indian unlisted companies",
    "pre-IPO shares",
    "company research",
    "corporate announcements",
  ],
  openGraph: {
    title: "UnlistedForAll | Private Market Intelligence",
    description:
      "Discover India's unlisted companies and explore private market intelligence.",
    siteName: "UnlistedForAll",
    type: "website",
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
