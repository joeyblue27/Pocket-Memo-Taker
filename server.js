
// import express and api routes

const express = require('express');
const api= require('./routes/rtApi');
const html = require('./routes/rtHtml');
const app = express();

// create port

const PORT = process.env.PORT || 3001;

// middleware and parsing added

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// opens port 3001

app.listen(PORT, () => {
    console.log(`Port Opened! ${PORT}!`);
});