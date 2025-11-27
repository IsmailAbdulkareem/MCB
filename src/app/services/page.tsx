import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { getAllServices } from "@/lib/data-loader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | MCB Construction",
    description:
        "Explore our comprehensive construction services including plumbing, electrical, roofing, remodeling, and more. Expert contractors for all your construction needs.",
    openGraph: {
        title: "Construction Services | MCB Construction",
        description:
            "Comprehensive construction services from expert contractors. Plumbing, electrical, roofing, remodeling, and more.",
        images: ["/images/plumbing.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Services",
    provider: {
        "@type": "GeneralContractor",
        name: "MCB Construction",
        url: "https://www.mustafabuilderanddeveloper.com.pk",
    },
    areaServed: "United States",
    description:
        "Comprehensive construction services including plumbing, electrical, roofing, renovation, and more.",
};

export default function ServicesPage() {
    const services = getAllServices();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title="Our Services"
                subtitle="Comprehensive construction solutions for every need"
                backgroundImage="/images/electrical.jpg"
                height="medium"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="What We Offer"
                        subtitle="From new construction to repairs, we handle it all with expertise and professionalism"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                name={service.name}
                                slug={service.slug}
                                shortDescription={service.shortDescription}
                                image={service.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="Why Choose Our Services" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Licensed & Insured
                            </h3>
                            <p className="text-gray-600">
                                Fully licensed contractors with comprehensive insurance coverage
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                On-Time Delivery
                            </h3>
                            <p className="text-gray-600">
                                We respect deadlines and complete projects on schedule
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Quality Materials
                            </h3>
                            <p className="text-gray-600">
                                We use only premium materials for lasting results
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Transparent Pricing
                            </h3>
                            <p className="text-gray-600">
                                Clear, upfront quotes with no hidden fees
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
