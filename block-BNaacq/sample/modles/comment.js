let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let commentSchema=new Schema({
content:{type:String,require:true},
author:Schema.Types.ObjectId,
article:{type:String,require:true}
},{timestamps:true})

module.exports=mongoose.model("Comment",commentSchema)