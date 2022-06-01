let mongoose=require('mongoose');
let Schema=mongoose.Schema;


let articleSchema=new Schema({
title:{type:String,require:true},
description:{type:String,minlength:0},
tags:[String],
likes:{type:Number,default:0},
author:Schema.Types.ObjectId,
Comments:[String]
},{timestamps:true})

module.exports=mongoose.model("Article",articleSchema)