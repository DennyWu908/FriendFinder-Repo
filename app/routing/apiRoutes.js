var path = require("path")
var friends = require("../data/friends")

module.exports = function (app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(friends)
	})

	app.post("/api/friends", function(req, res) {
		console.log(req.body)
		compareFriends(req)

		var survResults = compareFriends(req)
		closest(survResults)

		friends.push(req.body)
		console.log(friends)
		res.send("Quiz completed.")
	})

}

function compareFriends (req) {

	var friendCompare = [];

	for (var i = 0; i < friends.length; i++) {
		friendCompare.push(friendDifference(req.body.scores, friends[i].scores))
	};

	console.log("friendCompare array", friendCompare)
	return friendCompare

}

function closest (friendCompareArray) {

	var smallestValue = friendCompareArray[0]
	var smallestIndex

	for (var i = 0; i < friendCompareArray.length; i++) {
		
		if (friendCompareArray[i] < smallestValue) {
			smallestValue = friendCompareArray[i]
			smallestIndex = i
		};

	};

	var friendResult = {friendFound: friends[smallestIndex].name, friendPhoto: friends[smallestIndex].photo}
	console.log("Closest Match:", friendResult)
	return friendResult

}

function friendDifference (array1, array2) {

	var diffArray = [];
	var singleDiff
	var diffTotal = 0
	
	for (var i = 0; i < array1.length; i++) {
		singleDiff = array1[i] - array2[i]
		singleDiff = Math.abs(singleDiff)
		diffArray.push(singleDiff)
	}

	for (var j = 0; j < diffArray.length; j++) {
		diffTotal += diffArray[j]
	}

	console.log(diffTotal)
	return diffTotal

}