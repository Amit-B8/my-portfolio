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
  title: "Amit Boodhoo | Portfolio",
  description: "Full Stack Developer showcasing web applications, React, Python, and more.",
  openGraph: {
    title: "Amit Boodhoo | Portfolio",
    description: "Interactive portfolio showcasing my software projects and experience.",
    url: "https://amit-portfolio-sandy.vercel.app/",
    siteName: "Amit Boodhoo Portfolio",
    images: [
      {
        url: "/PortfolioLogo.png",
        width: 1200,
        height: 630,
        alt: "Amit Boodhoo Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
