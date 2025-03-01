import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/template/Header";
import Head from "next/head";

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
        <div className="flex">

          <header className="fixed top-0 left-0 right-0 z-10">
            <Header/>
          </header>
          <div className="flex-1">
            {children}

          </div>

        </div>
      </body>
    </html>
  );
}
