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
    res.send({ message: "Email already exists" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.send({ msg: "something went wrong, please try again" });
      }

      try {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send({ msg: "signup successfull" });
      } catch (error) {
        res.send({ msg: "something went wrong, please try again" });
      }
    });
  }
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await UserModel.findOne({ email });
  console.log(user);
  const hash = user.password;

  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      res.send({ msg: "plz login again " });
    }
    if (result === true) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY);
      res.send({ msg: "login successfull", token: token, userData: user });
    } else {
      res.send({ msg: "plz login again " });
    }
  });
});

module.exports = { UserController };
