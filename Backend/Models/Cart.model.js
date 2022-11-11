const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    productId:{type:String,required:true},
    userId:{type:String,required:true}
})


const cartModel=mongoose.model("cart",cartSchema)


module.exports={cartModel}