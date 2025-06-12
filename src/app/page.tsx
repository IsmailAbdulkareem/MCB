'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import WhatsAppButton from '@/components/WhatsAppButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const popularProjects = [
  {
    name: 'Handyperson Services',
    rating: 4.7,
    reviews: '1.2k+',
    icon: '🔧',
    image: '/images/Handyman.jpg',
    whatsapp: 'https://wa.me/your-number'
  },
  {
    name: 'Plumbing Services',
    rating: 4.5,
    reviews: '2.3k+',
    icon: '🚰',
    image: '/images/plumbing.jpg',
    whatsapp: 'https://wa.me/your-number'
  },
  {
    name: 'Electrical Work',
    rating: 4.8,
    reviews: '1.8k+',
    icon: '⚡',
    image: '/images/electrical.jpg',
    whatsapp: 'https://wa.me/your-number'
  },
  {
    name: 'Window Installation',
    rating: 4.7,
    reviews: '900+',
    icon: '🪟',
    image: '/images/windows.jpg',
    whatsapp: 'https://wa.me/your-number'
  },
  {
    name: 'Concrete Work',
    rating: 4.5,
    reviews: '1.1k+',
    icon: '🏢',
    image: '/images/concrete.jpg',
    whatsapp: 'https://wa.me/your-number'
  },
  {
    name: 'Remodeling',
    rating: 4.6,
    reviews: '1.4k+',
    icon: '🏠',
    image: '/images/remodeling.jpg',
    whatsapp: 'https://wa.me/your-number'
  }
];

const homeProjects = [
  {
    name: 'Complete Home Remodeling',
    rating: 4.8,
    reviews: '450+',
    category: 'Remodeling',
    image: '/images/completermodeling.png'
  },
  {
    name: 'Electrical System Upgrade',
    rating: 4.7,
    reviews: '320+',
    category: 'Electrical',
    image: '/images/complete electrical.jpg'
  },
  {
    name: 'Roof Replacement',
    rating: 4.6,
    reviews: '280+',
    category: 'Roofing',
    image: '/images/roofing.jpg'
  }
];

const maintenanceServices = [
  {
    name: 'Plumbing System Maintenance',
    rating: 4.5,
    reviews: '520+',
    category: 'Plumbing',
    image: '/images/plumbing.jpg'
  },
  {
    name: 'Window Replacement',
    rating: 4.7,
    reviews: '380+',
    category: 'Windows',
    image: '/images/windows.jpg'
  },
  {
    name: 'Concrete Repair & Installation',
    rating: 4.4,
    reviews: '420+',
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

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Business Owner',
    image: '/images/testimonial1.jpg',
    text: 'MCB delivered our factory project on time and within budget. Their attention to detail and quality of work is exceptional.',
    rating: 5
  },
  {
    name: 'Ismail Abdul Kareem',
    role: 'Property Developer',
    image: '/images/testimonial2.jpg',
    text: 'The villa construction exceeded our expectations. The team was professional and the end result is stunning.',
    rating: 4
  },
  {
    name: 'Usman Ali',
    role: 'Real Estate Investor',
    image: '/images/testimonial3.jpg',
    text: 'We\'ve worked with MCB on multiple highrise projects. Their expertise in large-scale construction is unmatched.',
    rating: 5
  }
];

const specializedServices = [
  {
    name: 'Aluminum Work',
    rating: 4.9,
    reviews: '850+',
    icon: '🏗️',
    image: '/images/aluminum.jpg',
    description: 'Professional aluminum fabrication and installation services'
  },
  {
    name: 'Door Installation',
    rating: 4.8,
    reviews: '720+',
    icon: '🚪',
    image: '/images/door.jpg',
    description: 'Complete door installation with expert finishing'
  },
  {
    name: 'Villa Excavation',
    rating: 4.7,
    reviews: '450+',
    icon: '🏡',
    image: '/images/excavation.jpg',
    description: 'Professional excavation services for villa construction'
  },
  {
    name: 'Steel Fabrication',
    rating: 4.8,
    reviews: '680+',
    icon: '⚒️',
    image: '/images/steel.jpg',
    description: 'Custom steel fabrication and installation'
  },
  {
    name: 'Farm Shedding',
    rating: 4.6,
    reviews: '320+',
    icon: '🌾',
    image: '/images/farm.jpg',
    description: 'Construction of durable farm sheds and structures'
  },
  {
    name: 'Project Pouring',
    rating: 4.7,
    reviews: '540+',
    icon: '🏢',
    image: '/images/pouring.jpg',
    description: 'Professional concrete pouring for large projects'
  }
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
    autoplaySpeed: 8000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: true,
    fade: true,
    cssEase: 'linear'
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pt-16 scroll-smooth">
      <Navbar />

      {/* Hero Carousel */}
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
                  <p className="text-lg sm:text-xl mb-6">
                    Your Trusted Partner for Quality Construction and Home Improvement
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={scrollToServices}
                      className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                    >
                      Explore Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

   {/* Aboutus */}

<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About Mustafa Contractor & Builder</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Trusted by hundreds of clients across Karachi, MCB brings years of experience, craftsmanship, and care to every project.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src="/images/bungalow2.jpg"
          alt="About Mustafa Contractor"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your One-Stop Solution for Home & Commercial Projects</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At <strong>MCB Mustafa Contractor & Builder</strong>, we take pride in offering top-notch services in home construction, renovation, and general maintenance. 
          Whether it's building your dream home or fixing a leaky pipe, our expert team ensures quality workmanship at affordable rates.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We specialize in:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Home & Commercial Construction</li>
          <li>Electrician & Plumbing Services</li>
          <li>Aluminum Fittings & Window Installations</li>
          <li>Carpentry, Painting & Maintenance Work</li>
          <li>Tile & Marble Fixing, POP & Ceiling Work</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          With a commitment to transparency, professionalism, and timely delivery, we aim to be the go-to solution for every household and business in Karachi. Let us help you build and maintain the spaces you care about.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Our Services */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularProjects.map((project, index) => {
              const slug = project.name.toLowerCase().replace(/ /g, '-');
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
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
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">
                      {project.rating} ({project.reviews})
                    </span>
                  </div>
                  <div className="mt-auto">
                    <WhatsAppButton serviceName={project.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
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
                <p className="text-sm text-gray-500 mb-4">{project.category}</p>
                <div className="mt-auto">
                  <WhatsAppButton serviceName={project.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
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
                <p className="text-sm text-gray-500 mb-4">{service.category}</p>
                <div className="mt-auto">
                  <WhatsAppButton serviceName={service.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Specialized Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover our specialized construction and renovation services, delivered with expertise and precision
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {service.rating} ({service.reviews})
                  </span>
                </div>
                <div className="mt-auto">
                  <WhatsAppButton serviceName={service.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Show More Services Button */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Show More Services
          </Link>
        </div>
      </section>
         {/* Testimonials Section */}
         <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              What our clients say about our work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
