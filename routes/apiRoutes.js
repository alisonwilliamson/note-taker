const fs = require('fs');
const path = require("path");
const filePath = path.join(__dirname, "../db/db.json");
const data = require("../db/db.json");
// used to give each note a unique id
const shortid = require('shortid');

module.exports = function(app) {

// displays notes
app.get("/api/notes", function(req, res) {
    return res.json(data);
});

//creates a new note
app.post("/api/notes", function(req, res) {

    const newNote = req.body;
    // gives note specific id
    newNote.id = shortid.generate();
    // pushes note data onto array
    data.push(newNote);
    fs.writeFile(filePath, JSON.stringify(data), err => {
        if (err) throw err;
        console.log("Note added");
        });
        // display in JSON
        res.send(newNote);
  });
}
