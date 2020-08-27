var data = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(data);
    });

    app.get("/api/notes/:note", function (req, res) {
        var chosen = req.params.note;
        data(chosen)
        res.json(true);
    });

    // creates a note
    app.post("/api/notes", function (req, res) {
        data.push(req.body);
        res.json(true);
    });

    // deletes a note
    app.delete("/api/notes/:note", function (req, res) {
        var chosen = req.params.note;
        data.pop(chosen);
        res.json(true)
    })
  };