import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Company Info Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Nike Store</h2>
          <p className="text-gray-400">1234 Nike Road, Sports City, SC 12345</p>
          <p className="text-gray-400">Email: info@nikestore.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 text-center text-gray-500">
        <p>&copy; 2024 Nike Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
