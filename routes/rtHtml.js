const path = require('path');
const expRt = require('express').Router();

// respond to the api routes 'notes' and 'index'

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