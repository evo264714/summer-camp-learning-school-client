import { motion } from 'framer-motion';


const PopularInstructorsCard = ({ ins }) => {
    const { image, name, email, number_of_students } = ins;

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: 'easeOut',
            },
        },
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="card w-96 shadow-xl my-8 bg-amber-500"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.figure variants={imageVariants}>
                <img className="h-72 w-full" src={image} alt="Shoes" />
            </motion.figure>
            <motion.div className="card-body" variants={contentVariants}>
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Number of Students: {number_of_students}</p>
                <motion.div className="card-actions justify-center mt-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-info"
                    >
                        See Profile
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PopularInstructorsCard;


