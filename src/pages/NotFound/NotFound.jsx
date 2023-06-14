import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../../assets/notfound.jpg'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.img
        src={img} // Replace with the path to your 404 image
        alt="404 Not Found"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-4/12'
      />
      <motion.p
        className="text-4xl font-bold text-gray-800 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Oops! Page not found.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;