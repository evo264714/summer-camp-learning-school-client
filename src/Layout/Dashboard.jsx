import { Link, Outlet } from "react-router-dom";
import { FaSchool, FaStamp, FaUsers, FaPlus } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-gray-500">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <Link to="/" className="flex-1 px-2 mx-2 text-2xl text-black font-semibold">
            Melody Muse
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="flex justify-around p-4 w-80">
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
              {!isAdmin && isInstructor && (
                <>
                  <li>
                    <Link to="/dashboard/addclass">
                      <FaPlus />
                      Add Class
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myaddedclasses">
                      <FaSchool />
                      My Added Classes
                    </Link>
                  </li>
                </>
              )}
              {!isAdmin && !isInstructor &&(
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
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
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
