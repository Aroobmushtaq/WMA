const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
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
app.listen(port,()=>{
    console.log(`app is runing on port number ${port}`)
})