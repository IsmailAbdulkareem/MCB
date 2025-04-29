import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const serviceDetails = {
  handyperson: {
    title: 'Handyperson Services',
    description: 'Professional handyperson services for all your home maintenance and repair needs.',
    services: [
      'Furniture Assembly',
      'Picture Hanging',
      'Minor Plumbing Repairs',
      'Electrical Work',
      'Drywall Repair',
      'Painting',
      'Carpentry',
      'General Home Repairs'
    ],
    image: '/images/handyperson.jpg'
  },
  landscaping: {
    title: 'Landscaping Services',
    description: 'Transform your outdoor space with our professional landscaping services.',
    services: [
      'Lawn Maintenance',
      'Garden Design',
      'Tree Planting',
      'Hedge Trimming',
      'Irrigation Systems',
      'Hardscaping',
      'Seasonal Cleanup',
      'Landscape Lighting'
    ],
    image: '/images/landscaping.jpg'
  },
  plumbing: {
    title: 'Plumbing Services',
    description: 'Expert plumbing services for residential and commercial properties.',
    services: [
      'Pipe Repair',
      'Drain Cleaning',
      'Water Heater Installation',
      'Bathroom Remodeling',
      'Leak Detection',
      'Sewer Line Repair',
      'Fixture Installation',
      'Emergency Services'
    ],
    image: '/images/plumbing.jpg'
  },
  // Add more service details as needed
};

type Props = {
  params: { service: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ServicePage({ params }: Props) {
  const service = serviceDetails[params.service as keyof typeof serviceDetails] || {
    title: 'Service Not Found',
    description: 'The requested service is not available.',
    services: [],
    image: ''
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                Our Services
              </h2>
              <ul className="space-y-4">
                {service.services.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2"
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-medium text-gray-900">Experienced Professionals</h3>
              <p className="mt-2 text-gray-500">
                Our team consists of highly skilled and experienced professionals
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-lg font-medium text-gray-900">Quality Guarantee</h3>
              <p className="mt-2 text-gray-500">
                We stand behind our work with a satisfaction guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-medium text-gray-900">Competitive Pricing</h3>
              <p className="mt-2 text-gray-500">
                Get high-quality services at competitive prices
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 