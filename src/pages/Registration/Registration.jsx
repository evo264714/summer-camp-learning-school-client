
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };
    return (
        <div className="min-h-screen text-white flex justify-center items-center my-20">
            <div className="bg-base-content p-8 rounded-lg w-[500px]">
                <h2 className="text-3xl font-bold text-center mb-6">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            className={`w-full text-black p-2 border rounded outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            className={`w-full text-black p-2 border rounded outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/,
                                    message: 'Password must contain at least one capital letter and one special character'
                                }
                            })}
                            className={`w-full text-black p-2 border rounded outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: (value) => value === watch('password') || 'Passwords do not match'
                            })}
                            className={`w-full text-black p-2 border rounded outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block font-semibold mb-2">Photo URL</label>
                        <input
                            type="text"
                            id="photoUrl"
                            {...register('photoURL')}
                            className={`w-full text-black p-2 border rounded outline-none ${errors.photoUrl ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-yellow-200 transition duration-300">
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </form>
                <p className="py-2">Already have an account? Please <Link to='/login'><span className="underline">Login</span></Link> Here</p>
            </div>
        </div>
    );
};

export default Registration;