import Swal from "sweetalert2";
import useClassesQuery from "../../../hooks/useClassesQuery";
import { FaTrashAlt } from "react-icons/fa";

const MyClasses = () => {
    const [singleUserClass, refetch] = useClassesQuery();
    console.log(singleUserClass);

    const handleDelete = row => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/singleuserclass/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h3 className="text-3xl">Total Classes: {singleUserClass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleUserClass.map((row, index) => <tr key={row._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{row.name}</td>
                                <td>{row.price} $</td>
                                <td>
                                    <button className="btn btn-success btn-xs px-4">Pay Now</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn px-4 btn-error btn-xs text-lg"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default MyClasses;