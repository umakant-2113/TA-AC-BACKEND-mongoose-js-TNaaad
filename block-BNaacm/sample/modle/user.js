let mongoose=require("mongoose");
let Scheme=mongoose.Schema;

let userSchema=new Scheme({
    name:{type:String,require:true},
    age: {type:Number,min:18,max:30},
    favourites:[String],
    marks:[Number],
    password:{type:String,minlength:10,maxlength:20},
    createdAt:{type:Date,default:new Date()}
})

module.exports=mongoose.model("User","userSchema")