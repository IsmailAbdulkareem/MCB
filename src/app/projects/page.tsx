'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highriseProjects = [
  {
    name: 'Modern Office Tower',
    description: 'State-of-the-art office building with sustainable features',
    image: '/images/highrise1.jpg',
    rating: 4.8,
    reviews: '120+'
  },
  {
    name: 'Residential Complex',
    description: 'Luxury residential high-rise with premium amenities',
    image: '/images/highrise2.jpg',
    rating: 4.9,
    reviews: '85+'
  },
  {
    name: 'Mixed-Use Development',
    description: 'Combined commercial and residential space',
    image: '/images/highrise3.jpg',
    rating: 4.7,
    reviews: '95+'
  }
];

const villaProjects = [
  {
    name: 'Luxury Villa',
    description: 'Modern luxury villa with premium finishes and amenities',
    image: '/images/villa1.jpg',
    rating: 4.9,
    reviews: '75+'
  },
  {
    name: 'Contemporary Villa',
    description: 'Sleek contemporary design with smart home features',
    image: '/images/villa2.jpg',
    rating: 4.8,
    reviews: '60+'
  },
  {
    name: 'Mediterranean Villa',
    description: 'Classic Mediterranean style with modern comforts',
    image: '/images/villa3.jpg',
    rating: 4.7,
    reviews: '45+'
  }
];

const bungalowProjects = [
  {
    name: 'Modern Bungalow',
    description: 'Contemporary single-story home with open floor plan',
    image: '/images/bungalow1.jpg',
    rating: 4.8,
    reviews: '55+'
  },
  {
    name: 'Traditional Bungalow',
    description: 'Classic bungalow design with modern amenities',
    image: '/images/bungalow2.jpg',
    rating: 4.7,
    reviews: '40+'
  },
  {
    name: 'Eco-Friendly Bungalow',
    description: 'Sustainable bungalow with energy-efficient features',
    image: '/images/bungalow3.jpg',
    rating: 4.9,
    reviews: '35+'
  }
];

const factoryProjects = [
  {
    name: 'Industrial Factory',
    description: 'Modern industrial facility with advanced manufacturing capabilities',
    image: '/images/factory1.jpg',
    rating: 4.8,
    reviews: '65+'
  },
  {
    name: 'Warehouse Complex',
    description: 'Large-scale warehouse with efficient logistics design',
    image: '/images/factory2.jpg',
    rating: 4.7,
    reviews: '50+'
  },

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

const stats = [
  { number: '100+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Happy Clients' },
  { number: '50+', label: 'Expert Team Members' }
];

const carouselImages = [
  {
    src: '/images/excavation.jpg',
    alt: 'Modern Construction Projects',
    title: 'Building Excellence',
    description: 'Delivering quality construction projects since 2013'
  },
  {
    src: '/images/highrise1.jpg',
    alt: 'Highrise Buildings',
    title: 'Highrise Buildings',
    description: 'State-of-the-art commercial and residential towers'
  },
  {
    src: '/images/villa1.jpg',
    alt: 'Luxury Villas',
    title: 'Luxury Villas',
    description: 'Elegant and modern living spaces'
  },
  {
    src: '/images/bungalow1.jpg',
    alt: 'Bungalows',
    title: 'Bungalows',
    description: 'Comfortable and sustainable homes'
  },
  {
    src: '/images/factory1.jpg',
    alt: 'Industrial Facilities',
    title: 'Industrial Facilities',
    description: 'Efficient and modern manufacturing spaces'
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#36454F] bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    {image.title}
                  </h1>
                  <p className="text-lg sm:text-xl mb-8">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="sticky top-16 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {['highrise', 'villa', 'bungalow', 'factory'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium whitespace-nowrap px-4 py-2 rounded-full transition-all ${
                  activeTab === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} Projects
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        {/* Project Sections */}
        {[
          { id: 'highrise', title: 'Highrise Buildings', description: 'State-of-the-art highrise buildings that redefine urban living and working spaces', projects: highriseProjects },
          { id: 'villa', title: 'Villa Projects', description: 'Luxury villas that combine comfort, style, and modern living', projects: villaProjects },
          { id: 'bungalow', title: 'Bungalow Projects', description: 'Elegant bungalows designed for comfortable and sustainable living', projects: bungalowProjects },
          { id: 'factory', title: 'Factory Projects', description: 'Industrial facilities built for efficiency and productivity', projects: factoryProjects }
        ].map((section) => (
          <section key={section.id} id={section.id} className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">{section.title}</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                {section.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex items-center mb-4">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-gray-600">
                          {project.rating} ({project.reviews})
                        </span>
                      </div>
                      <WhatsAppButton serviceName={project.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

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

        {/* Call to Action Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life
            </p>
            <div className="flex justify-center space-x-4">
              <WhatsAppButton serviceName="New Project Inquiry" />
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 