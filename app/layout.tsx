import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/template/Header";

export const metadata: Metadata = {
  title: "مقالات",
  description: "انتشار مقاله من و شماها ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="rtl">
      <body
      >
        <header>
          <Header/>
        </header>
        {children}
      </body>
    </html>
  );
}
