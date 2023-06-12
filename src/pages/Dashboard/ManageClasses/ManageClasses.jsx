import { useState, useEffect } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useFetch from './../../../hooks/useFetch';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoading, data, error } = useFetch("http://localhost:5000/classes");

  useEffect(() => {
    if (data) {
      setClasses(data);
      setLoading(false);
    }
  }, [data]);

  const handleApprove = (classId) => {
    const updatedClass = { status: "approved" };

    fetch(`http://localhost:5000/classes/${classId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then(() => {
        setClasses((prevClasses) =>
          prevClasses.map((cls) =>
            cls._id === classId ? { ...cls, status: "approved" } : cls
          )
        );

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class has been approved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error approving class:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  const handleDeny = (classId) => {
    const updatedClass = { status: "denied" };

    fetch(`http://localhost:5000/classes/${classId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then(() => {
        setClasses((prevClasses) =>
          prevClasses.map((cls) =>
            cls._id === classId ? { ...cls, status: "denied" } : cls
          )
        );

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class has been denied",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error denying class:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  const handleFeedback = (classId) => {
    Swal.fire({
      title: "Send Feedback",
      input: "text",
      inputLabel: "Feedback",
      inputPlaceholder: "Type your feedback here...",
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        const updatedClass = { feedback };

        return fetch(`http://localhost:5000/classes/${classId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedClass),
        })
          .then(() => {
            setClasses((prevClasses) =>
              prevClasses.map((cls) =>
                cls._id === classId ? { ...cls, feedback } : cls
              )
            );

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Feedback sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error sending feedback:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Please try again.",
            });
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div>
      <h2 className="text-5xl py-8 text-success">Manage Classes</h2>
      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          classes.map((cls) => (
            <div
              key={cls._id}
              className="border border-gray-300 rounded p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={cls.image}
                  alt="Class"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{cls.name}</h3>
                  <p className="text-sm text-gray-500">
                    Instructor: {cls.instructorName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Email: {cls.instructorEmail}
                  </p>
                  <p className="text-sm text-gray-500">
                    Available Seats: {cls.availableSeats}
                  </p>
                  <p className="text-sm text-gray-500">Price: {cls.price}</p>
                  <p className="text-sm text-gray-500">
                    Status: {cls.status}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {cls.status === "pending" && (
                  <>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleApprove(cls._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDeny(cls._id)}
                    >
                      Deny
                    </button>
                  </>
                )}
                <button
                  className="btn btn-secondary"
                  onClick={() => handleFeedback(cls._id)}
                >
                  Send Feedback
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
