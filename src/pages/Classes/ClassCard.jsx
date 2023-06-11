import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
    const {name, instructorName, image, availableSeats, price} = singleClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSelectClass = () => {
        if (!user) {
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
                navigate("/login");
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
                    <button onClick={() => handleSelectClass(singleClass._id)} className="btn btn-white"  disabled={singleClass.availableSeats === 0 || user?.role === "admin" || user?.role === "instructor"}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;