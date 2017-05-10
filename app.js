// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// App
const app = express();

// Constants
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Index Endpoint
app.get('/', (req, res) => {
    res.send('Index Endpoint');
});

// Server Starting
app.listen(port, () => {
    console.log('Server Started on Port ' + port);
});