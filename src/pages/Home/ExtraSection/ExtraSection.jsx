import { motion } from 'framer-motion';

const MusicClassCard = () => {

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="relative h-screen">
      

      <div className="relative flex flex-col items-center justify-center h-screen">
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 max-w-lg"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold mb-4">Join Our Music Classes!</h2>
          <p className="text-lg mb-6">
            Explore the world of music with our experienced instructors. Whether youre a beginner or an advanced musician, we have classes for everyone.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-purple-500 text-white rounded-lg px-4 py-2 shadow-md font-medium"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicClassCard;

