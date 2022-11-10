const { Router } = require("express");
const {productModel}=require("../Models/Product.model")
const ProductRouter= Router();


ProductRouter.get("/mens", async (req, res) => {
    try {
      const product = await productModel.find({gender:"male"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

  ProductRouter.get("/mens/cloths", async (req, res) => {
    try {
      const product = await productModel.find({gender:"male",type:"cloths"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });
  ProductRouter.get("/mens/shose", async (req, res) => {
    try {
      const product = await productModel.find({gender:"male",type:"shose"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });
  ProductRouter.get("/mens/gift", async (req, res) => {
    try {
      const product = await productModel.find({gender:"male",type:"gift"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

  
ProductRouter.get("/female", async (req, res) => {
    try {
      const product = await productModel.find({gender:"female"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

  ProductRouter.get("/female/shose", async (req, res) => {
    try {
      const product = await productModel.find({gender:"female",type:"shose"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

  ProductRouter.get("/female/gift", async (req, res) => {
    try {
      const product = await productModel.find({gender:"female",type:"gift"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });




  ProductRouter.get("/female/cloths", async (req, res) => {
    try {
      const product = await productModel.find({gender:"female",type:"cloths"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });




  
ProductRouter.get("/kids", async (req, res) => {
    try {
      const product = await productModel.find({gender:"kids"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

  
  ProductRouter.get("/kids/cloths", async (req, res) => {
    try {
      const product = await productModel.find({gender:"kids",type:"cloths"});
      res.status(201).send({ type: "success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });

    
ProductRouter.get("/kids/shose", async (req, res) => {
  try {
    const product = await productModel.find({gender:"kids",type:"shose"});
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});


  
ProductRouter.get("/kids/gift", async (req, res) => {
  try {
    const product = await productModel.find({gender:"kids",type:"gift"});
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
ProductRouter.get("/product/:productId",async(req,res)=>{
  const {productId}=req.body;
  try{
    const data=await productModel.find({_id:productId})
    res.send(201).send({type:"success",product:data})
  }catch(err){
    console.log(err)
    re.send(500).send({type:"err",massage:"Unable to find"})
  }
})

  ProductRouter.post("/create", async (req, res) => {
    try {
      const new_task = new productModel({ ...req.body});
      await new_task.save();
      res.status(201).send({ type: "success", message: "Task is created" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  });


  module.exports={ProductRouter}