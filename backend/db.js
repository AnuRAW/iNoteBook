const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://AnuRaw230:12345654321@cluster0.8rishnl.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo  = async ()=>{
   await mongoose.connect(mongoURI);
    console.log("Connected to mongo Successfully");
}

module.exports = connectToMongo; 