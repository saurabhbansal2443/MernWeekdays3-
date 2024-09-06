import express from "express" ; 
import {
    searchController,
    deleteProduct,
    allProducts,
    replaceProduct,
    updateProduct,
    createProduct,
    productByID,
  } from "../Controllers/product.controller.js";


let Router = express.Router() ;


Router.get("/search/:search?", searchController)
.get("/", allProducts)
.get("/:id", productByID)
.post("/", createProduct)
.patch("/:id", updateProduct)
.put("/:id", replaceProduct)
.delete("/:id", deleteProduct);

export default Router ;