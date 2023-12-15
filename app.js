/// loading 
const express = require("express"); /// express 
const app = express(); //// express app
const path =require("path"); /// path
const mongoose = require("mongoose"); //// mongoose 
const nocache = require('nocache'); //// nocache 
const session =require("express-session"); //// express-session 
const {v4:uuidv4} = require('uuid'); //// uuid
const userRoutes= require('./routes/userRoutes'); //// userRoutes
const adminRoutes = require('./routes/adminRoutes') // admin routes
const db = require('./config/database'); /// database

//setting view engine
app.set("view engine", "ejs");

/// session using
app.use(session({
  secret:uuidv4(),
  resave:false,
  saveUninitialized:true
}));

///built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //// public file
app.use('/',express.static(path.join(__dirname, 'uploads')));


/// using nocache
app.use(nocache());

/// routes
app.use('/',userRoutes);
app.use('/api',adminRoutes);

db();

//// server listening
app.listen(5000, () => {
  console.log("listening...");
});
