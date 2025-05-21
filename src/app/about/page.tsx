'use client';
import { useState } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function About() {
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
                    About MCB Mustafa Contractor & Builder
                  </h1>
                  <p className="text-lg sm:text-xl mb-8">
                    Learn more about our journey and commitment to excellence
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Story, Mission, Values */}
      <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Who We Are</h2>
      <p className="text-lg text-gray-600">
        Discover our story, our vision, and what drives us to deliver excellence across Karachi & Bahria Town Karachi.
      </p>
    </div>

    {/* Our Story */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-gray-700 mb-3">Our Story</h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        MCB Mustafa Contractor & Builder has proudly served clients across Karachi and Bahria Town Karachi for over a decade.
        We began with a passion to build not just structures, but strong relationships with our clients through consistent excellence
        and unwavering commitment to quality.
      </p>
    </div>

    {/* Our Mission */}
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-gray-700 mb-3">Our Mission</h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        To deliver high-quality construction and renovation services that exceed expectations.
        Our goal is to build lasting value for every home and commercial project,
        ensuring safety, precision, and innovation every step of the way.
      </p>
    </div>

    {/* Our Values */}
    <div>
      <h3 className="text-3xl font-semibold text-gray-700 mb-6">Our Core Values</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 text-lg">
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl">✓</span> Quality Workmanship
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl">✓</span> Customer Satisfaction
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl">✓</span> Professional Integrity
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl">✓</span> Timely Delivery
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-600 text-2xl">✓</span> Safety First
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Who We Are Sections with Images */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/concrete.jpg"
                alt="Concrete work"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Expertise in Residential & Commercial Construction</h3>
              <p className="text-gray-600 text-lg">
                With years of experience in Karachi and Bahria Town Karachi, we specialize in both residential and commercial projects—from complete home renovations to large-scale construction. Our team ensures every project is built to perfection with quality materials and modern techniques.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div>
              <Image
                src="/images/plumbing.jpg"
                alt="Plumbing Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Repair & Maintenance Solutions</h3>
              <p className="text-gray-600 text-lg">
                From plumbing and electrical to roofing and remodeling, MCB Mustafa Contractor & Builder covers all aspects of home and commercial maintenance. We proudly serve clients in Karachi and Bahria Town, ensuring fast response times and reliable service.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/remodeling.jpg"
                alt="Remodeling Projects"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Committed to Innovation & Client Satisfaction</h3>
              <p className="text-gray-600 text-lg">
                At MCB, we believe in building lasting relationships. Whether it’s a custom villa in Bahria Town or a commercial plaza in Karachi, our client-first approach, innovative designs, and reliable project execution are what set us apart.
              </p>
            </div>
          </div>

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
