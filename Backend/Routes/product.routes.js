const { Router } = require("express");
const { productModel } = require("../Models/Product.model");
const ProductRouter = Router();

ProductRouter.get("/mens", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/mens/cloths", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "cloths" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
ProductRouter.get("/mens/shoes", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "shoes" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
ProductRouter.get("/mens/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "male", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/womens", async (req, res) => {
  try {
    const data =await productModel.updateMany({type:"shoes"},
        { $set: { type: "shoes" } })
        const product = await productModel.find({ gender: "womens" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/womens/shoes", async (req, res) => {
  try {
    const product = await productModel.find({
      gender: "womens",
      type: "shoes",
    });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/womens/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "womens", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/womens/cloths", async (req, res) => {
  try {
    const product = await productModel.find({
      gender: "womens",
      type: "cloths",
    });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/kids", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/kids/cloths", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "cloths" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/kids/shoes", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "shoes" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProductRouter.get("/kids/gift", async (req, res) => {
  try {
    const product = await productModel.find({ gender: "kids", type: "gift" });
    res.status(201).send({ type: "success", product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});
ProductRouter.get("/product/:productId", async (req, res) => {
  const { productId } = req.body;
  try {
    const data = await productModel.find({ _id: productId });
    res.send(201).send({ type: "success", product: data });
  } catch (err) {
    console.log(err);
    re.send(500).send({ type: "err", massage: "Unable to find" });
  }
});

ProductRouter.post("/create", async (req, res) => {
  try {
    const new_task = new productModel({ ...req.body });
    await new_task.save();
    res.status(201).send({ type: "success", message: "Task is created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { ProductRouter };
