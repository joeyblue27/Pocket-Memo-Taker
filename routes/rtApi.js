const expRt = require('express').Router();
const saveData = require('../db/diskDrive');


expRt.get('/notes', function (req, res) {
    saveData
        .retrieveMemo()
        .then(memos => res.json(memos))
        .catch(err => res.status(500).json(err));
});


expRt.post('/notes', (req, res) => {
    saveData
        .addMemo(req.body)
        .then((memo) => res.json(memo))
        .catch(err => res.status(500).json(err));
});


expRt.delete('/notes/:id', function (req, res) {
    saveData
        .deleteMemo(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = expRt;