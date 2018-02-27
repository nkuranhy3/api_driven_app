var express = require("express");
var app = express();
var request = require("request");
var port =process.env.PORT;

app.set("view engine", "html");

app.get("/", function(req, res){
   res.sendFile('public/index.html' , { root : __dirname});
});




app.listen(port, process.env.IP, function(){
    console.log("Movie App has started on port " + port);
});