
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructorAccess from "../hooks/useInstructorAccess";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isInstructorLoading] = useInstructorAccess();
    const location = useLocation()
    if (loading || isInstructorLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user?.role == 'instructor') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;