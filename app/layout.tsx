import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduTravel — Your Journey to Global Education Starts Here",
  description:
    "EduTravel — study-abroad consultancy. We help ambitious students get into Oxford, MIT, UBC, Melbourne, and 200+ top universities with zero application stress.",
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
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23FAF8F5'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='Inter,sans-serif' font-weight='800' font-size='20' fill='%23C97B3A'%3EE%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body>
        {children}
        <Script src="/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
