import { Link, Outlet } from "react-router-dom";
import { FaSchool, FaStamp, FaUsers } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";

const Dashboard = () => {

  const isAdmin = true;

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
              {/* <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                  <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                  <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                  <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                  <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li> */}

              {
                isAdmin ?
                  <>
                    <>
                    <li><Link to="/dashboard/manageclasses"><AiFillBank></AiFillBank> Manage Classes</Link></li>
                    <li><Link to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</Link></li>
                    
                  </>
                  </>
                  :
                  <>
                    <li><Link to="/dashboard/myclasses"><FaSchool></FaSchool> My Classes</Link></li>
                    <li><Link to="/dashboard/enrolledclasses"><FaStamp></FaStamp> Enrolled Classes</Link></li>
                    <li><Link to="/dashboard/history"><FaStamp></FaStamp> Payment History</Link></li>
                  </>
              }




            </ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li><a>My Classes</a></li>
          <li><a>Enrolled Classes</a></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;