var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = new schema({
  name: string,
  email: string,
  age: number,
});

var updateSchema= new schema({
    name: string,
  email: {type:string,lowerCase:true},
  age: {type:number,initialValue:0},
})
