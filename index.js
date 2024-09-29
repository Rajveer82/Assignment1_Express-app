var port = process.env.PORT || 1234;
var express = require('express');
var http = require('http');
var application = express();
var httpServer = http.createServer(application)

var {setRoute} = require("./routes");



// Use the routes defined in routes.js
application.use('/',setRoute())


httpServer.listen(port,function (){
    console.log("Started on port:" + port);
})
