let mongoose =require("mongoose");
let schema=mongoose.schema;
let userSchema=new schema({
    name:String,
    age:Number,
    sports:[String],
    marks:[Number]
})


let addressSchema=new schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Type.ObjectId
})

let user={
    name:"rahul",
    age:20,
    sports:["football","bolyball"],
    marks:[19,23,73]
}