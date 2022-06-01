let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let userSchema=new Schema({
    name:{type:String,require:true,lowercase:true},
    email:{type:String,require:true,match:/@/},
    age:{type:Number,default:0}
})

module.exports=mongoose.model("User",userSchema);