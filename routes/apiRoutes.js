// Require the router and db items needed
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {notes} = require('../db/db.json');
const { newSavedNote, deleteNote } = require('../helpers/db');


// Set up a get/post/delete methods as responses to the database
// Save note --> join to db.json
router.get('/notes', (req, res) => {
    let input = notes;
    res.json(input)
});

// Add new note to db.json
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = newSavedNote(req.body, notes);
    res.json(newNote)
});

// Removes note from db.json
router.delete('/notes/:id', (req, res) => {
    const whichId = req.params.id
    deleteNote(whichId, notes);
    res.redirect('');
} )

//Export the router
module.exports = router