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


Router.get("/products/search/:search?", searchController)
.get("/products", allProducts)
.get("/products/:id", productByID)
.post("/products", createProduct)
.patch("/products/:id", updateProduct)
.put("/products/:id", replaceProduct)
.delete("/products/:id", deleteProduct);

export default Router ;