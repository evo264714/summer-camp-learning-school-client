import { FaInbox, FaEdit } from "react-icons/fa";
import useClass from "../../../hooks/useClass";

const MyAddedClass = () => {
    const [classes] = useClass();
    return (
        <div className="py-10">
            <div className="overflow-x-auto">
                <h2 className="text-center text-3xl text-error py-4">All Added Classes Are Here </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>Purple</td>
                                <td>{item.status}</td>
                                <td><button className="btn btn-xs btn-success px-4"><FaInbox className="text-xl"></FaInbox></button></td>
                                <td>
                                    <button className="btn btn-warning btn-xs px-4"><FaEdit className="text-xl"/></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyAddedClass;