const mongoose=require("mongoose");
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection",newSchema)
module.exports=collection;