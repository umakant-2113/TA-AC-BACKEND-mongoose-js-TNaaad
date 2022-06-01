let express=require("express");
let mongoose=require("mongoose");

let app=express();

mongoose.connect("mongodb://127.0.0.1/sample",(err)=>{
    console.log(err?err :"mongoose are connected")
});

app.listen(3000,()=>{
    console.log("server oon port 3k")
})