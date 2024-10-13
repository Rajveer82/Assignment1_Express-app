var createUser = function (req, res) {
    // create user
    res.send('User created');
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