import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets:['latin'] })

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}