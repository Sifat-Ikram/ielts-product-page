import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete IELTS Course in Bangladesh",
  description:
    "Master IELTS with Munzereen Shahid. Get tips, practice material",
  openGraph: {
    title: "IELTS Course | 10 Minute School",
    description: "Master IELTS with Munzereen Shahid",
    images: ["https://cdn.10minuteschool.com/images/seo/ielts.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
