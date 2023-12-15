const mongoose = require('mongoose');

const Admin = mongoose.model("admin",{username:String,password:String});
module.exports=Admin;