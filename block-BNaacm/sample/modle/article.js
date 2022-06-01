let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let articleSchema=new Schema({
    title:{type:String,lowercase:true,require:true},
    discription:{type:String,lowercase:true,minlength:20,maxlength:200}
})

let Atricle=mongoose.model("Atricle","articleSchema")

module.exports=Atricle;