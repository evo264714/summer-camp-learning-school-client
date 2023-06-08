import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
            
    console.log(user);
    }
    return (
        <nav className="bg-gradient-to-r from-teal-800 to-green-900 py-6">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl text-white font-semibold">
                    Melody Muse
                </Link>
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="text-white mx-4 hover:text-gray-300 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/instructors"
                        className="text-white mx-4 hover:text-gray-300 transition duration-300"
                    >
                        Instructors
                    </Link>
                    <Link
                        to="/classes"
                        className="text-white mx-4 hover:text-gray-300 transition duration-300"
                    >
                        Classes
                    </Link>

                    {user ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="text-white mx-4 hover:text-gray-300 transition duration-300"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="btn btn-ghost text-white mx-4 hover:text-gray-300 transition duration-300"
                            >
                                Logout
                            </button>
                            <img
                                src=''
                                alt="User Profile"
                                className="h-8 w-8 rounded-full"
                            />
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-white mx-4 hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;