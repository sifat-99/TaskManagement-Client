import { useContext } from "react";
import {  NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {


  const {user,logOut} = useContext(AuthContext);

  const NavItem = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const UserItems = [
    { name: "Profile", link: "/profile" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Settings", link: "/settings" },
]

const handleLogout = () => {
  logOut();
  Navigate("/");
  toast("Successfully Logged Out")
  .then((res) => {
    console.log(res?.user);
   })
   .catch((err) => {
    console.log(err);
   })
}

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItem.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
            {
              user ? <li>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </li> : <li>
                  <NavLink to={'/register'}>Registration</NavLink>
                  </li>
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">SCC Technovision</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItem.map((item, index) => (
            <li key={index} className="mr-2">
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
          {
              user ? <li>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </li> : <li>
                  <NavLink to={'/register'}>Registration</NavLink>
                  </li>
            }
          
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          {/* <div>
            <h1>{user?.displayName}</h1>
          </div> */}
          <div>
          {
            user ? <div className="dropdown dropdown-bottom dropdown-end">
            <img src={user.photoURL} tabIndex={0} role="button" className="btn btn-circle m-1"/>
            
            <ul
              tabIndex={0}
              className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h1 className="px-2 pb-2 text-center">{user.displayName}</h1>
              {
                  UserItems.map((item, index) => (
                      <li key={index}>
                          <NavLink  to={item.link}>{item.name}</NavLink>
                      </li>
                  ))
              }
              <li><button onClick={handleLogout} className="p-2 pl-4">Logout</button></li>
            </ul>
          </div> : <NavLink to="/login"><button className="btn btn-circle">Login</button></NavLink>
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
