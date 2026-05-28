import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdBull — Guiding Dreams, Building Futures",
  description:
    "EdBull — premium study-abroad consultancy. We help ambitious students get into Oxford, MIT, UBC, Melbourne, and 200+ top universities with zero application stress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230C2318'/%3E%3Cpolygon points='16%2C5 4%2C12 16%2C19 28%2C12' fill='%23C9A84C'/%3E%3Crect x='9' y='14' width='14' height='7' rx='2' fill='%231A5238'/%3E%3C%2Fsvg%3E"
        />
      </head>
      <body>
        {children}
        <Script src="/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
