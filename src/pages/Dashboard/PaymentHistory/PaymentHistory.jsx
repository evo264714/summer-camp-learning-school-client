import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        fetchPaymentHistory();
    }, []);

    const fetchPaymentHistory = async () => {
        try {
            const response = await fetch(`http://localhost:5000/payments/${user?.email}`); 
            if (response.ok) {
                const data = await response.json();
                const sortedHistory = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPaymentHistory(sortedHistory);
            } else {
                throw new Error('Error fetching payment history');
            }
        } catch (error) {
            console.error('Error fetching payment history:', error);
        }
    };
    
    return (
        <div>
            <div className="divider"></div>
            <h2 className="text-center text-success text-xl md:text-7xl lg:text-7xl font-bold py-8">Payment History</h2>
            <div className="divider"></div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>

                                <th>Class Name</th>
                                <th>TransactionID</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((pay, index) =>
                                    <tr key={pay._id}>
                                        <td>{index + 1}</td>
                                        <td>{pay.className}</td>
                                        <td>{pay.transactionId}</td>
                                        <td>{pay.email}</td>
                                        <td>{pay.price}</td>
                                        <td>{pay.date}</td>
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

export default PaymentHistory;
