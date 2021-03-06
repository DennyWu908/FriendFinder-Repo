var path = require("path")
var friends = require("../data/friends")

module.exports = function(app) {

	app.get("/survey.html", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"))
	})

	app.get("/home-styles.css", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home-styles.css"))
	})

	app.get("/survey-styles.css", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey-styles.css"))
	})

	app.get("/js/appScript.js", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/js/appScript.js"))
	})

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	})
	
}