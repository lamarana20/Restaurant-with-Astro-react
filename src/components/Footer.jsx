import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-100 border-t border-gray-300 p-3 mt-3">
      <footer className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm py-3 px-4 select-none">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Restaurant Astro. Tous droits réservés.</p>
        <div className="flex gap-4 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
