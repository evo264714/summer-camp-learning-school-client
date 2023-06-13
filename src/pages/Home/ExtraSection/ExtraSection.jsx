import { motion } from 'framer-motion';

const ExtraSection = () => {

  return (
    <div className="flex items-center justify-center">
    <motion.div
      className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-white text-2xl font-bold mb-4 p-3">Join our Music Classes</h2>
      <p className="text-white text-lg p-3">Explore the world of music and enhance your skills.</p>
      <motion.button
        className="btn btn-white mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  </div>
  );
};

export default ExtraSection;

