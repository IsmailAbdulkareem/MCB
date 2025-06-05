import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MCB</h3>
            <p className="text-gray-400">
              Connecting homeowners with trusted professionals for all home improvement needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/handyman" className="text-gray-400 hover:text-white">
                  Handyperson
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-gray-400 hover:text-white">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-gray-400 hover:text-white">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/windows" className="text-gray-400 hover:text-white">
                  Windows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-white" />
                <a href="tel:+923052200135" className="hover:text-white">
                  +92 3052200135
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-white" />
                <a href="mailto:gulammustaf031@g.mail.com" className="hover:text-white">
                  gulammustaf031@g.mail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-white" />
                <a
                  href="https://wa.me/+923052200135?text=Hello!%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      {/* Developer Contact Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-lg font-semibold">Contact Developer</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/ismail-abdul-kareem-233b302b3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/+923279671138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="tel:+923279671138"
                className="text-gray-400 hover:text-white transition-colors"
                title="Phone"
              >
                <FaPhone className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/IsmailKare63834"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Developed with ❤️ by Ismail Abdul Kareem from Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MCB. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}
