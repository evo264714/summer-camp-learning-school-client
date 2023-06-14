import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation();
    const row = location.state;
    const totalPrice = row.price;
    const price = parseFloat(totalPrice.toFixed(2))
    const { classId } = useParams();
    console.log(classId);
    return (
        <div>
            <div className="divider"></div>
            <h2 className="text-center text-success text-xl md:text-7xl lg:text-7xl font-bold py-8">Payment Method</h2>
            <div className="divider"></div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}
                        row={row}
                ></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;
