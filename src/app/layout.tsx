import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CONFIG } from "@/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `Portfolio ${CONFIG.name}`,
  description:
    "Portfolio van Olav Gryson-Modaert, student AI & Data Science aan Vives Kortrijk.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} bg-body text-slate-800 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
