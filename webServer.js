//basic web sever fpr handling page requests
//requires express
var express = require("express");
var app     = express();
var path    = require("path");
var utilities = require("./utilities.js");

var usernameArray = ['admin', 'test'];
var passwordArray = ['wibble', 'test'];

//serves index page
app.get('/',function(req,res){
  res.redirect('/login');
});

//serves index page
app.get('/login',function(req,res){
  res.sendfile('pages/signin.html');
});




//serves index page
app.get('/createAccount',function(req,res){
  res.sendfile('pages/createAccount.html');
});

//serves index page
app.get('/acceptPage',function(req,res){
  res.sendfile('pages/acceptPage.html');
});

//serves index page
app.get('/stylesheet',function(req,res){
  res.sendfile('css/index.css');
});

//listens for server calls on port :8080
app.listen(8080);
