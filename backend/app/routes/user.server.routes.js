const user = require("../controllers/user.server.controller");

module.exports = function (app) {
    app.route("/login")
        .post(user.login)
    app.route("/signup")
        .post(user.signUp)
    app.route("/logout")
        .post(user.logout)
    app.route("/profile/:id")
        .get(user.getProfile)
    app.route("/profile")
        .put(user.updateProfile)
}