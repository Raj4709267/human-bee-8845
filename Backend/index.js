const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const cors = require("cors");

const {ProductRouter}=require("./Routes/product.routes")
const {UserController}=require("./Routes/user.routes");
const {connection} = require("./Config/db");
const { WishlistRouter } = require("./Routes/Wishlist.routes");
const {CartRouter}=require("./Routes/Cart.routes")

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
const PORT=process.env.PORT || 8080
app.use("/user",UserController)
app.use("/product",ProductRouter)
app.use("/wishlist",WishlistRouter)
app.use("/cart",CartRouter)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected To Database.")
    }
    catch(er){
        console.log("Error in Database")
        console.log(er)
    }
    console.log(`Listning on ${PORT}`)
})