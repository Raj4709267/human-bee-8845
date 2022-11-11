const { Router } = require("express");
const { UserModel } = require("../Models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const UserController = Router();

UserController.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const isPresent = await UserModel.findOne({ email });
  if (isPresent) {
    res.status(404);
    res.send({ message: "Email Already registred" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res
          .status(404)
          .send({ message: "Something went wrong please try later" });
      }

      try {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send({ message: "Registration successful" });
      } catch (error) {
        res
          .status(404)
          .send({ message: "Something went wrong please try later" });
      }
    });
  }
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  if (!user) {
    res.status(404).send({ message: "User not found please signup" });
  } else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(404).send({
          message: "Something went worng please login after sometime",
        });
      }
      if (result === true) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY);
        res.send({
          token: token,
          name: user.name,
          userId: user._id,
          email: user.email,
        });
      } else {
        res.status(404).send({ message: "Please login again" });
      }
    });
  }
});

module.exports = { UserController };
