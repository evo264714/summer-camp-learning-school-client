import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructorAccess from "../../hooks/useInstructorAccess";

const ClassCard = ({ singleClass }) => {
    const { name, instructorName, image, availableSeats, price, _id } = singleClass;
    const { user, loading } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorAccess()

    const handleSelectClass = (item) => {
        
        if(loading){
            console.log(item);
        }

        if (user && user.email) {
            const selectedClasses = { classId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/singleuserclass', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please log in",
                text: "You need to log in before selecting a class.",
                icon: "info",
                showCancelButton: true,
                cancelButtonText: "Cancel",
                confirmButtonText: "Log In",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (

        <div className={`card w-96 shadow-xl my-8 ${singleClass.availableSeats === 0 ? "bg-red-600" : "bg-warning"}`}>
            <figure><img className="h-72 w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => handleSelectClass(singleClass)} className="btn btn-white" disabled={ isAdmin  || isInstructor || singleClass.availableSeats === 0}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;