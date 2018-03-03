var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput) {
		var qs = "SELECT * FROM ??" + tableInput + ";";
		connection.query(qs, [tableInput], function(err, result) {
			if (err) {throw err};
			console.log("selectAll");
			console.log(result);
			// cb(result);

		});
	},
	insertOne: function(tableInput, colOne, valOne) {
		var qs = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(qs, [tableInput, colOne, valOne], function(err, result) {
			if (err) {throw err};
			console.log("insertOne");
			console.log(result);
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