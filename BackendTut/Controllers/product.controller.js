import fs from "fs";
let productData = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/GFG batches /MERN Weekdays 3 /BackendTut/DataBase.js", "utf8"));

let searchController = (req, res) => {
    let query = req.query.search;
  
    let filteredData = productData.filter((obj) =>
      obj.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    res.json(filteredData);
  }
  
  let allProducts = (req, res) => {
    res.json(productData);
  }
  
  let productByID =  (req, res) => {
    let id = +req.params.id;
    let product = productData.find((obj) => obj.id == id);
    res.json(product);
  }
  
  let createProduct =  (req, res) => {
    let data = req.body;
    productData.push(data);
    res.json(data);
  }
  
  let updateProduct =  (req, res) => {
    let body = req.body;
    let id = +req.params.id;
  
    let pidx = productData.findIndex((obj) => obj.id == id);
  
    let orginalProduct = productData[pidx];
  
    productData[pidx] = { ...orginalProduct, ...body };
  
    res.json(productData[pidx]);
  }
  
  let replaceProduct = (req, res) => {
    let body = req.body;
    let id = +req.params.id;
  
    let pidx = productData.findIndex((obj) => obj.id == id);
    let orginalProduct = productData[pidx];
  
    productData[pidx] = { ...body , id : id  };
  
    res.json(productData[pidx]);
  }
  
  let deleteProduct = (req,res)=>{
    let id = +req.params.id;
    let pidx = productData.findIndex((obj) => obj.id == id);
    let orginalProduct = productData[pidx];
    productData.splice(pidx, 1); 
    
    res.json(orginalProduct);  
  }

  export {searchController , deleteProduct , allProducts , replaceProduct , updateProduct , createProduct , productByID}
  