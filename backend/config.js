// const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/details")
// .then(()=>{
//    console.log("connected to mongodb")
// })

const mongoose = require('mongoose')

 const connectToMongodb = async(req,res) => {
   try {
      const conn = await mongoose.connect('mongodb+srv://sivapalaparthi003:6ToH6F7kUkfktqeb@cluster0.7gaqsgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      console.log("connected to mongobd")
   } catch (error) {
      console.log(error.message)
   }
}


module.exports = connectToMongodb;