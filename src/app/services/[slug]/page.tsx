'use client'; // Mark this file as a Client Component

import { useParams } from 'next/navigation'; // Use useParams for dynamic route parameters
import { services } from '../../data/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ServiceDetailPage() {
  const { slug } = useParams(); // Get slug from dynamic route parameters

  // Find the service by slug
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">{service.name}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 w-full">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 text-lg mb-4">{service.description}</p>
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
