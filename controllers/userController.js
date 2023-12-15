const User = require("../models/userModel");

//// login page route controller
const login = (req, res) => {
  if (!req.session.user) {
    res.render("login");
  } else {
    res.redirect("/home");
  }
};

//// login form post route controller
const login_post = async (req, res) => {
  const user = await User.findOne({
    username:req.body.username,
    password: req.body.password
  });
  try {
    if (user !== null) {
     const userId =user._id;
      res.redirect(`/home/${userId}`);
    }
  } catch (err) {
    console.log(err);
  }
};

//// signUp page route controller
const signUP = (req, res) => {
  res.render("signUp");
};

////signUp form post route controller
const signUP_post = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (!check) {
      const user = new User(req.body);
      if (req.file) {
        user.avatar = req.file.filename;
      }
      await user.save();
      res.redirect("/");
    } else {
      res
        .status(400)
        .json({ error: "User with the provided email already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//// home page route controller
const homepage = async (req, res) => {
  const user=await User.findOne({_id:req.params.id});
  if (user) {
    res.render("home", {
      header: "./partials/userHeader.ejs",
      name: user.username,
      user: user,
    });
  } else {
    res.redirect("/");
  }
};

//// user profile get route
const userProfile = async (req, res) => {
  const user = await User.findOne({_id:req.params.id});
  res.render("userProfile", { header: "./partials/userHeader.ejs", user });
};

/// user logOut route
const logOut = (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

//// edit profile
const editProfile =async (req, res) => {
  const user = await User.findOne({_id:req.params.id});
  res.render("editProfile", {user});
};

//// edit profile put

const editProfile_put = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    if(req.file){
      updatedData.avatar = req.file.filename;
    }
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData);
    if (!updatedUser) {
      return res.status(404).json("user not found");
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  login,
  login_post,
  signUP,
  signUP_post,
  homepage,
  userProfile,
  logOut,
  editProfile,
  editProfile_put,

};
