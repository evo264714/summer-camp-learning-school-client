import { motion } from 'framer-motion';
import useClass from '../../../hooks/useClass';

const PopularClassesSection = () => {
    const [classes] = useClass();
    const sortedClasses = [...classes].sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    const topClasses = sortedClasses.slice(0, 6);

    return (
        <>
            <div className="divider"></div>
            <h2 className="text-center text-success text-xl md:text-7xl lg:text-7xl font-bold py-8">Our Popular Classes</h2>
            <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {topClasses.map((classItem) => (
                    <motion.div
                        key={classItem.id}
                        className="class-card bg-gray-200 rounded-lg p-4 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={classItem.image} alt='' className="rounded-2xl h-2/3" />
                        <div className='pt-4'>
                            <h2>Class: {classItem.name}</h2>
                            <p>Instructor: {classItem.instructorName}</p>
                            <p >Students: {classItem.enrolledStudents}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default PopularClassesSection;
