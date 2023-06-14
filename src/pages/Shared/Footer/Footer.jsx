import { Link } from "react-router-dom";
import logo from '../../../../src/assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-800 to-green-900 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Link to="/" className="text-3xl text-white font-semibold ml-10">
            Melody Muse
            </Link>
            <img className="h-[200px]" src={logo} alt="" />
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl text-white font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-300">123 Main Street</p>
            <p className="text-gray-300">City, State ZIP</p>
            <p className="text-gray-300 mt-2">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@yourmusiccamp.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl text-white font-semibold mb-3">Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Your Music Camp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;