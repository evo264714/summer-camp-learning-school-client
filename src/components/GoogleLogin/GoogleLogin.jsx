import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {googleSignIn} = useContext(AuthContext)


    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://summer-camp-learning-school-server-evo264714.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });
                    })

            })
    }
    return (
        <div className="flex justify-center">
            <button onClick={handleGoogleSignIn} className="btn btn-circle bg-yellow-200 py-4 text-red-500 text-center"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default GoogleLogin;