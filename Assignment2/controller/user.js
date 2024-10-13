// filename: user.js
// Student name: Rajveer Kaur Gill
// Student Id: 200546782
// Date: 13 October 2024

//Import the user model
var User = require("../models/User");

// Function to create a new user
var createUser = async function (req, res) {
    try {
        // Create anew user using the request body data
        const user = new User(req.body)
        // Save the user to the database
        await user.save()
        // Send the newly created user back in the response
        res.send(user)
    } catch (err) {
        // If there is an error, send the error message
        res.send(err);
    }
}
// Function to log in a user
var login = async function (req, res) {
    // Extract the username and password from the request body
    var username = req.body.username;
var password = req.body.password;
    try {
        // Find a user in the database that matches the provided username and password
        const user = await User.findOne({ username: username, password: password })

        // If a user is found, send a success message
        if (user) {
            res.send('User logged in');
        }
        // If no user is found, send an error message
        else {
            res.send('Invalid username or password');
        }
    } catch (err) {
        // If there is an error, send the error message
        res.send(err);
    } 
}

// Function to log out a user
var logout = function (req, res) {
    // Send a success message for logging out
    res.send('User logged out');
}
// Export the functions for use in other parts of the application
module.exports = {
    createUser,
    login,
    logout
}
