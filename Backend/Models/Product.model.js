const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    prize:{type:Number,required:true},
    image:[       
            {type:String,required:true},
            {type:String,required:true},
            {type:String,required:true},
            {type:String}
    ],
    size:[
            {type:String,required:true},
            {type:String,required:true},
            {type:String},
            {type:String},
            {type:String},
    ],
    heightlight:[
            {type:String,required:true},
            {type:String,required:true},
            {type:String,required:true},
            {type:String,required:true},
            {type:String,required:true},
            {type:String,required:true},
            {type:String},
    
    ],
    composition:[
            {type:String,required:true},
            {type:String},
        
    ],
    
    delevary_date:[
            {type:String,required:true},
            {type:String,required:true}
    ],

    gender:{type:String,required:true},
    type:{type:String,required:true},
    dis:{type:String,required:true}
})


const productModel=mongoose.model("product",productSchema)


module.exports={productModel}