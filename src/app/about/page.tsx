import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              About HomeFix
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connecting homeowners with trusted professionals since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making Home Improvement Simple
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that finding the right professional for your home improvement needs should be easy, transparent, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Trust & Quality</h3>
              <p className="mt-2 text-gray-500">
                We carefully vet all professionals to ensure they meet our high standards of quality and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Transparency</h3>
              <p className="mt-2 text-gray-500">
                Clear pricing, honest reviews, and open communication between homeowners and professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Customer Focus</h3>
              <p className="mt-2 text-gray-500">
                Your satisfaction is our priority. We're here to make your home improvement journey smooth and successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
              <p className="text-gray-500">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900">Mike Johnson</h3>
              <p className="text-gray-500">Customer Success Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 