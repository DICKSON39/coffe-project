import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-4 sm:mb-2">© 2025 Coffee Shop. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-4 sm:mb-2">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 cursor-pointer transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 cursor-pointer transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 cursor-pointer transition duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Links */}
        <p className="text-sm text-gray-400 space-x-4">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="/refund" className="hover:text-white">Refund Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;