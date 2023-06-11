import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login is Successful',
                showConfirmButton: false,
                timer: 1500
              })
        })
        navigate(from, {replace: true})
    };

    

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="min-h-screen text-white flex justify-center items-center my-20">
            <div className="bg-base-content p-8 rounded-lg w-[400px]">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            className={`w-full p-2 border text-black rounded outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                                className={`w-full p-2 pr-10 text-black border rounded outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            <button
                                type="button"
                                className="text-gray-400 ml-2 absolute right-0 mr-2"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-yellow-200 transition duration-300">Login</button>
                </form>
                <p className="py-2">New to Melody Muse? Please <Link to='/registration'><span className="underline">Register</span></Link> Here</p>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;