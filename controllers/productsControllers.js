const Product = require('../models/productSchems');

//Get all products
const listProducts = async(req,res)=>{
    try {
        const data =await Product.find();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
    }
}


//post  products
const addProducts =  async(req,res)=>{
    try {
        const data = new Product({
            id : req.body.id,
            name : req.body.name,
            quantity : req.body.quantity
        })

        const val = await data.save();
        res.status(200).json(val);
        console.log("data inserted in database");
        console.log(data);
        res.redirect('/')
    } catch (error) {
        console.log(error.message);
    }
}

//post delete products
const deleteProducts =  async(req,res)=>{
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
        console.log("successfully deleted the product");
        } catch (error) {
        console.log(error);
    }
}


//post update products
const updateproducts =  async(req,res)=>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id , req.body);
        console.log("successfully updated the product");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    listProducts  , addProducts , deleteProducts , updateproducts
}