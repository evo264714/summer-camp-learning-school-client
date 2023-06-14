import { Link, Outlet } from "react-router-dom";
import { FaSchool, FaStamp, FaUsers, FaPlus } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { motion } from "framer-motion";
import useAdmin from "../hooks/useAdmin";
import useInstructorAccess from "../hooks/useInstructorAccess";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorAccess();

  const sidebarVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-success">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <Link to="/" className="flex-1 px-2 mx-2 text-2xl text-black font-semibold">
            Melody Muse
          </Link>
          <div className="flex-none hidden lg:block">
            <motion.ul
              className="flex justify-around p-4 w-80"
              initial="hidden"
              animate="visible"
              variants={sidebarVariants}
            >
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/manageclasses">
                      <AiFillBank />
                      Manage Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageusers">
                      <FaUsers />
                      Manage Users
                    </Link>
                  </li>
                </>
              )}
              {isInstructor && (
                <>
                  <li>
                    <Link to="/dashboard/addclass">
                      <FaPlus />
                      Add Class
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myaddedclass">
                      <FaSchool />
                      My Added Classes
                    </Link>
                  </li>
                </>
              )}
              {!isAdmin && !isInstructor && (
                <>
                  <li>
                    <Link to="/dashboard/myclasses">
                      <FaSchool />
                      My Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/enrolledclasses">
                      <FaStamp />
                      Enrolled Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymenthistory">
                      <FaStamp />
                      Payment History
                    </Link>
                  </li>
                </>
              )}
            </motion.ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li>
            <a>My Classes</a>
          </li>
          <li>
            <a>Enrolled Classes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
