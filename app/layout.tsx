import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WATERBUSS | AI Water Consumption Index",
  description: "Visualizing the invisible water footprint of ChatGPT, GPT-4, and Gemini. Every AI query has a physical cost. Track real-time global consumption.",
  keywords: ["AI water consumption", "ChatGPT water footprint", "LLM environmental impact", "Green AI", "Sustainable Tech"],
  openGraph: {
    title: "WATERBUSS | AI Water Consumption Index",
    description: "Visualizing the invisible water footprint of ChatGPT, GPT-4, and Gemini. Track real-time global consumption.",
    type: "website",
    url: "https://waterbuss.com",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💧</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* BU SATIR STİLLERİ ZORLA ÇALIŞTIRACAK 👇 */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    deep: '#020202',
                    card: '#0A0A0A',
                    accent: '#00F0FF',
                  },
                  fontFamily: {
                    mono: ['monospace'],
                  }
                }
              }
            }
          `
        }} />
        <style>{`
          body { background-color: #020202; color: white; margin: 0; padding: 0; }
          .glass { background: rgba(20,20,20,0.4); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); }
          .glow-text { text-shadow: 0 0 20px rgba(0, 240, 255, 0.5); }
        `}</style>

        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-20024WDQTF"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-20024WDQTF');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NL9M86PB');
            `,
          }}
        />

        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Waterbuss",
              "url": "https://waterbuss.com",
              "description": "Real-time index tracking the global water consumption of Artificial Intelligence models like ChatGPT, Gemini, and Claude.",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": "AI Water Footprint Calculator, Live Consumption Counter, Model Comparison"
            })
          }}
        />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL9M86PB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}