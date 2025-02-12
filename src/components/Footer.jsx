import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-black dark:text-white shadow-lg">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Artifact Atlas</h2>
            <p className="font-semibold">
              Discover, share, and explore amazing artifacts from history.
              Artifact Atlas connects enthusiasts worldwide to preserve history.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link to="/" className="hover:underline hover:text-black dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-artifacts"
                  className="hover:underline hover:text-black dark:hover:text-white"
                >
                  All Artifacts
                </Link>
              </li>
              <li>
                <Link
                  to="/add-artifact"
                  className="hover:underline hover:text-black dark:hover:text-white"
                >
                  Add Artifact
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:underline hover:text-black dark:hover:text-white"
                >
                  Terms And Conditions
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
                className="text-black dark:text-white hover:text-black dark:hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-black dark:hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-black dark:hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-black dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 dark:border-gray-500 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm font-semibold">
          <p className="text-black dark:text-white">© 2024 Artifact Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
