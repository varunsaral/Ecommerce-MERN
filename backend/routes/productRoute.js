const express = require("express");
const { getAllproducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

const router = express.Router();

// Get all product
router.route("/products").get(getAllproducts);

//Create new product --Admin
router.route("/product/new").post(createProduct);

//Update product --Admin
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports = router 






   
