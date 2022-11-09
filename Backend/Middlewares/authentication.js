require("dotenv").config()

const jwt = require('jsonwebtoken');
const authentication=(req,res,next)=>{
    console.log(req.body)

    if(!req.headers.authorization){
        return res.status(401).send({"msg":'plz login again'})
    }

    const token=req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {

       if(err){
        res.status(401).send({"msg":"plz login again"})
       }
       else{
        req.body.userId=decoded.userId
         next()
       }

      });

}

module.exports={authentication}