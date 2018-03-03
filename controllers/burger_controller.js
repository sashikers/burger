var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	console.log("==============================================================");
	burger.selectAll(function(data) {
		var hbsObject =  {
			burgers: data
		};
		console.log("hbsObject", hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	console.log("router post");
	burger.insertOne(req.body.burger_name, function(result) {
		res.json({ id: result.insertId });
	});
});

// need to make an UPDATE router 

module.exports = router;