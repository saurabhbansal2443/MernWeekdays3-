import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-700 text-primary-content text-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Just Buy </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
           <p className="text-2xl "> Profile </p>
          </li>
          <li>
            <p className="text-2xl "> Cart </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
