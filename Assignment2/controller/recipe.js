// filename: recipe.js
// Student name: Rajveer Kaur Gill
// Student Id: 200546782
// Date: 29 September 2024
var Recipe = require("../models/Recipe");
// Function to get the top 20 recipes sorted by average rating
var topRecipe = async function (req, res) {
    try {
        const list = await Recipe
            .find() // Find all recipes
            .sort({ averageRating: -1 }) // Sort by averageRating in descending order
            .limit(20) // Limit the result to 20 recipes
        res.send(list) // Send the list of recipes as the response
    } catch (err) {
        res.send(err) // Send the error if any occurs
    }
}
var getRecipeList = async function (req, res) {
    try {
        const list = await Recipe.find()
        res.send(list)
    } catch (err) {
        res.send(err)
    }
}
var findRecipe = async function (req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        res.send(recipe)
    } catch (err) {
        res.send(err)
    }
}
var addRecipe = async function (req, res) {
    try {
        const recipe = new Recipe(req.body)
        await recipe.save()
        res.send(recipe)
    } catch (err) {
        res.send(err);
    }
}
module.exports = {
    topRecipe,
    getRecipeList,
    findRecipe,
    addRecipe
}

