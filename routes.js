var express = require('express');
var {topRecipe} = require("./controller/recipe");
var router = express.Router();
// Set up the route
var setRoute = function (){
    router.get('/getTopRecipe', topRecipe)
    return router
}
module.exports = {setRoute}
