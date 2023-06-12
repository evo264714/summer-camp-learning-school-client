// import useAuth from "../../../hooks/useAuth";

// const AddClass = () => {
//     const { user } = useAuth();
//     console.log(user);
//     return (
//         <div>
//             <form className="py-8">
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Class Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Class Image</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Instructor Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             readOnly
//                             value={user?.displayName}
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Instructor Email</span>
//                         </label>
//                         <input
//                             type="email"
//                             readOnly
//                             value={user?.email}
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Available Seats</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Price</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered w-full"
//                         />
//                     </div>
//                 </div>
//                 <div >
//                     <input className="btn btn-success w-full mt-8" type="submit" value="Add Class" />
//                 </div>


//             </form>

//         </div>
//     );
// };

// export default AddClass;
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle form submission data
    };

    return (
        <div>
            <div>
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
                <div className="form-control">
                    <label htmlFor="classImage" className="label">
                        Class Image
                    </label>
                    <input
                        type="text"
                        id="classImage"
                        placeholder="Type here"
                        className="input input-bordered"
                        {...register("image")}
                    />
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
                        value={user.displayName}
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
                        value={user.email}
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
                <div>
                    <button type="submit" className="btn btn-success w-full">
                        Add
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddClass;
