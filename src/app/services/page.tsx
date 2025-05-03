'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    name: "Plumbing",
    slug: "plumbing",
    image: "/images/plumbing.jpg",
    description: "Expert plumbing services for kitchens, bathrooms, and pipelines. Licensed plumbers available."
  },
  {
    name: "Electrical",
    slug: "electrical",
    image: "/images/electrical.jpg",
    description: "Certified electricians for homes and commercial buildings. Lighting, rewiring, and more."
  },
  {
    name: "Roofing",
    slug: "roofing",
    image: "/images/roofing.jpg",
    description: "High-quality roof repair and installation. Durable materials and expert work."
  },
  {
    name: "Handyman",
    slug: "handyman",
    image: "/images/Handyman.jpg",
    description: "Reliable handyman for furniture assembly, repairs, installations, and maintenance."
  },
  {
    name: "Remodeling",
    slug: "remodeling",
    image: "/images/remodeling.jpg",
    description: "Transform kitchens, bathrooms, basements, and more with our custom remodeling services."
  },
  {
    name: "Windows",
    slug: "windows",
    image: "/images/windows.jpg",
    description: "Window installation, repair, and upgrades to improve insulation and aesthetics."
  },
  {
    name: "Concrete",
    slug: "concrete",
    image: "/images/concrete.jpg",
    description: "Concrete pouring, repair, and decorative concrete solutions for all surfaces."
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
