
var User = require("../models/User");
var createUser = async function (req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        res.send(user)
    } catch (err) {
        res.send(err);
    }
}
var login = async function (req, res) {
    var username = req.body.username;
var password = req.body.password;
    try {
        const user = await User.findOne({ username: username, password: password })
        if (user) {
            res.send('User logged in');
        } else {
            res.send('Invalid username or password');
        }
    } catch (err) {
        res.send(err);
    } 
}
var logout = function (req, res) {
    // logout
    res.send('User logged out');
}
module.exports = {
    createUser,
    login,
    logout
}
