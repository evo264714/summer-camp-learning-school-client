import useInstructor from "../../../hooks/useInstructor";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructor = () => {
    const [instructor] = useInstructor()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-6">
            {
                instructor.map(ins => <PopularInstructorsCard
                    key={ins._id}
                    ins={ins}
                ></PopularInstructorsCard>)
            }
        </div>
    )
};

export default PopularInstructor;