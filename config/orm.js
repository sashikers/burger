var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput, cb) {
		var qs = "SELECT * FROM " + tableInput + ";";
		connection.query(qs, function(err, result) {
			if (err) {
				console.log(err);
			}
			// console.log("selectAll");
			// console.log(result);
			cb(result);
		});
	},
	insertOne: function(tableInput, colOne, valOne, cb) {
		var qs = "INSERT INTO ?? (??) VALUES (?);";
		console.log("insertOne qs", qs);
		connection.query(qs, [tableInput, colOne, valOne], function(err, result) {
			if (err) {
				console.log(err);
			}
			console.log("insertOne");
			console.log(result);
			cb(result);
		});
	},
	updateOne: function(tableInput, colOne, valOne, valId) {
		var qs = "UPDATE ?? SET ?? = ? WHERE id = ?;";
		connection.query(qs, [tableInput, colOne, valOne, valId], function(err, result) {
			if (err) {throw err};
			console.log("updateOne");
			console.log(result);
		});
	}
};

module.exports = orm;