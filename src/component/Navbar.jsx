import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black border px-3 py-1 rounded-md border-pink-500 bg-pink-100 font-semibold"
      : "text-gray-700 hover:text-pink-600 px-3 py-1";

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-center">
      <ul className="flex space-x-6 items-center text-lg">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/addschedule" className={navLinkClass}>
            Add Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/allschedule" className={navLinkClass}>
            All Schedule
          </NavLink>
        </li>

        <li>
          <NavLink to="/signup" className={navLinkClass}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin" className={navLinkClass}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
