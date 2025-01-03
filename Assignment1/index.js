// filename: index.js
// Student name: Rajveer Kaur Gill
// Student Id: 200546782
// Date: 29 September 2024
var port = process.env.PORT || 1234;
var express = require('express');
var http = require('http');
var application = express();
var httpServer = http.createServer(application)

var {setRoute} = require("./routes");
var {databaseConnection} = require("./database");

// Connect to the database
databaseConnection();

// Use the routes defined in routes.js
application.use('/',setRoute())
application.get("/test",function(req,res){
    res.send("Hello from Rajveer")
})



httpServer.listen(port,function (){
    console.log("Started on port:" + port);
})
