const { Router } = require("express");
const { productModel } = require("../Models/Product.model");
const {wishlistModel}=require("../Models/wishlist.model")
const WishlistRouter= Router();

WishlistRouter.post("/",async(req,res)=>{
    const payload=req.headers
    const product=await productModel.findOne({productId:payload.productId})
    console.log(product)
    // const wishlist=await wishlistModel.insertMany([product])
    // res.send(product)
    const wishlist=await wishlistModel({
        ...product
    })
    // try{
        await wishlist.save()
        res.send({massage:"ceate",wishlist})
    // }
    // catch(err){
    //     res.send(err)
    // }
    
})

WishlistRouter.get("/create",async(req,res)=>{

})

module.exports={WishlistRouter}