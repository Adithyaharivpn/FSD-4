//import
var mongoose = require("mongoose");

//schema
const sampleSchema = mongoose.Schema(
    {
        bname:String,
        bdepartment:String
    }
);

//model
const sampleModel = mongoose.model("sample",sampleSchema);
module.exports = sampleModel;


//create a student db with a given field and perform add,delete,view