import { notFound } from "next/navigation";
import Image from "next/image";
import Hero from "@/app/components/Hero";
import SectionTitle from "@/app/components/SectionTitle";
import Gallery from "@/app/components/Gallery";
import CTAButton from "@/app/components/CTAButton";
import { getServiceBySlug, getAllServices } from "@/lib/data-loader";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const services = getAllServices();
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.name} | MCB Construction`,
        description: service.description,
        openGraph: {
            title: `${service.name} | MCB Construction`,
            description: service.shortDescription,
            images: [service.image],
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
            "@type": "GeneralContractor",
            name: "MCB Construction",
            url: "https://www.mustafabuilderanddeveloper.com.pk",
        },
        image: service.image,
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title={service.name}
                subtitle={service.shortDescription}
                backgroundImage={service.image}
                height="medium"
            />

            {/* Description */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="What We Offer" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                            >
                                <svg
                                    className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
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
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="Our Process" subtitle="How we deliver excellence" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {service.gallery && service.gallery.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle title="Gallery" subtitle="See our work in action" />
                        <Gallery images={service.gallery} alt={service.name} />
                    </div>
                </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle title="Frequently Asked Questions" />
                        <div className="space-y-6">
                            {service.faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Book This Service?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get in touch for a free consultation and quote
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/contact" variant="secondary" size="large">
                            Book This Service
                        </CTAButton>
                        <CTAButton
                            href="/services"
                            variant="outline"
                            size="large"
                            className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                            View All Services
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
