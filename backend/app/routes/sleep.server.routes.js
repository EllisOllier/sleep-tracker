const sleep = require("../controllers/sleep.server.controller");

module.exports = function (app) {
    app.route("/sleep")
        .post(sleep.addSleepEntry)
        .get(sleep.getAllSleeps)
    app.route("/sleep/:id")
        .get(sleep.getSleepEntry)
        .delete(sleep.deleteSleep)
        .put(sleep.editSleep)
}