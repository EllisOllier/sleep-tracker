const test = require("../controllers/test.server.controller")

module.exports = function(app){
    app.route("/test")
        .get(test.test)
}