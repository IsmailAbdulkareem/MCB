import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | MCB Construction",
    description:
        "Get in touch with MCB Construction for a free consultation and quote. We're here to help with all your construction needs.",
    openGraph: {
        title: "Contact MCB Construction",
        description:
            "Get in touch for a free consultation and quote. We're here to help with all your construction needs.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MCB Construction",
    description:
        "Contact MCB Construction for construction services inquiries and quotes.",
    url: "https://www.mustafabuilderanddeveloper.com.pk/contact",
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                title="Get in Touch"
                subtitle="Let's discuss your construction project"
                backgroundImage="/images/bungalow1.jpg"
                height="medium"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have a question or ready to start your project? Reach out to us
                                and we'll get back to you as soon as possible.
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600">+92 3052200135</p>
                                        <p className="text-sm text-gray-500">
                                            Mon-Fri: 8:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">gulammustaf031@gmail.com</p>
                                        <p className="text-sm text-gray-500">
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Office Address
                                        </h3>
                                        <p className="text-gray-600">
                                             Bahria Midway Commercial(4)
                                            <br />
                                            Bharia Town
                                        </p>
                                        <p className="text-sm text-gray-500">Karachi , Pakistan</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-blue-600"
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
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Business Hours
                                        </h3>
                                        <p className="text-gray-600">
                                            Monday - Friday: 8:00 AM - 6:00 PM
                                            <br />
                                            Saturday: 9:00 AM - 4:00 PM
                                            <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Emergency Services Available
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    For urgent construction emergencies, call our 24/7 hotline:
                                </p>
                                <a
                                    href="tel:+923052200135"
                                    className="text-xl font-bold text-blue-600"
                                >
                                    +92 3052200135
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="service"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Service Interested In
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Construction</option>
                                        <option value="commercial">Commercial Construction</option>
                                        <option value="industrial">Industrial Construction</option>
                                        <option value="renovation">Renovation & Remodeling</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <CTAButton variant="primary" size="large" fullWidth>
                                    Send Message
                                </CTAButton>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our privacy policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <svg
                            className="w-16 h-16 text-gray-400 mx-auto mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                            />
                        </svg>
                        <p className="text-gray-500">Google Maps Integration Here</p>
                        <p className="text-sm text-gray-400 mt-2">
                            123 Construction Ave, Builder City, BC 12345
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
