const fs = require('fs');
const path = require('path');


//Adds saved notes to db.json
let newSavedNote = (body, notesArray) => {
    const savedNote = body
    notesArray.push(savedNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db"),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return savedNote;
};
//removes deleted note from db.json
let deleteNote = (id, notesArray) => {
    const deletedNote = id;
    for (let i=0; i<notesArray.length; i++) {
        if (deletedNote === notesArray[i].id) {
            notes.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db'),
                JSON.stringify({notes: notesArray}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                }
            )
        }
    }
}




module.exports = { newSavedNote, deleteNote }