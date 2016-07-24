var express = require("express");
var app = express();
var bodyParser =require("body-parser");
// npm install body-parser --save
app.use(express.static("public"));



//app.use(bodyParser());  // Express JS 3.x Support this
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/loginget',function(req,res){

    res.send("Id "+req.param('userid')+" Name "+req.param('uname'));
});
app.get('/loginjson',function(req,res){
    //res.json("{id:1001,name:'Amit'}");
    var userOperations = require("./useroperations.js");
    userOperations.getUsers(res);
});
app.post('/loginpost',function(req,res){
 //  res.send("Id "+req.body.userid+ " Name "+req.body.uname+" Password "+req.body.pwd);
    var userOperations = require("./useroperations.js");
    userOperations.addNewUser(req.body.userid,req.body.pwd,req.body.uname,res);
});
app.listen(1234,function(){
    console.log("Server Start...");

});