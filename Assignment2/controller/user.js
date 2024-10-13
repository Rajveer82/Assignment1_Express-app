
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
var login = function (req, res) {
    // login
    res.send('User logged in');
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
