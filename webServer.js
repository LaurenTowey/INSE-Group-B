//basic web sever fpr handling page requests
//requires express
var express = require("express");
var app     = express();
var path    = require("path");


//serves index page
app.get('/',function(req,res){
  res.sendfile('pages/index.html');
  //__dirname : It will resolve to your project folder.
});

//serves index page
app.get('/page2',function(req,res){
  res.sendfile('pages/page2.html');
  //__dirname : It will resolve to your project folder.
});

//serves index page
app.get('/page3',function(req,res){
  res.sendfile('pages/page3.html');
  //__dirname : It will resolve to your project folder.
});

//listens for server calls on port :8080
app.listen(8080);
