import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-teal-800 to-green-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-semibold">
          Melody Muse
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-white mx-4 hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/instructors" className="text-white mx-4 hover:text-gray-300 transition duration-300">
            Instructors
          </Link>
          <Link to="/classes" className="text-white mx-4 hover:text-gray-300 transition duration-300">
            Classes
          </Link>
          <Link to="/dashboard" className="text-white mx-4 hover:text-gray-300 transition duration-300">
            Dashboard
          </Link>
          <div className="flex items-center">
            <img src="user-profile-picture.jpg" alt="User Profile" className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;