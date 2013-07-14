/*global console*/
/*global require*/
var express = require('express');
var answerRoutes = require('./routes/answers');

var app = express();

app.configure(function () {
	'use strict';
	app.use(express.logger('default'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use(express.static('/admin/', __dirname + '/public/admin'));
});

app.get('/answers', answerRoutes.findAll);
app.get('/answers/:id', answerRoutes.findByID);
app.post('/answers', answerRoutes.createAnswer);
app.delete('/answers/:id', answerRoutes.deleteAnswer);

app.listen(8000);
