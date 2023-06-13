import useInstructor from "../../hooks/useInstructor";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [instructor] = useInstructor();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {
                instructor.map(ins => <InstructorsCard
                    key={ins._id}
                    ins={ins}
                ></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;