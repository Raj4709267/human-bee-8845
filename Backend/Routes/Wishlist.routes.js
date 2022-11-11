const { Router } = require("express");
const { productModel } = require("../Models/Product.model");
const {wishlistModel}=require("../Models/wishlist.model")
const {authentication}=require("../Middlewares/authentication")
const WishlistRouter= Router();

WishlistRouter.post("/add",authentication,async(req,res)=>{
    // const productId=req.body
    const payload=req.headers;
        // console.log(payload)
    try{
        const new_wishlist=new wishlistModel({
            productId:payload.productid,
            userId:payload.userid
        })
        const data=await new_wishlist.save()
        res.status(200).send({massage:"success","massage2":"Data created",data:data})
    }
    catch(err){
        res.send(err)
    }
    
})

WishlistRouter.get("/get",authentication,async(req,res)=>{
    const {userid}=req.headers
    try {
        const product = await wishlistModel.find({userId:userid});
        const products=product.map((item)=>{
            return item.productId
        })
        console.log(products)
        const data=await productModel.find({"_id" : { "$in" :products}})
        const newData=[]
        
        for(let i=0;i<data.length;i++){
            newData.push({...data[i]._doc,wishlistId:product[i]._id})
        }
       
        res.status(201).send(newData);
      } catch (error) {
        console.log(error);
        res.status(500).send({ type: "error", message: "An error occured" });
      }
})

WishlistRouter.delete("/delete/:wishlistId",authentication,async(req,res)=>{
    
    const {wishlistId}=req.params
    try{
        await wishlistModel.deleteOne({_id:wishlistId})
        res.status(201).send({"Message":"deleted"});
    }
    catch(err){

    }
})

module.exports={WishlistRouter}