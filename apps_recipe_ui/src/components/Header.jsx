import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  return (
    <header className="bg-orange-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <span className="text-lg font-semibold">Recipe</span>
          </a>
        </div>

        <div className="hidden lg:flex gap-6 font-medium">
          <a href="/" className="hover:text-white/90 transition">
            Home
          </a>

          <a onClick={handleContact} className="hover:text-white/90 transition">
            Contact
          </a>
          <a onClick={handleLogin} className="hover:text-white/90 transition">
            Login
          </a>
          <a onClick={handleAbout} className="hover:text-white/90 transition">
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-orange-500 transition"
            aria-label="Toggle mobile menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-amber-600 px-6 pb-4 pt-2 space-y-2 font-medium">
          <a href="/" className="block hover:text-white/90 transition">
            Home
          </a>

          <a
            onClick={handleContact}
            className="block hover:text-white/90 transition"
          >
            Contact
          </a>
          <a
            onClick={handleLogin}
            className="block hover:text-white/90 transition"
          >
            Login
          </a>
          <a
            onClick={handleAbout}
            className="block hover:text-white/90 transition"
          >
            About
          </a>
        </div>
      )}
    </header>
  );
}
