import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-700 text-primary-content text-2xl">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Just Buy </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
        <li>
            <Link to="/food" className="text-2xl text-red-700 "> Food </Link>
          </li>
          <li>
           <Link to="/profile" className="text-2xl "> Profile </Link>
          </li>
          <li>
            <Link to="/cart" className="text-2xl "> Cart </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
