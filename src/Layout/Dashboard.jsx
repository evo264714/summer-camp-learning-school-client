import { Link, Outlet } from "react-router-dom";
import { FaSchool, FaStamp } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-orange-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="https://i.ibb.co/VW6k48H/messi.jpg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link
            to="/"
            className="flex-1 px-2 mx-2 text-2xl text-black font-semibold"
          >
            Melody Muse
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <Link to="/dashboard/myclasses">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FaSchool className="text-black" />
                    My Classes
                  </motion.div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclasses">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FaStamp />
                    Enrolled Classes
                  </motion.div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <motion.div
        className="drawer-side"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <motion.ul
          className="menu p-4 w-80 h-full bg-base-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Dashboard;
