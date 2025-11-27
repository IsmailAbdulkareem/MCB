import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import Testimonials from "./components/Testimonials";
import CTAButton from "./components/CTAButton";
import { getFeaturedServices } from "@/lib/data-loader";
import { getFeaturedProjects } from "@/lib/data-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Expert Construction Services",
  description:
    "MCB Construction - Your trusted partner for residential, commercial, and industrial construction projects. Quality craftsmanship, innovative solutions, and exceptional service.",
  openGraph: {
    title: "MCB Construction | Expert Construction Services",
    description:
      "Your trusted partner for residential, commercial, and industrial construction projects.",
    images: ["/images/highrise1.jpg"],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "MCB Construction",
  description:
    "Leading construction company specializing in residential, commercial, and industrial projects.",
  url: "https://www.mustafabuilderanddeveloper.com.pk",
  logo: "https://www.mustafabuilderanddeveloper.com.pk/images/MCB-logo.jpg",
  image: "https://www.mustafabuilderanddeveloper.com.pk/images/highrise1.jpg",
  telephone: "+92 3052200135",
  email: "gulammustaf031@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Construction Ave",
    addressLocality: "Builder City",
    addressRegion: "BC",
    postalCode: "12345",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "450",
  },
  priceRange: "$$",
};

export default function Home() {
  const featuredServices = getFeaturedServices(6);
  const featuredProjects = getFeaturedProjects(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero
        title="Building Dreams, Creating Legacies"
        subtitle="Expert construction services for residential, commercial, and industrial projects"
        backgroundImage="/images/highrise1.jpg"
        ctaText="Get Started Today"
        ctaLink="/contact"
        height="large"
      />

      {/* About Us Snippet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Construction Partner
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                With over 15 years of experience, MCB Construction has been
                transforming visions into reality. We specialize in residential,
                commercial, and industrial projects, delivering quality
                craftsmanship and exceptional service on every project.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to excellence, transparency, and customer
                satisfaction has made us a leading construction company trusted
                by hundreds of satisfied clients.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    450+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              <CTAButton href="/about" variant="primary">
                Learn More About Us
              </CTAButton>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <img
                src="/images/villa1.jpg"
                alt="Construction Site"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive construction services tailored to your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                slug={service.slug}
                shortDescription={service.shortDescription}
                image={service.image}
              />
            ))}
          </div>
          <div className="text-center">
            <CTAButton href="/services" variant="outline" size="large">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="Explore our portfolio of successful construction projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                slug={project.slug}
                category={project.category}
                shortDescription={project.shortDescription}
                image={project.image}
                location={project.location}
              />
            ))}
          </div>
          <div className="text-center">
            <CTAButton href="/projects" variant="outline" size="large">
              View All Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Don't just take our word for it - hear from our satisfied clients"
          />
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Get a Free Quote
            </CTAButton>
            <CTAButton href="/services" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
