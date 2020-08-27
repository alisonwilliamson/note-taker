import { writeFile } from 'fs';
import { join } from "path";
const filePath = join(__dirname, "../db/db.json");
import data, { push, indexOf, splice } from "../db/db.json";
// used to give each note a unique id
import { generate } from 'shortid';

export default function(app) {

// displays notes
app.get("/api/notes", function(req, res) {
    return res.json(data);
});

//creates a new note
app.post("/api/notes", function(req, res) {

    const newNote = req.body;
    // gives note specific id
    newNote.id = generate();
    // pushes note data onto array
    push(newNote);
    writeFile(filePath, JSON.stringify(data), err => {
        if (err) throw err;
        console.log("Note added");
        });
        // display in JSON
        res.send(newNote);
  });

// deletes a note
app.delete("/api/notes/:id", function(req, res) {
  const id = req.params.id;
  for (let note of data) {
      if (id === note.id) {
        const noteIndex = indexOf(note);
        splice(noteIndex, 1);
        writeFile(filePath, JSON.stringify(data), err => {
            if (err) throw err;
            console.log('Note deleted');
        });
        res.end()
      }
    }
});

// displays a note
app.get("/api/notes/:note", function(req, res) {
    const chosen = req.params.note;
    for (let i=0; i<readNotes.length; i++) {
      if (chosen === readNotes[i].noteName) {
        return res.json(readNotes[i]);
      }
    }
    return res.json(false);
  });
} 
 
