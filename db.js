var mongoose = require("mongoose");


mongoose.connect("mongodb+srv://adithyaharivpn:adithyahari@cluster0.acj9utp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to DB")
}).catch(()=>{
    console.log("error")
})