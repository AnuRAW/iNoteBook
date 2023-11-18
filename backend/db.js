const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://AnuRaw230:123454321@cluster0.8rishnl.mongodb.net/";

const connectToMongo  = async ()=>{
   await mongoose.connect(mongoURI);
    console.log("Connected to mongo Successfully");
}

module.exports = connectToMongo; 