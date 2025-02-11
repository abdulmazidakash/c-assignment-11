import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-rose-900 text-white shadow-lg sticky z-50 top-0 h-20 flex justify-center items-center">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wide uppercase">
            Artifact Atlas
          </span>
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold items-center">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/all-artifacts" className="hover:text-yellow-300">All Artifacts</Link>
          <Link to="/terms-and-conditions" className="hover:text-yellow-300">Terms & Conditions</Link>
          {user && <Link to="/add-artifact" className="hover:text-yellow-300">Add Artifacts</Link>}
          {!user ? (
            <Link
              to="/login"
              className="bg-white text-rose-700 py-1 px-4 rounded-full hover:bg-gray-100"
            >
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="btn btn-circle avatar border-2 border-white"
              >
                <div title={user?.displayName} className="w-10 h-10 rounded-full overflow-hidden">
                  <img referrerPolicy="no-referrer" alt="User Profile" src={user?.photoURL} />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 bg-rose-900 text-white rounded-lg shadow-lg w-56"
              >
                <li><Link to="/my-artifacts">My Artifacts</Link></li>
                <li><Link to="/liked-artifacts">Liked Artifacts</Link></li>
                <li>
                  <button
                    onClick={logOut}
                    className="w-full py-2 bg-rose-700 hover:bg-rose-600 text-white rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 w-full bg-gradient-to-r from-rose-700 via-gray-600 to-rose-500 p-5 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-center">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/all-artifacts" onClick={() => setIsMenuOpen(false)}>All Artifacts</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          {user && <li><Link to="/add-artifact" onClick={() => setIsMenuOpen(false)}>Add Artifacts</Link></li>}
          {!user ? (
            <li>
              <Link to="/login" className="block bg-white text-purple-700 py-2 px-4 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          ) : (
            <>
              <li><Link to="/my-artifacts" onClick={() => setIsMenuOpen(false)}>My Artifacts</Link></li>
              <li><Link to="/liked-artifacts" onClick={() => setIsMenuOpen(false)}>Liked Artifacts</Link></li>
              <li>
                <button onClick={() => { logOut(); setIsMenuOpen(false); }} className="w-full py-2 bg-gray-700 hover:bg-rose-600 text-white rounded-md">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
