import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WATERBUSS | AI Ecology Index",
  description: "Global AI Water Consumption Dashboard",
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
          body { background-color: #020202; color: white; }
          .glass { background: rgba(20,20,20,0.4); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); }
          .glow-text { text-shadow: 0 0 20px rgba(0, 240, 255, 0.5); }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}