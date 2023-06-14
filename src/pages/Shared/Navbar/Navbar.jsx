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

        <div className="flex items-center">
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

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex items-center sm:space-x-4 mt-4 sm:mt-0`}
          >
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
      </div>
    </nav>
  );
};

export default Navbar;
