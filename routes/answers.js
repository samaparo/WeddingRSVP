/*global exports*/
/*global require*/

var fs = require("fs");
var sqlite = require("sqlite3");

var dbPath = "./data/base.sqlite";

var database = null;
fs.exists(dbPath, function (exists) {
	'use strict';
	if (exists) {
		database = new sqlite.Database(dbPath);
	}
});

exports.findAll = function (req, res) {
	'use strict';
	
	if (database !== undefined && database !== null) {
		
		var query = 'SELECT * FROM ANSWERS';
			
		database.all(query, function (err, rows) {
			if (err) {
				throw err;
			}
			
			var foundAnswers = [];
			
			rows.forEach(function (row) {
				foundAnswers.push(row);
			});
			
			res.send({ANSWERS: foundAnswers});
			
			
		});
		
		
	}
	
};

exports.findByID = function (req, res) {
	'use strict';
	res.send({test: "test"});
};

exports.createAnswer = function (req, res) {
	'use strict';
	res.send({test: "test"});
};

exports.deleteAnswer = function (req, res) {
	'use strict';
	res.send({test: "test"});
};

