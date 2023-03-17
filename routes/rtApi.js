const expRt = require('express').Router();
const saveData = require('../db/diskDrive');


expRt.get('/notes', function (req, res) {
    saveData
        .retrieveMemo()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});


expRt.post('/notes', (req, res) => {
    saveData
        .addMemo(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});


expRt.delete('/notes/:id', function (req, res) {
    saveData
        .deleteMemo(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = expRt;