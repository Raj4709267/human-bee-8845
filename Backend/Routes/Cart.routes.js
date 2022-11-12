const { Router } = require("express");
const { productModel } = require("../Models/Product.model");
const { cartModel } = require("../Models/Cart.model");
const { authentication } = require("../Middlewares/authentication");
const CartRouter = Router();

CartRouter.post("/add", authentication, async (req, res) => {
    const { userId, productId } = req.body;

    // console.log(payload)
    const isPresent = await cartModel.findOne({ productId });
    if (isPresent) {
      res
        .status(500)
        .send({ type: "error", message: "product already present in wishlist" });
    } else {
      try {
        const new_wishlist = new cartModel({
          productId,
          userId,
        });
        const data = await new_wishlist.save();
        res
          .status(200)
          .send({ massage: "success", massage2: "Data created", data: data });
      } catch (err) {
        res.send(err);
      }
    }
});

CartRouter.get("/get", authentication, async (req, res) => {
    const { userId } = req.body;
    try {
      const product = await cartModel.find({ userId });
      const products = product.map((item) => {
        return item.productId;
      });
      console.log(products);
      const data = await productModel.find({ _id: { $in: products } });
      res.status(201).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ type: "error", message: "An error occured" });
    }
});

CartRouter.delete("/delete/:id", authentication, async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const isPresent = await cartModel.findOne({ productId: id });
    if (!isPresent) {
      res.status(500).send({ type: "error", message: "id not Present" });
    } else {
      try {
        await cartModel.deleteOne({ productId: id });
        res.status(201).send({ Message: "deleted" });
      } catch (err) {
        res.status(500).send({ type: "error", message: "An error occured" });
      }
    }
});

module.exports = { CartRouter };
