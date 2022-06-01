let mongoose =require('mongoose');

let schema=mongoose.schema;

let userSchema=new schema({
    name:{type:String,require:true,lowerCase:true},
    age:{type:Number,min:18,max:30},
    password:{type:String,minlength:5,maxlength:20},
    date:{type:Date,default:Date.now}
})
