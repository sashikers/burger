var mysql = require("mysql");

var connection;

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	database: "burger_db"
// });

if (process.env.JAWDB_URL) {
	connection = mysql.createConnection(process.env.JAWDB_URL)
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: "burger_db"
	});
}

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;