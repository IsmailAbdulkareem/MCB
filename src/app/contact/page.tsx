'use client';
import { useState } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import toast, { Toaster } from 'react-hot-toast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending message...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      toast.dismiss(loadingToast);
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen pt-16">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4aed88',
              secondary: '#fff',
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#fff',
            },
          },
        }}
      />
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
                    Contact Us
                  </h1>
                  <p className="text-lg sm:text-xl mb-8">
                    Get in touch with our team
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+92 3052200135</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">gulammustaf031@g.mail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM To</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="roofing">Roofing</option>
                    <option value="handyman">Handyman</option>
                    <option value="remodeling">Remodeling</option>
                    <option value="windows">Windows</option>
                    <option value="concrete">Concrete</option>
                    <option value="aluminum-work">Aluminum Work</option>
                    <option value="door-installation">Door Installation</option>
                    <option value="villa-excavation">Villa Excavation</option>
                    <option value="steel-fabrication">Steel Fabrication</option>
                    <option value="farm-shedding">Farm Shedding</option>
                    <option value="project-pouring">Project Pouring</option>
                    <option value="tile-installation">Tile Installation</option>
                    <option value="block-masonry">Block Masonry</option>
                    <option value="bamboo-plaster">Bamboo Plaster</option>
                    <option value="painting-services">Painting Services</option>
                    <option value="door-polish">Door Polish</option>
                    <option value="stone-elevation">Stone Elevation</option>
                    <option value="ms-fabrication">MS Fabrication</option>
                    <option value="ss-railing">SS Railing</option>
                    <option value="marble-stairs">Marble Stairs</option>
                    <option value="electrical-conduit">Electrical Conduit</option>
                    <option value="main-gate">Main Gate Installation</option>
                    <option value="plumbing-conduit">Plumbing Conduit</option>
                    <option value="sanitary-installation">Sanitary Installation</option>
                    <option value="car-painting">Carpainting</option>
                    <option value="kitchen-wardrobe">Kitchen Wardrobe</option>
                    <option value="garden-design">Garden Design</option>
                    <option value="camera-installation">Camera Installation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
