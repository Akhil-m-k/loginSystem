const mongoose = require("mongoose");

// connecto to mongodb database
const db = ()=>{
    mongoose.connect("mongodb://localhost/project1").then(()=>{
    console.log("database connected successfully....");
}).catch((err)=>{
    console.log(err);
})
}

module.exports=db;