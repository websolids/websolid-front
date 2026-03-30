import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/src/components";

export const metadata: Metadata = {
  title: "ВебСолид",
  description: "ВебСолид — технологический партнер вашего роста",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full max-w-300 mx-auto flex flex-col bg-[#E0E3FF] relative font-helvetica px-2">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
