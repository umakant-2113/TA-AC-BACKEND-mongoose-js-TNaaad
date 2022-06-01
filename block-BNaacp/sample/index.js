var express=require("express");
var mongoose=require("mongoose");
// import schema
var User=require("./models/User");


var app=express()
// mongoose connected
mongoose.connect("mongodb://127.0.0.1/sample",(err)=>{
    console.log(err ?err:"mongoose are connected")
});
// middleware
app.use(express.json());

//routes 
app.get("/",(req,res)=>{
    res.send("welcome")
})

// creat data base in mongobd
app.post("/users",(req,res)=>{
    User.create(req.body,(err,user)=>{
        console.log(err)
        res.json(user)
    })
})

// get the database from mongo db
app.get("/users",(req,res)=>{
    User.find({},(err,user)=>{
        console.log(err);
        res.json(user)
    })
})

// get the database using objectid
app.get("/users/:id",(req,res)=>{
let id=req.params.id;
User.findById(id,(err,user)=>{
    res.json(user)
})
})

// updateone the database using mongooose

app.put("/users",(req,res)=>{
    let id=req.params.id;
    User.updateOne({},req.body,(err,updateUser)=>{
        console.log(err)
        res.json(updateUser)
    })
})
// update many

app.put("/user",(req,res)=>{
    User.updateMany({},req.body,(err,user)=>{
        console.log(err)
        res.json(user)
    })
})

// update by id 

app.put("/users/:id",(req,res)=>{
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,user)=>{
        console.log(err)
        res.json(user)
    })
})
// delete data base

app.delete("/users/:id", (req, res) => {
    // let id=req.params.id;
    User.findByIdAndDelete(req.params.id,(err,user)=>{
        if(err) console.log(err)
       res.send(`${user.name} was deleted`)
    })
  });




// server
app.listen(3000,()=>{
    console.log('server on port 3k')
})