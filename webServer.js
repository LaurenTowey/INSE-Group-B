//basic web sever fpr handling page requests
//requires express
var express = require("express");
var app     = express();
var path    = require("path");


//serves index page
app.get('/',function(req,res){
  res.sendfile('pages/index.html');
});

//serves index page
app.get('/acceptPage',function(req,res){
  res.sendfile('pages/acceptPage.html');
});

//serves index page
app.get('/createAccount',function(req,res){
  res.sendfile('pages/createAccount.html');
});

//serves index page
app.get('/stylesheet.css',function(req,res){
  res.sendfile('pages/index.html');
});

//listens for server calls on port :8080
app.listen(8080);
