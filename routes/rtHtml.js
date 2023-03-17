const path = require('path');
const expRt = require('express').Router();

expRt.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

expRt.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

expRt.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = expRt;