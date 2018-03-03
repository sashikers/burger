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

router.put("/api/cats/:id", function(req, res) {
	var id = req.params.id;
	var condition = req.body.devoured;

	console.log("condition", condition);
	if (condition == "true") {
		condition = 1; 
	} else {
		condition =0;
	}
	console.log("new condition", condition);
	console.log("id", id);

	burger.updateOne(condition, id, function(result) {
		console.log("result", result);
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
// need to make an UPDATE router 

module.exports = router;