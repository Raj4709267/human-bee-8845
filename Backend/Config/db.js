const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://mjaved98:javed9838@cluster0.xwu1ihr.mongodb.net/farfetch?retryWrites=true&w=majority");

module.exports = { connection };