import React , {useContext} from "react";
import {useNavigate} from 'react-router-dom'
import { ThemeStore } from "./ThemeContext";
import { addCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const Card = ({ productObj }) => {
  let dispatch = useDispatch();
  let { title, category, price, thumbnail , rating , id  } = productObj;

  let {theme } = useContext(ThemeStore);

  let navigate = useNavigate();

  let handleNavigation = () => {
    navigate(`/product/${id}`)
  } 

  let handleAddCart = (event) => {
    event.stopPropagation()
    dispatch(addCart(productObj))
  }  
let darkTheme = "card bg-slate-600 w-96 shadow-xl m-4"
let lightTheme = "card bg-gray-400 w-96 shadow-xl m-4 text-black "
  return (
    <div className={theme == "light" ? lightTheme : darkTheme} onClick={handleNavigation }>
      <figure>
        <img
          className={theme == "light" ? "bg-white rounded-xl mt-2"  : "bg-slate-700 rounded-xl mt-2"}
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <p> Category {category}</p>
        <p> Price $ {price}</p>
        <p> Rating  {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddCart}>Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
