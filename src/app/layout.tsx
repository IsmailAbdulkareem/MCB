import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

// Clerk Imports
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCB Mustafa Contractor & Builder | Trusted Home Repair Services",
  description:
    "Reliable home construction, handyman, plumbing, electrical, and landscaping services. Book professional repair and building services with MCB today!",
  keywords:
    "Home repair, construction services, contractor, handyman, plumbing, electrical, landscaping, renovation, building contractor, Karachi home services",
  openGraph: {
    title: "MCB Contractor & Builder - Expert Home Repair",
    description:
      "Find expert construction, plumbing, electric, and home renovation services at MCB. Affordable and reliable home solutions.",
    url: "https://yourwebsite.com", // replace with your actual domain
    siteName: "MCB Contractor & Builder",
    images: [
      {
        url: "https://yourwebsite.com/images/preview.jpg", // preview image
        width: 800,
        height: 600,
        alt: "MCB Home Services",
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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Top Right Auth Buttons */}
          <header className="flex justify-end items-center p-4 gap-4 h-16 shadow-sm">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {/* Page Content */}
          {children}

          {/* WhatsApp Floating Button */}
          <WhatsAppButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
