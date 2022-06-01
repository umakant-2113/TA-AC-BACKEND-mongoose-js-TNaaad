// 1.name -> string
// 2.email -> string
// 3.age -> number

let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let userSchema=new Schema({
    name:String,
    email:{type:String,lowercase:true,match:/@/},
    age:{type:Number,default:0},
    password:{type:String,minlength:5,maxlength:10},
    createdAt:{type:Date,default:new Date()},
    favourites:[String],
},{timestamps :true})
module.exports=mongoose.model("User","userSchema");