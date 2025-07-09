const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const port = 3000
const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const User = mongoose.model('User',userSchema)              
app.get('/details',(req,res)=>{
    res.status(200).json([
        {name:"asifa",age:22},
        {name:"hadia",age:15}
    ])
})
// 1 client send data to server by query parameter 
app.get('/query',(req,res)=>{
    const name=req.query.name
    if(!name){
        console.log("name is not passed")
        res.status(400).json({ error: "Name query parameter is required" })
    }
    console.log(name)
    res.status(200).json([
        {username:name}
    ])
})
// 2 client send data to server by path parameter 
app.get('/query/:id',(req,res)=>{
    const id = req.params.id
    if(!id){
        console.log("id is not passed")
        res.status(400).json({ error: "id  parameter is required" })
    }
    console.log(id)
    res.status(200).json([
        {userid:id}
    ])
})
// 3 client send data to server by body  parameter 
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    res.status(200).json({ message: `Welcome, ${username}!` });
});
app.post('/user',async(req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).json({data:user,status:true,message:"user created successfully"})
    }
    catch(error){
        res.status(500).json({ error: "Failed to create user" ,
            status:false,
            data:[],
            message:"user not created"
        });
    }
})  
app.listen(port,()=>{
    console.log(`app is runing on port number ${port}`)
})
async function main() {
    try{
        await mongoose.connect('mongodb+srv://Aroob-Mushtaq:NWXmhFGFLnftIG5U@cluster0.whbp21l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to mongodb")
    }
    catch(error){
        console.log(error)
        console.log("error in connecting to mongodb")
    }
    
  }
  main()