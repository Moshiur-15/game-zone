import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-300/80 text-black dark:text-white py-8 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex gap-2 items-center">
              <img className="h-14 w-14 rounded-full" src={logo} alt="" />
              <h2 className="text-blue-400 text-xl font-bold">GameZone</h2>
            </div>
            <p className="mt-4 max-w-xs">
              Welcome to{" "}
              <span className="text-blue-400 font-semibold">GameZone</span>!
              Your ultimate platform for exploring game reviews, ratings, and
              exciting news.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/latestNews" className="hover:text-blue-300">
                  latest News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="mt-6">
            <h3 className="text-blue-400 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6 mt-6">
              {/* Email */}
              <a
                href="mailto:masiurislam28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-red-500 hover:text-red-600 transition duration-300"
              >
                <FaEnvelope />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+8801327023639"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 text-3xl cursor-pointer hover:text-green-600 transition" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer hover:text-blue-700 transition" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-500 text-3xl cursor-pointer hover:text-blue-700 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; 2025 GameZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
