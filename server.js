//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get('/contact', function(req, res) {
    res.send("Contact me at: alexis@gmail.com");
});

app.get('/about', function(req, res) {
    res.send("My name is Alexis and I love video games and code.");
});

app.get('/hobbies', function(req, res) {
    res.send("<ul><li>Video Games</li><li>Code</li><li>Photography</li></ul>")
});

app.listen(port, function() {
    console.log("Server started on port 3000");
});