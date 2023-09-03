import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-teal-800 to-green-900 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-semibold">
          Melody Muse
        </Link>

        {/* Display the menu button on mobile devices */}
        <button
          className="text-white focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Display the navigation links */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/instructor"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Classes
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost text-white hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="h-8 w-8 rounded-full"
              />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-gradient-to-b from-teal-800 to-green-900`}
      >
        <div className="container mx-auto px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/instructor"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className="block text-white hover:text-gray-300 transition duration-300"
          >
            Classes
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block text-white hover:text-gray-300 transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogOut}
                className="block text-white hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="block h-8 w-8 rounded-full mx-auto"
              />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-white hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
