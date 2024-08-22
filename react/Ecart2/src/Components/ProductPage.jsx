import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductData from "../useProductData";
import Comment from "./Comment";

const ProductPage = () => {
  
  const { id } = useParams();

  let data = useProductData(id);

  
  if (data == null) {
    return <div> ....loading </div>;
  }
  let { thumbnail, title, price, category, rating, brand  , reviews} = data;

  return (
    <div className="w-screen h-screen ">
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Add to cart </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white w-3/4 h-1/2  mx-auto my-2 "> 
    {
      reviews.map((review)=>{
        return <Comment review={review} ></Comment>
      })
    }
    </div>

    </div>
  );
};

export default ProductPage;
