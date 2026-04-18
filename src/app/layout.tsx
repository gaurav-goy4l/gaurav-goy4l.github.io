import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gaurav Goyal — SDET, DevOps & Traveler",
    template: "%s | Gaurav Goyal",
  },
  description:
    "Portfolio of Gaurav Goyal — SDET specializing in DevOps, passionate traveler, and avid reader.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${epilogue.variable} ${manrope.variable} font-body antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-on-primary`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
