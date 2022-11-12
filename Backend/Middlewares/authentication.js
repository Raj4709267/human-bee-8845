require("dotenv").config();

const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ msg: "plz login again" });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    } else {
      res.status(401).send({ msg: "plz login again" });
    }
  }
};

module.exports = { authentication };
