import React from "react";

const Card = ({ productObj }) => {
  let { title, category, price, thumbnail } = productObj;
  return (
    <div className="card bg-slate-600 w-96 shadow-xl m-4">
      <figure>
        <img
          className="bg-slate-700 rounded-xl mt-2"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <p> Category {category}</p>
        <p> Price $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
