let express=require('express');
let mongoose =require("mongoose");

let app=express();

mongoose.connect("mongodb://127.0.0.1",(err)=>{
    console.log(err?err :"connected mongoose")
})
app.listen(3000,()=>{
    console.log("listening port on 3k")
})