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
	
	if (database !== undefined && database !== null) {
		var searchID = req.params.id,
			query = 'SELECT * FROM ANSWERS WHERE ID=?';
		
		database.get(query, searchID, function (err, result) {
			if (err) {
				throw err;
			}
			
			var foundAnswer = {};
			if (result !== undefined) {
				foundAnswer = result;
			}
			
			res.send(foundAnswer);
			
		});
	}
	
	
};

exports.createAnswer = function (req, res) {
	'use strict';
	
	if (database !== undefined && database !== null) {
		var goingString = req.body.GOING,
			going,
			name = req.body.NAME,
			email = req.body.EMAIL,
			phone = req.body.PHONE,
			message = req.body.MESSAGE,
			query = 'INSERT INTO ANSWERS (GOING, NAME, EMAIL, PHONE, MESSAGE) VALUES (?, ?, ?, ?, ?)';
		
		going = goingString === 'YES' ? 1 : (goingString === 'NO' ? 0 : 2);
		
		database.run(query, going, name, email, phone, message, function (err) {
			if (err) {
				throw err;
			}
			res.send({NEW_ID: this.lastID});
		});
	}
	
	
};

exports.deleteAnswer = function (req, res) {
	'use strict';
	res.send({test: "test"});
};

