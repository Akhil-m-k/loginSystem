/// loading mongoose
const mongoose = require('mongoose');

/// schema for signUP
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "username is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    avatar: {
      type: String, // Store the filename or URL of the profile image
      required: [true, "avatar is required"],
    }
  });
  
  /// create collection for signUp form
  const User = mongoose.model("user", userSchema);

  module.exports=User;