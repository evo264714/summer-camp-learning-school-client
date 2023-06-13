import useInstructor from "../../../hooks/useInstructor";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructor = () => {
    const [instructor] = useInstructor()

    return (
        <>
        <div className="divider"></div>
        <h2 className="text-center text-success text-xl md:text-7xl lg:text-7xl font-bold py-8">Our Popular Instructors</h2>
        <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-6">

                {
                    instructor.map(ins => <PopularInstructorsCard
                        key={ins._id}
                        ins={ins}
                    ></PopularInstructorsCard>)
                }
            </div>
        </>
    )
};

export default PopularInstructor;