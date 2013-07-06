/*global console*/
/*global require*/
var express = require('express');
var answerRoutes = require('./routes/answers');

var app = express();
 
app.get('/answers', answerRoutes.findAll);
app.get('/answers/:id', answerRoutes.findByID);
 
app.listen(3000);
console.log('Listening on port 3000...');