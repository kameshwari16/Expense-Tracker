const mongoose=require('mongoose');
const Expense=mongoose.Schema({
    description:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:Date,default:Date.now}
})
const expecollection=mongoose.model("expense",Expense);
module.exports=expecollection;