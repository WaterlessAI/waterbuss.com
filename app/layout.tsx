import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

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
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}