'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const faqs = [
  {
    question: 'How do I find a professional for my project?',
    answer: 'You can browse our services page to find the type of professional you need. Each service category has a list of qualified professionals in your area. You can also use our search function to find specific services.'
  },
  {
    question: 'How are professionals vetted?',
    answer: 'All professionals on our platform go through a thorough verification process, including background checks, license verification, and review of their previous work. We also collect and verify customer reviews to ensure quality.'
  },
  {
    question: 'How do I get a quote for my project?',
    answer: 'You can request a quote by filling out our contact form with details about your project. A professional will review your request and provide you with a detailed quote. You can also directly contact professionals through their profiles.'
  },
  {
    question: 'What if I\'m not satisfied with the work?',
    answer: 'We have a satisfaction guarantee policy. If you\'re not satisfied with the work, please contact us immediately. We\'ll work with you and the professional to resolve any issues.'
  },
  {
    question: 'How do payments work?',
    answer: 'Payments are made directly to the professional after the work is completed to your satisfaction. We recommend discussing payment terms with the professional before starting the project.'
  },
  {
    question: 'Are the professionals insured?',
    answer: 'Yes, all professionals on our platform are required to have proper insurance coverage. This includes general liability insurance and workers\' compensation where applicable.'
  },
  {
    question: 'How do I leave a review?',
    answer: 'After your project is completed, you\'ll receive an email with a link to leave a review. You can also log into your account and leave a review through the project history section.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We currently service major metropolitan areas across the country. You can check if we\'re available in your area by entering your zip code on our homepage.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </h3>
                      <svg
                        className={`h-6 w-6 transform transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Contact us directly and we'll be happy to help
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 