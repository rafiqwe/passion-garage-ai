import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Sora,
  Splash,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { LenisProvider } from "./components/common/lenis-provider";
import SplashWrapper from "./components/common/SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Passion Garage | A Cinematic BMW Experience",
    template: "%s | Passion Garage",
  },

  description:
    "Passion Garage is a cinematic automotive experience inspired by the passion of driving. Explore legendary performance cars through immersive GSAP animations and an AI Garage powered by Google Gemini.",

  keywords: [
    "BMW",
    "BMW M4",
    "Porsche",
    "Ferrari",
    "Nissan GT-R",
    "Sports Cars",
    "Google Gemini",
    "Google AI",
    "GSAP",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Automotive",
    "AI Garage",
    "Performance Cars",
    "Interactive Website",
    "DEV Weekend Challenge",
  ],

  authors: [
    {
      name: "Muhammad Rabbi",
      url: "https://muhammadrabbi.vercel.app",
    },
  ],

  creator: "Muhammad Rabbi",

  publisher: "Muhammad Rabbi",

  category: "Technology",

  openGraph: {
    title: "Passion Garage | A Cinematic BMW Experience",

    description:
      "Experience legendary performance cars through cinematic storytelling, immersive GSAP animations, and an AI-powered automotive assistant built with Google Gemini.",

    url: "https://your-domain.com",

    siteName: "Passion Garage",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Passion Garage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Passion Garage",

    description:
      "A cinematic BMW-inspired experience built with Next.js, GSAP, and Google Gemini AI.",

    images: ["/og-image.png"],

    creator: "@rmlrabbi",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${sora.variable} ${JetBrainsMono.variable} `}
    >
      <body className="flex flex-col min-h-full overflow-x-hidden scrollbar-thin">
        <SplashWrapper>
          <Navbar />
          <LenisProvider>{children}</LenisProvider>
        </SplashWrapper>
      </body>
    </html>
  );
}
