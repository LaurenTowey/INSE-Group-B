//basic web sever fpr handling page requests
//requires express
var express = require('express');
var app = express();
//serves index page
app.get('', function (req, res){
  res.sendFile(302, 'index.html');
});

//adds two numbers
app.get('/subtract', function (req, res){
    res.send(String(Number(req.query.a) - Number(req.query.b)));
});

//subtracts two numbers
app.get('/add', function (req, res){
    res.send(String(Number(req.query.a) + Number(req.query.b)));
});

//listens for server calls on port :8080
app.listen(8080);
