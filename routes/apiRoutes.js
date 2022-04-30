// Require the router and db items needed
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {dbjson} = require('../db/db');
const { newSavedNote, deleteNote } = require('../helpers/db');


// Set up a get/post/delete methods as responses to the database
// Save note --> join to db.json
router.get('/notes', (req, res) => {
    let input = dbjson;
    res.json(input)
});

// Add new note to db.json
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = newSavedNote(req.body, dbjson);
    res.json(newNote)
});

// Removes note from db.json
router.delete('/notes/:id', (req, res) => {
    const whichId = req.params.id
    deleteNote(whichId, dbjson);
    res.redirect('');
} )

//Export the router
module.exports = router