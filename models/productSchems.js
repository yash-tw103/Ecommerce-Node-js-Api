const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    name :{
        type :String, 
        require : true
    }, 
    quantity:{
        type : Number,
        require : true
    }
})

module.exports = mongoose.model('Product' , productSchema);