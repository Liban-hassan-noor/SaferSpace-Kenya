import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative z-50">
      <div className="flex items-center space-x-2">
        
        {/* Logo */}
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <Link to="/">
            <img
              src="../src/assets/logo.jpg"
              alt="SaferSpace Logo"
              className="w-full h-full object-cover object-center scale-150"
            />
          </Link>
        </div>
        {/* Brand name */}
        <span className="text-pink-700 font-bold text-2xl">SaferSpace</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Animated Mobile Links */}
      <div
        className={`absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col space-y-4 md:hidden w-40 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "text-gray-700"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
