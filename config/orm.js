var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput) {
		var qs = "SELECT * FROM ??";
		connection.query(qs, [tableInput], function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	insertOne: function(tableInput, colOne, colOneVal) {
		var qs = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(qs, [tableInput, colOne, colOneVal], function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	updateOne: function(tableInput, colOne, colOneVal, idVal) {
		var qs = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(qs, [tableInput, colOne, colOneVal, idVal], function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	}
};

module.exports = orm;