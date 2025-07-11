const mongoose = require('mongoose')
const connectDB = async function main() {
    try{
        await mongoose.connect('mongodb+srv://Aroob-Mushtaq:NWXmhFGFLnftIG5U@cluster0.whbp21l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to mongodb")
    }
    catch(error){
        console.log(error)
        console.log("error in connecting to mongodb")
    }
    
  }
  module.exports = connectDB