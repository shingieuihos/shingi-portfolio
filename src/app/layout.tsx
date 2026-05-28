import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shingi.tech"),
  title: "Shingi Mudyirwa — CTO, Founder, Builder",
  description:
    "CTO at SubSaharaData, Founder at PeakRank Digital, Ministry Director at WhatTheWordSays. Building cloud-native products for African markets from Cape Town.",
  keywords: [
    "Shingi Mudyirwa",
    "AWS",
    "Cloud Engineer",
    "CTO",
    "South Africa",
    "Cape Town",
    "SubSaharaData",
    "PeakRank Digital",
    "SignalCartel",
    "WhatTheWordSays",
  ],
  authors: [{ name: "Shingi Mudyirwa" }],
  openGraph: {
    title: "Shingi Mudyirwa — CTO, Founder, Builder",
    description:
      "Building cloud-native products for African markets. CTO @ SubSaharaData · Founder @ PeakRank Digital.",
    url: "https://shingi.tech",
    siteName: "Shingi Mudyirwa",
    type: "website",
    locale: "en_ZA",
    images: [{ url: "/portrait.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shingi Mudyirwa — CTO, Founder, Builder",
    description:
      "Building cloud-native products for African markets from Cape Town.",
    images: ["/portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-canvas text-foreground font-sans selection:bg-accent/30 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
