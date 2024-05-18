import express from "express"; 
import { newProd,getProducts,deleteProd,updateProd,getProductById } from '../controllers/product.controller.js'; 


const productsRouter = express.Router();
 
productsRouter.route("/get-all/products").get(getProducts);  

productsRouter.route("/get/product/:id").get(getProductById);  

productsRouter.route("/create/product").post(newProd);  
 
productsRouter.route("/update/product/:id").put(updateProd);  

productsRouter.route("/delete/product/:id").delete(deleteProd);  

export default productsRouter;