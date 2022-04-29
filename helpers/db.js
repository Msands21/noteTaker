const fs = require('fs');
const path = require('path');

//Adds saved notes to db.json
let newSavedNote = (body, notes) => {
    const savedNote = body
    notes.push(savedNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notes}, null, 2)
    );
    return savedNote;
};

//removes deleted note from db.json
let deleteNote = (id, notes) => {
    const deletedNote = id;
    for (let i=0; i<notes.length; i++) {
        if (deletedNote === notes[i].id) {
            notes.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({notes: notes}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                }
            )
        }
    }
}

module.exports = { newSavedNote, deleteNote }