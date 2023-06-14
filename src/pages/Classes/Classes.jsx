import useClass from "../../hooks/useClass";
import ClassCard from "./ClassCard";

const Classes = () => {
    const [classes] = useClass();

    return (
        <div className="grid grid-cols-3">
            {
                classes.map(singleClass => <ClassCard
                    key={singleClass._id}
                    singleClass={singleClass}
                    
                ></ClassCard>)
            }
        </div>
    );
};

export default Classes;

