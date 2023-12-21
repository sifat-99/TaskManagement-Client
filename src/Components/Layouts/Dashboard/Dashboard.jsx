import { useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Dashboard = () => {

    const {user} = useContext(AuthContext);


  return (
    <div className="grid grid-cols-8 gap-4 mr-12">
      <div className="drawer grid col-span-1 lg:col-span-2 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex btn btn-ghost">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className=" p-4 btn text-3xl drawer-button lg:hidden"
          >
            <HiMenuAlt1 />
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-[100svh] bg-gray-200 text-black">
            <div className="drawer-content flex ">
              <label
                htmlFor="my-drawer-2"
                className=" pl-4 pt-4 btn text-3xl drawer-button lg:hidden"
              >
                <HiMenuAlt1 />
              </label>
            </div>
                <div className="pt-4">
                    {
                        user ? <div>
                            <h1 className="text-3xl">Hi,{user.displayName}</h1>
                            <p className="text-xl">Hare is your Dashboard</p>
                        </div> : <></>
                    }
                </div>
            <li className="pt-4 lg:pt-16">
              <NavLink to={'/dashboard/home'}>Home</NavLink>
            </li>
            <li>
            <NavLink to={'/dashboard/task'}>Task</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid col-span-7 lg:col-span-6 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
