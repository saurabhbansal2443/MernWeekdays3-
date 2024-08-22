import React, { useEffect, useState , useContext } from "react";
import Card from "./Card.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import { ThemeStore } from "./ThemeContext.jsx";

const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState("");

  const {theme , setTheme} = useContext(ThemeStore);
 
  let handleTopRated = () => {
    let filteredData = allProducts.filter((obj) => {
      return obj.rating > 4;
    });
    setProducts(filteredData);
  };

  let handleCategory = (category) => {
    let filteredData = allProducts.filter((obj) => {
      return obj.category == category;
    });
    setProducts(filteredData);
  };

  let handleSearch = () => {
    let filteredData = allProducts.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setProducts(filteredData);
    setQuery("");
  };

  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let productData = await data.json();
    setAllProducts(productData.products);
    setProducts(productData.products);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className= { theme == "light" ? "bg-slate-300" : "bg-dark"}>
      <div className="flex justify-around items-center  w-full h-16 ">
        <button onClick={handleTopRated} className="btn btn-active btn-accent">
          {" "}
          Top rated{" "}
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => {
            handleCategory("furniture");
          }}
        >
          {" "}
          Furniture{" "}
        </button>
        <div className="search flex justify-around items-center w-1/5">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            className="btn btn-outline btn-error m-2 "
            onClick={handleSearch}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="btn btn-active btn-accent"
          onClick={() => {
            handleCategory("groceries");
          }}
        >
          Grocery{" "}
        </button>
        <button
          className="btn btn-active btn-accent"
          onClick={() => {
            handleCategory("beauty");
          }}
        >
          {" "}
          Beauty{" "}
        </button>
      </div>
      <div className=" flex justify-around flex-wrap  ">
        {products == null ? (
          <ShimmerUI></ShimmerUI>
        ) : (
          products.map((obj, idx) => {
            return <Card key={obj.id}  productObj={obj}></Card>;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
