import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MCB Construction | Expert Construction Services",
    template: "%s | MCB Construction",
  },
  description:
    "MCB Construction is a leading construction company specializing in residential, commercial, and industrial projects. Quality craftsmanship, innovative solutions, and exceptional service.",
  keywords: [
    "construction",
    "contractor",
    "residential construction",
    "commercial construction",
    "villa construction",
    "building contractor",
    "renovation",
    "remodeling",
    "plumbing",
    "electrical",
    "roofing",
  ],
  authors: [{ name: "MCB Construction" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mustafabuilderanddeveloper.com.pk",
    siteName: "MCB Construction",
    title: "MCB Construction | Expert Construction Services",
    description:
      "Leading construction company specializing in residential, commercial, and industrial projects. Quality craftsmanship and exceptional service.",
    images: [
      {
        url: "/images/MCB-logo.jpg",
        width: 1200,
        height: 630,
        alt: "MCB Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCB Construction | Expert Construction Services",
    description:
      "Leading construction company specializing in residential, commercial, and industrial projects.",
    images: ["/images/MCB-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCTA />
      
      </body>
    </html>
  );
}
