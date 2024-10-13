// filename: routes.js
// Student name: Rajveer Kaur Gill
// Student Id: 200546782
// Date: 29 September 2024
var express = require('express');
var { topRecipe, getRecipeList, findRecipe, addRecipe, updateRecipe, deleteRecipe } = require("./controller/recipe");
var router = express.Router();
const { createUser, login,logout } = require('./controller/user');
// Set up the route
var setRoute = function (){
    router.get('/getTopRecipe', topRecipe)
    router.get('/recipe/list', getRecipeList)
    router.get('/recipe/find/:id', findRecipe)
    router.post('/recipe/add', addRecipe)
    router.put('/recipe/update/:id', updateRecipe)
    router.delete('/recipe/delete/:id', deleteRecipe)

    
    // user routes
    router.post('/user/create', createUser)
    router.post('/user/login', login)
    router.get('/user/logout', logout)
    return router
}
module.exports = {setRoute}
