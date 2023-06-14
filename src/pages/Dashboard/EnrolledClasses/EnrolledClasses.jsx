import usePayment from "../../../hooks/usePayment";

const EnrolledClasses = () => {
    const [payments] = usePayment();

    return (
        <div>
            <div className="divider"></div>
            <h2 className="text-center text-success text-xl md:text-7xl lg:text-7xl font-bold py-8">Your Enrolled Classes</h2>
            <div className="divider"></div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>TransactionID</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                    payments.map((pay, index) =>  
                            <tr key={pay._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={pay.image} alt="Class Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{pay.className}</td>
                                    <td>{pay.email}</td>
                                    <td>{pay.price}</td>
                                    <td>{pay.date}</td>
                                    <td>{pay.transactionId}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClasses;