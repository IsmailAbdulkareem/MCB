'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/MCB-logo.jpg"
              alt="MCB Company Logo"
              width={45}
              height={45}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 items-center">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Right Side: Login/User Icon + Hamburger */}
          <div className="flex items-center sm:hidden space-x-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="p-1 rounded-md text-blue-600 hover:text-blue-800 transition text-sm font-medium">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <NavLink href="/about" mobile>About Us</NavLink>
          <NavLink href="/services" mobile>Services</NavLink>
          <NavLink href="/projects" mobile>Projects</NavLink>
          <NavLink href="/faq" mobile>FAQ</NavLink>
          <NavLink href="/contact" mobile>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, mobile = false }: { href: string, children: React.ReactNode, mobile?: boolean }) {
  return (
    <Link
      href={href}
      className={`${
        mobile
          ? 'block text-sm text-gray-800 hover:text-blue-600'
          : 'text-sm font-medium text-gray-800 hover:text-blue-600'
      } transition`}
    >
      {children}
    </Link>
  );
}
