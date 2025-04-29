'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { name: 'Handyperson', icon: '🔧', href: '/services/handyperson' },
  { name: 'Landscaping', icon: '🌿', href: '/services/landscaping' },
  { name: 'Plumbing', icon: '🚰', href: '/services/plumbing' },
  { name: 'Electrical', icon: '⚡', href: '/services/electrical' },
  { name: 'Remodeling', icon: '🏠', href: '/services/remodeling' },
  { name: 'Roofing', icon: '🏗️', href: '/services/roofing' },
  { name: 'Painting', icon: '🎨', href: '/services/painting' },
  { name: 'Cleaning', icon: '🧹', href: '/services/cleaning' },
  { name: 'HVAC', icon: '❄️', href: '/services/hvac' },
  { name: 'Windows', icon: '🪟', href: '/services/windows' },
  { name: 'Concrete', icon: '🏢', href: '/services/concrete' },
];
       
const popularProjects = [
  {
    name: 'Handyperson Services',
    rating: 4.7,
    reviews: '1.2k+',
    price: 85,
    icon: '🔧',
    image: '/images/Handyman.jpg'
  },
  {
    name: 'Plumbing Services',
    rating: 4.5,
    reviews: '2.3k+',
    price: 120,
    icon: '🚰',
    image: '/images/plumbing.jpg'
  },
  {
    name: 'Electrical Work',
    rating: 4.8,
    reviews: '1.8k+',
    price: 150,
    icon: '⚡',
    image: '/images/electrical.jpg'
  },
  {
    name: 'Window Installation',
    rating: 4.7,
    reviews: '900+',
    price: 450,
    icon: '🪟',
    image: '/images/windows.jpg'
  },
  {
    name: 'Concrete Work',
    rating: 4.5,
    reviews: '1.1k+',
    price: 800,
    icon: '🏢',
    image: '/images/concrete.jpg'
  },
  {
    name: 'Remodeling',
    rating: 4.6,
    reviews: '1.4k+',
    price: 5000,
    icon: '🏠',
    image: '/images/remodeling.jpg'
  }
];

const homeProjects = [
  {
    name: 'Complete Home Remodeling',
    rating: 4.8,
    reviews: '450+',
    price: 15000,
    category: 'Remodeling',
    image: '/images/completermodeling.jpg'
  },
  {
    name: 'Electrical System Upgrade',
    rating: 4.7,
    reviews: '320+',
    price: 2500,
    category: 'Electrical',
    image: '/images/complete electrical.jpg'
  },
  {
    name: 'Roof Replacement',
    rating: 4.6,
    reviews: '280+',
    price: 8000,
    category: 'Roofing',
    image: '/images/roofing.jpg'
  }
];

const maintenanceServices = [
  {
    name: 'Plumbing System Maintenance',
    rating: 4.5,
    reviews: '520+',
    price: 150,
    category: 'Plumbing',
    image: '/images/plumbing.jpg'
  },
  {
    name: 'Window Replacement',
    rating: 4.7,
    reviews: '380+',
    price: 600,
    category: 'Windows',
    image: '/images/windows.jpg'
  },
  {
    name: 'Concrete Repair & Installation',
    rating: 4.4,
    reviews: '420+',
    price: 1200,
    category: 'Concrete',
    image: '/images/concrete.jpg'
  }
];

const carouselImages = [
  '/images/concrete.jpg',
  '/images/windows.jpg',
  '/images/plumbing.jpg',
  '/images/roofing.jpg',
  '/images/complete electrical.jpg',
  '/images/completermodeling.jpg',
  '/images/remodeling.jpg',
  '/images/Handyman.jpg',
  '/images/electrical.jpg',
  '/images/roofing.jpg'
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="relative h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={image}
                alt={`Construction project ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#36454F] bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    MCB Mustafa Contractor & Builder
                  </h1>
                  <p className="text-lg sm:text-xl mb-8">
                    Your Trusted Partner for Quality Construction and Home Improvement
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Popular Projects Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {project.rating} ({project.reviews})
                  </span>
                </div>
                <p className="text-gray-600">from ${project.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Home Projects Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {project.rating} ({project.reviews})
                  </span>
                </div>
                <p className="text-gray-600">from ${project.price}</p>
                <p className="text-sm text-gray-500 mt-2">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep Your Home Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {service.rating} ({service.reviews})
                  </span>
                </div>
                <p className="text-gray-600">from ${service.price}</p>
                <p className="text-sm text-gray-500 mt-2">{service.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
