const express = require('express')
const connectDB = require('./src/config/db')
const productRoutes = require('./src/routes/productRoutes')
const authRoutes = require('./src/routes/authRoutes')
const app = express()
app.use(express.json())
const port = 3000              
app.use('/api',productRoutes)
app.use('/auth', authRoutes);
app.listen(port,()=>{
    console.log(`app is runing on port number ${port}`)
})
connectDB()