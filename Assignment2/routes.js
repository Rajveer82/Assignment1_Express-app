// filename: routes.js
// Student name: Rajveer Kaur Gill
// Student Id: 200546782
// Date: 29 September 2024
var express = require('express');
var {topRecipe} = require("./controller/recipe");
var router = express.Router();
// Set up the route
var setRoute = function (){
    router.get('/getTopRecipe', topRecipe)
    return router
}
module.exports = {setRoute}
