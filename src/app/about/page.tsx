import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { aboutData } from "@/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | MCB Construction",
    description:
        "Learn about MCB Construction - over 15 years of excellence in residential, commercial, and industrial construction. Our mission, values, and commitment to quality.",
    openGraph: {
        title: "About MCB Construction",
        description:
            "Over 15 years of excellence in construction. Learn about our mission, values, and commitment to quality.",
        images: ["/images/villa2.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MCB Construction",
    description: aboutData.description,
    url: "https://www.mustafabuilderanddeveloper.com.pk/about",
    mainEntity: {
        "@type": "Organization",
        name: aboutData.companyName,
        description: aboutData.description,
        foundingDate: "2008",
        numberOfEmployees: "100+",
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title="About MCB Construction"
                subtitle={aboutData.tagline}
                backgroundImage="/images/villa2.jpg"
                height="medium"
            />

            {/* Company Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {aboutData.description}
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {aboutData.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-blue-600 mb-4">
                                <svg
                                    className="w-12 h-12"
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {aboutData.mission}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-blue-600 mb-4">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {aboutData.vision}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Our Core Values"
                        subtitle="The principles that guide everything we do"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutData.values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Why Choose MCB Construction"
                        subtitle="What sets us apart from other contractors"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aboutData.whyChooseUs.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="text-blue-600 mb-3">
                                    <svg
                                        className="w-8 h-8"
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
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company History */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Our Journey"
                        subtitle="Milestones in our growth and success"
                    />
                    <div className="space-y-8">
                        {aboutData.history.map((milestone, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-1 pt-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {milestone.milestone}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's bring your construction project to life
                    </p>
                    <CTAButton href="/contact" variant="secondary" size="large">
                        Get in Touch
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
