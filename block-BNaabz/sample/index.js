let express=require("express");
const mongoose = require('mongoose');
let app=express()
mongoose.connect('mongodb://localhost/sample',(err)=>{
console.log(err ? err :"mongoose are connected")
});


app.listen(3000,()=>{
    console.log("server on port 3k")
})