import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const AddClass = () => {
    const [axiosSecure] = useAxios();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, availableSeats, price } = data;
                    const newItem = {
                        name,
                        availableSeats: parseFloat(availableSeats),
                        price: parseFloat(price),
                        image: imgURL,
                        instructorName: user?.displayName,
                        status: "pending",
                    };
                    console.log(newItem);
                    axiosSecure
                        .post("/classes", newItem)
                        .then((data) => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Class has been added successfully",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        })
                        .catch((error) => {
                            console.error("Error adding class:", error);
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Failed to add class",
                            });
                        });
                }
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to upload image",
                });
            });
    };

    return (
        <div>
            <div>
                <h2 className="text-center text-5xl py-8 text-success">Add a Class here</h2>
                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label htmlFor="className" className="label">
                            Class Name
                        </label>
                        <input
                            type="text"
                            id="className"
                            placeholder="Type here"
                            className="input input-bordered"
                            {...register("name")}
                        />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />
                    </div>
                    <div className="form-control">
                        <label htmlFor="instructorName" className="label">
                            Instructor Name
                        </label>
                        <input
                            type="text"
                            id="instructorName"
                            placeholder="Type here"
                            className="input input-bordered"
                            readOnly
                            value={user?.displayName}
                            {...register("instructorName")}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="instructorEmail" className="label">
                            Instructor Email
                        </label>
                        <input
                            type="email"
                            id="instructorEmail"
                            placeholder="Type here"
                            className="input input-bordered"
                            readOnly
                            value={user?.email}
                            {...register("instructorEmail")}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="availableSeats" className="label">
                            Available Seats
                        </label>
                        <input
                            type="number"
                            id="availableSeats"
                            placeholder="Type here"
                            className="input input-bordered"
                            {...register("availableSeats")}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price" className="label">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Type here"
                            className="input input-bordered"
                            {...register("price")}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-full">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;
