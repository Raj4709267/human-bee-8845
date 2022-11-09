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

  
ProductRouter.get("/female", async (req, res) => {
    try {
      const product = await productModel.find({gender:"female"});
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