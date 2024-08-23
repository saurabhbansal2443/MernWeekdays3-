import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeStore);

  const cartData = useSelector((store)=> store.cart.cart);

  // console.log( cartData)

  let lightTheme = "navbar bg-white text-black text-2xl";
  let darkTheme = "navbar bg-gray-700 text-primary-content text-2xl";

  let themeChange = ()=>{
    setTheme(theme =="light" ? "dark" : "light")
  }
  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Just Buy{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/food" className="text-2xl text-red-700 ">
              {" "}
              Food{" "}
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-2xl ">
              {" "}
              Profile{" "}
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-2xl ">
              {" "}
              Cart<sup> {cartData.length} </sup>
            </Link>
          </li>
          <li>
            <input
              type="checkbox"
              onClick={themeChange}
              value="synthwave"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
