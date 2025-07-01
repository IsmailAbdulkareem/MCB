import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FixedWhatsAppButton from './components/FixedWhatsAppButton';

// Clerk Imports
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Builder & Developer | Construction & Home Repair Experts in Karachi",
  description:
    "Professional construction, renovation, handyman, plumbing, electrical, and landscaping services in Karachi and across Pakistan. Trusted by homeowners and businesses alike.",
  keywords:
    "Mustafa Builder, Mustafa Builders, Mustafa Contractor, contractor in Karachi, builder in Karachi, home construction Karachi, house repair Karachi, renovation services Karachi, handyman Karachi, plumber Karachi, electrician Karachi, landscaping Karachi, construction company Karachi, developer in Karachi, building maintenance Karachi, affordable home repair Karachi, MCB Builder Karachi, Karachi contractors, Karachi developers",
  openGraph: {
    title: "Mustafa Builder & Developer | Trusted Home Services in Karachi",
    description:
      "Experience reliable home construction, renovation, plumbing, electrical, and landscaping services with Mustafa Builder & Developer. Book professional help in Karachi today.",
    url: "https://www.mustafabuilderanddeveloper.com.pk",
    siteName: "Mustafa Builder & Developer",
    images: [
      {
        url: "https://www.mustafabuilderanddeveloper.com.pk/images/MCB_logo.jpg",
        width: 800,
        height: 600,
        alt: "Mustafa Builder & Developer Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ THIS is the fix!
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "MCB Mustafa Contractor & Builder",
                "image": "https://mustafabuilderanddeveloper.com.pk/images/mcb_company_logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "DHA KARACHI/ BHARIA TOWN",
                  "addressLocality": "Karachi",
                  "addressRegion": "Sindh",
                  "addressCountry": "PK"
                },
                "telephone": "+92-305-2200135",
                "url": "https://mustafabuilderanddeveloper.com.pk",
                "openingHours": "Mo-Sa 09:00-18:00"
              })
            }}
          />
        </head>
        <body className={inter.className}>
          <header className="flex justify-end items-center p-4 gap-4 h-16 shadow-sm">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {children}
          <FixedWhatsAppButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
