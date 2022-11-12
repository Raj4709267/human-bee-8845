const { Router } = require("express");
const { productModel } = require("../Models/Product.model");
const {cartModel}=require("../Models/Cart.model")
const {authentication}=require("../Middlewares/authentication")
const CartRouter= Router();

CartRouter.post("/add",authentication,async(req,res)=>{
    // const productId=req.body
    // const payload=req.body;
    const {userId,productId}=req.body

        // console.log(payload)
    try{
        const new_cart=new cartModel({
            productId,
            userId
        })
        const data=await new_cart.save()
        res.status(200).send({massage:"success","massage2":"Data created",data:data})
    }
    catch(err){
        res.send(err)
    }
    
})

CartRouter.get("/get",authentication,async(req,res)=>{
    // const {userid}=req.headers
    const {userId}=req.body
    console.log("ok")
    try {
        const product = await cartModel.find({userId});
        const products=product.map((item)=>{
            return item.productId
        })
        console.log(products)
        const data=await productModel.find({"_id" : { "$in" :products}})
        const newData=[]
        
        for(let i=0;i<data.length;i++){
            newData.push({...data[i]._doc,cartId:product[i]._id})
        }
       
        res.status(201).send(newData);
      } catch (error) {
        console.log(error);
        res.status(500).send({ type: "error", message: "An error occured" });
      }
})

CartRouter.delete("/delete/:cartId",authentication,async(req,res)=>{
    
    const {cartId}=req.params
    try{
        await cartModel.deleteOne({_id:cartId})
        res.status(201).send({"Message":"deleted"});
    }
    catch(err){

    }
})

module.exports={CartRouter}