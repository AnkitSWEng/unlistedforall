
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "unlistedforall | Discover Unlisted Shares",
  description:
    "Explore India's unlisted companies, research businesses and track indicative share prices with unlistedforall.",
  applicationName: "unlistedforall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
