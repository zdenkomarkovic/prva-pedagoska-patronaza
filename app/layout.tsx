import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  alternates: {
    canonical: "https://www./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-md md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
