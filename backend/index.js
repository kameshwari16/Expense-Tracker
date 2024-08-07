const express=require('express');
const cors=require("cors")
const mongoose=require('mongoose');
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const collection=require("./models/User");
const ExpCollec=require("./models/Expense");
mongoose.connect("mongodb+srv://puranamkameshwari:1fdXFEgC9Ju52YGM@cluster0.i78umnh.mongodb.net/expenses")
.then(()=>{
    console.log("Mongodb connected successfully");
})
.catch(()=>{
    console.log("Connection failed");
})


// app.get("/",cors(),(req,res)=>{

// })
//the request from frontend where we wrote await axios.post("http://localhost:8000/login",{email,password}) returns the email and password to here using this post method
app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        console.log(e)
    }
})
//register
app.post("/register",async(req,res)=>{
    const{email,password}=req.body;
    try{
        const check=await collection.findOne({email:email});
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany({email:email,password:password})
        }
    }
    catch(e){
        console.log(e);
    }
})
//list of expenses
app.get("/expense",async(req,res)=>{
    try{
        const expenses=await ExpCollec.find();
        res.json(expenses)
    }
    catch(e){
        console.log(e)
    }
})

//Add expense
app.post("/expense",async(req,res)=>{
    const{description,amount}=req.body;
    console.log('Received expense data:', req.body);
    try{
        const expense=await ExpCollec.create({description,amount})
        res.json(expense)
    }
    catch(e){
        console.log(e)
    }
})

// delete expense
app.delete("/expense/:id",async(req,res)=>{
    try{
        const exp=await ExpCollec.findByIdAndDelete(req.params.id);
        if(!exp){
            return res.status(404).json({message:'Expense not found'})
        }
        res.json({message:'expense removed'})
    }
    catch(e){
        console.log(e)
    }
})
app.listen(8000,()=>{
    console.log("port connected")
})