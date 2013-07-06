/*global console*/
/*global require*/
var express = require('express');
 
var app = express();
 
app.get('/wines', function (req, res) {
	'use strict';
    res.send([{name : 'wine1'}, {name : 'wine2'}]);
});
app.get('/wines/:id', function (req, res) {
	'use strict';
    res.send({id : req.params.id, name : "The Name", description : "description"});
});
 
app.listen(3000);
console.log('Listening on port 3000...');