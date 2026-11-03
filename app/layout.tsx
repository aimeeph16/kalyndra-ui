import type { Metadata } from "next";
import { Poltawski_Nowy, Kufam, Stack_Sans_Text, Poppins, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  variable: "--font-poltawski",
});
const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
});
const stackSans = Stack_Sans_Text({
  subsets: ["latin"],
  variable: "--font-stackSans",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poltawski.variable} ${kufam.variable} ${stackSans.variable} ${poppins.variable} ${dmSans.variable} scroll-smooth`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
