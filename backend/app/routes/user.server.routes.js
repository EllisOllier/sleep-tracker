const user = require("../controllers/user.server.controller");

module.exports = function (app) {
    app.route("/login")
        .post(user.login)
    app.route("/signup")
        .post(user.sign_up)
    app.route("/logout")
        .post(user.log_out)
    app.route("/profile/:id")
        .get(user.get_profile)
    app.route("/profile")
        .put(user.update_profile)
}