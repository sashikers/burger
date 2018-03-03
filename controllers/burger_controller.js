var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	console.log("hellooooooo");
	burger.selectAll();
	console.log("======================");
	burger.selectAll(function(data) {
		console.log("wow!");
	});
	// burger.selectAll(function(data) {
	// 	var hbsObject = {
	// 		burgers: data
	// 	};
	// 	console.log("hbsObject", hbsObject);
	// 	res.render("index", hbsObject);
	// });
});

module.exports = router;