import React from "react";
import CartRow from "./CartRow";
import { useSelector , useDispatch } from "react-redux";
import { clearCart } from "../Store/CartSlice";


const Cart = () => {

  let carData = useSelector((store)=> store.cart.cart )
  let dispatch = useDispatch();
  return (
    <div className="overflow-x-auto ml-10">
      <table className="table">
      
        <thead>
          <tr className="text-2xl">
            <th> Image </th>
            <th> <span>🔼</span> Rating <span> 🔽 </span></th>
            <th>Price </th>
            <th>Quantity </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
         {
          carData.map((cartObj)=> <CartRow obj={cartObj}></CartRow>)
         }
         
        </tbody>
      </table>
      <button className="btn btn-block btn-outline btn-error" onClick={()=> dispatch(clearCart())}> Clear Cart </button>
    </div>
  );
};

export default Cart;
