//basic web sever fpr handling page requests
//requires express
var express = require("express");
var app     = express();
var path    = require("path");
var utilities = require("./utilities.js");

//serves index page
app.get('/',function(req,res){
  res.redirect('/login');
});

//serves login page
app.get('/acceptPage',function(req,res){
  res.sendfile('pages/signin.html');
});
app.get('/login',function(req,res){
  res.sendfile('pages/signin.html');
});
app.get('/addBill',function(req,res){
  res.sendfile('pages/addBill.html');
});
app.get('/createAccount',function(req,res){
  res.sendfile('pages/createAccount.html');
});
app.get('/friend',function(req,res){
  res.sendfile('pages/friend.html');
});
app.get('/group',function(req,res){
  res.sendfile('pages/group.html');
});
app.get('/index',function(req,res){
  res.sendfile('pages/index.html');
});
app.get('/invite',function(req,res){
  res.sendfile('pages/invite.html');
});
app.get('/main',function(req,res){
  res.sendfile('pages/main.html');
});
app.get('/recovery',function(req,res){
  res.sendfile('pages/recovery.html');
});
app.get('/signin',function(req,res){
  res.sendfile('pages/signin.html');
});
app.get('/smartSplit',function(req,res){
  res.sendfile('pages/smartSplit.html');
});


//serves index page
app.get('/stylesheet',function(req,res){
  res.sendfile('css/index.css');
});

//listens for server calls on port :8080
app.listen(8080);
