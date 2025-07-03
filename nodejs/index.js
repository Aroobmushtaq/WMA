const express = require('express')
const app = express()
const port = 3000
app.get('/details',(req,res)=>{
    res.status(200).json([
        {name:"asifa",age:22},
        {name:"hadia",age:15}
    ])
})
app.listen(port,()=>{
    console.log(`app is runing on port number ${port}`)
})