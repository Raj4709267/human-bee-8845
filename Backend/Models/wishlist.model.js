const mongoose = require("mongoose")
const wishlistSchema = new mongoose.Schema({
    productId:{type:String,required:true},
    userId:{type:String,required:true}
})


const wishlistModel=mongoose.model("wishlist",wishlistSchema)


module.exports={wishlistModel}