const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNote, validateNote } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if(!validateNote(req.body)) {
        res.status(400).send('Note is not formatted correctly.');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;