import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white text-gray-700 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + Mission */}
        <div>
          <h2 className="text-xl font-bold text-blue-900 mb-3">NCCFO</h2>
          <p className="text-sm text-gray-600">
            Strengthening the national economy through accessible credit and structured business finance support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/use-cases" className="hover:text-blue-600">Use Cases</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Email: <a href="mailto:info@nccfo.gov" className="hover:underline">info@nccfo.gov</a></li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>123 Constitution Blvd, Washington, DC</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4 text-blue-700">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-500" /></a>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border text-sm text-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 text-center text-xs text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} National Credit Commercial Finance Office (NCCFO). All rights reserved.
      </div>
    </footer>
  );
}
