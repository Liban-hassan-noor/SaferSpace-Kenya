import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Logo & Mission */}
        <div>
          <img
            src={logo}
            alt="SaferSpace Logo"
            className="h-24 w-24 mx-auto md:mx-0 rounded-full shadow-md object-cover border-4 border-pink-300"
          />
          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            <strong>SaferSpace</strong> empowers girls and survivors across Kenya with safe communities, access to healthcare, and real opportunities — from school to tech careers. Healing, dignity, and hope start here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-pink-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-700 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-pink-700 transition">
                Community
              </Link>
            </li>
            <li>
              <Link to="/health" className="hover:text-pink-700 transition">
                Health Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-700 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-pink-600 mb-4">Contact Us</h3>
          <p className="text-sm">
            📧 <a href="mailto:saferspace.kenya@gmail.com" className="hover:text-pink-700">saferspace.kenya@gmail.com</a>
          </p>
          <p className="text-sm">
            📞 <a href="tel:+254717796098" className="hover:text-pink-700">+254 717 796 098</a>
          </p>
          <p className="text-sm">
            💼 <a
              href="https://www.linkedin.com/company/saferspace-kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700"
            >
              LinkedIn: SaferSpace Kenya
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-pink-200 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SaferSpace Kenya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
