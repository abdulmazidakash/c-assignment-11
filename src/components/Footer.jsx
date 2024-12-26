import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-200 text-black shadow-lg">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Artifact Atlas</h2>
            <p className="text-black font-semibold">
              Discover, share, and explore amazing artifacts from history.
              Artifact Atlas connects enthusiasts worldwide to preserve history.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link to="/" className="hover:underline hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-artifacts"
                  className="hover:underline hover:text-black"
                >
                  All Artifacts
                </Link>
              </li>
              <li>
                <Link
                  to="/add-artifact"
                  className="hover:underline hover:text-black"
                >
                  Add Artifact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:text-black"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-black font-semibold">
          <p>© 2024 Artifact Atlas. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/terms"
                className="hover:underline hover:text-black"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:underline hover:text-black"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-black"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

