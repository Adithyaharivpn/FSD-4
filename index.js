//import
var express = require("express");
require("./db")
var sModel = require("./model/sample")
//init
var app = express();
port = 3000;

//middleware and api
app.use(express.json());


//api to add data
app.post('/',(req,res)=>{
    try {
        sModel(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send(error)
    }
})

//fetch data
app.get('/',async(req,res)=>{
    try {
        var data = await sModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel.findByIdAndDelete(req.params.id);
        res.send("data deleted")
    } catch (error) {
        res.send(error)
    }
})

//port assigning
app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)//callback function
})