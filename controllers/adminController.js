const Admin = require("../models/adminModel");
const User = require("../models/userModel");

///// admin password setting
const passwordSet = async (_, res) => {
  const check = await Admin.find({});
  if (check.length === 0) {
    const admin = new Admin({
      username: "admin@321",
      password: "admin@123",
    });
    await admin.save();
    res.send("password created succesfully");
  }
};

/// admin login get request
const admLogin = (req, res) => {
  res.render("adminLogin");
};

//// admin login post request
const admLogin_post = async (req, res) => {
  req.session.admin = true;
  res.redirect("/api/home");
};

const homePage =async (req,res)=>{
if(req.session.admin){
  res.render('home',{header:"./partials/adminHeader.ejs",name:"Admin"})
}else{
  res.redirect('/api/admlogin');
}
}

///// adminpanel get request
const adminPanel = async (req, res) => {
  if(req.session.email){
    const users=await User.find({email:req.session.email});
    res.render('adminPanel',{users});
  }else{
    const users = await User.find({});
    res.render("adminPanel", { users });
  }
};

///// user edit get
const userEdit = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findOne({ _id: userId });
  res.render("userEdit", { user, userId });
};

///user edit put
const userEdit_put = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId,updatedData);
    if (!updatedUser) {
      return res.status(404).json("user not found");
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//// user delete
const deleteUser =async(req,res)=>{
  const userId = req.params.id;
  await User.findByIdAndDelete(userId);
  res.json("deleted");
}

const searchUsers = async (req, res) => {
  req.session.email =req.body.email;
  res.redirect('/api/adminPanel');
};

module.exports = {
  passwordSet,
  admLogin,
  admLogin_post,
  homePage,
  adminPanel,
  userEdit,
  userEdit_put,
  deleteUser,
  searchUsers
};
