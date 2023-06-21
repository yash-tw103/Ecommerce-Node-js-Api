const express = require('express');
const Product = require('../models/productSchems');
const productsController = require('../controllers/productsControllers');

const router = express.Router();

//showing all the data 
//URL /products
router.get('/',productsController.listProducts);


//adding products to database
//URL /products/create
router.post('/create',productsController.addProducts);

//deleting products 
//URL /products/delete/:id
router.post('/delete/:id' ,productsController.deleteProducts);

//updating products
//URL /products/update/:id
router.post('/update/:id' ,productsController.updateproducts);

module.exports = router;