const User = require('../models/productModel')      
const getDetails = (req,res)=>{
    res.status(200).json([
        {name:"asifa",age:22},
        {name:"hadia",age:15}
    ])
}
// 1 client send data to server by query parameter 
const getQuery = (req,res)=>{
    const name=req.query.name
    if(!name){
        console.log("name is not passed")
        res.status(400).json({ error: "Name query parameter is required" })
    }
    console.log(name)
    res.status(200).json([
        {username:name}
    ])
}
// 2 client send data to server by path parameter 
const getPath = (req,res)=>{
    const id = req.params.id
    if(!id){
        console.log("id is not passed")
        res.status(400).json({ error: "id  parameter is required" })
    }
    console.log(id)
    res.status(200).json([
        {userid:id}
    ])
}
// 3 client send data to server by body  parameter 
const getBody = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    res.status(200).json({ message: `Welcome, ${username}!` });
}
const createUser = async(req,res)=>{
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
}
module.exports = {getDetails,getQuery,getPath,getBody,createUser}