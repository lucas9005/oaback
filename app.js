// Imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
// const cors = require('cors');
// const passport = require('passport');

// Models
const news = require('./models/news');

// App
const app = express();
const port = 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost/oadb');
const db = mongoose.connection;

// Middlewares
// app.use(cors());
app.use(express.static(path.join(__dirname, '../lucas9005.github.io')));
app.use(bodyParser.json());

// Index Endpoint
app.get('/', (req, res) => {
    console.log('Received ROOT GET Request');
    res.render('index.html');
    console.log('Processed ROOT GET Request');
});

// Create News
app.post('/api/news', (req, res) => {
    console.log('Received NEWS POST Request');
    let body = req.body;
    news.postNews(body, (err, suc) => {
        if (err) {
            throw err;
        } else {
            console.log('Processed NEWS POST Request');
            res.json(suc);
        };
    });
});

// Read News
app.get('/api/news/:limit?', (req, res) => {
    console.log('Received NEWS GET Request');
    let limit = parseInt(req.params.limit);
    news.getNews(limit, (err, suc) => {
        if (err) {
            throw err;
        } else {
            console.log('Processed NEWS GET Request');
            res.json(suc);
        };
    });
});

// Update News
app.put('/api/news/:id', (req, res) => {
    console.log('Received NEWS UPDATE Request');
    let id = req.params.id;
    let body = req.body;
    let options = {
        new: true
    };
    news.updateNews(id, body, options, (error, suc) => {
        if (error) {
            throw error;
        } else {
            console.log('Processed NEWS UPDATE Request');
            res.json(suc);
        };
    });
});

// Delete News
app.delete('/api/news/:id', (req, res) => {
    console.log('Received NEWS DELETE Request');
    let id = req.params.id;
    news.deleteNews(id, (err, suc) => {
        if (err) {
            throw err;
        } else {
            console.log('Processed NEWS DELETE Request');
            res.json(suc);
        };
    });
});

// Server Start
app.listen(port, () => {
    console.log('Server Listening on Port ' + port);
});
