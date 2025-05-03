'use client';
import { useState } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  '/images/concrete.jpg',
  '/images/windows.jpg',
  '/images/plumbing.jpg',
  '/images/roofing.jpg',
  '/images/complete electrical.jpg',
  '/images/completerodeling.jpg',
  '/images/remodeling.jpg',
  '/images/Handyman.jpg',
  '/images/electrical.jpg',
  '/images/roofing.jpg'
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including plumbing, electrical, HVAC, remodeling, roofing, painting, cleaning, window installation, concrete work, and general handyperson tasks."
  },
  {
    question: "How can I request a quote or schedule a service?",
    answer: "You can request a free quote or schedule a service by filling out our contact form, calling us, or visiting our office. We aim to respond within 24 hours."
  },
  {
    question: "Are your contractors licensed and insured?",
    answer: "Yes, all our contractors are licensed, insured, and experienced in their respective trades to ensure safety and quality service."
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Absolutely! We provide emergency repair services 24/7 for plumbing, electrical, and other urgent repairs. Just call our emergency hotline."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on the scope. Minor repairs may take a few hours, while remodeling projects can span several days. We always provide an estimated timeline before starting."
  },
  {
    question: "Can I choose the materials used for my project?",
    answer: "Yes, clients are welcome to choose materials. We also offer recommendations based on budget and project type to ensure the best results."
  },
  {
    question: "Do you provide warranties on your services?",
    answer: "Yes, we provide a satisfaction guarantee and offer warranties on all major work. Specific terms depend on the service category."
  },
  {
    question: "How do you ensure safety on construction sites?",
    answer: "Safety is our top priority. Our team follows strict safety protocols and is trained regularly on the latest construction safety standards."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we assist with all necessary permits and arrange inspections where required, to ensure your project meets local regulations."
  },
  {
    question: "Are your practices eco-friendly?",
    answer: "We prioritize sustainable practices by using eco-friendly materials, reducing waste, and promoting energy-efficient solutions whenever possible."
  }
];

export default function FAQ() {
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
                    Frequently Asked Questions
                  </h1>
                  <p className="text-lg sm:text-xl mb-8">
                    Find answers to common questions about our services
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 