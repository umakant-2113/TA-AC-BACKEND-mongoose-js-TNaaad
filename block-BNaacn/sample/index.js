let express=require("express");
let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/sample",(err)=>{
console.log(err?err :"mongoose are connected")
})


let app=express();

app.listen(3000,()=>{
    console.log("server on port 3k")
})