let mongoose=require("mongoose");
let schema=mongoose.schema;
var userSchema= new schema({
    author:String,
    discription:String,
    title:String
})
