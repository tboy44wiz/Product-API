const express = require('express'); //  Import express module.
const productController = require('../controllers/product');    //  Import Product Controller.


//  Set Up Express Router
const router = express.Router();


//  //  Add a Product Route.
router.post("/new", productController.addProduct);

module.exports = router;