var path = require("path")
var friends = require("../data/friends")

module.exports = function (app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(friends)
	})

	app.post("/api/friends", function(req, res) {
		console.log(req.body)
		// Calling compareFriends to create an array of differences.
		compareFriends(req)

		// Storing the array in a new variable, then generating an object for the friend who is the closest match.
		var survResults = compareFriends(req)
		closest(survResults)

		// Pushing the user's name, score, and photo into the array of friends, then logging the array.
		friends.push(req.body)
		console.log(friends)
		res.send("Quiz completed.")
	})

}

// This function calls friendDifference, comparing the user's scores to those of the potential friends in the dummy data file. It compiles an array of the differences and returns it.

function compareFriends (req) {

	var friendCompare = [];

	for (var i = 0; i < friends.length; i++) {
		friendCompare.push(friendDifference(req.body.scores, friends[i].scores))
	};

	console.log("friendCompare array", friendCompare)
	return friendCompare

}

// The differences are arranged in the same order as the array of friends in the dummy data file. So, the index of the smallest difference in the friendCompare array should be the same as the corresponding friend. This function creates an object consisting of the friend who has the least distance with the user and his or her photo.

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

// This function takes the results of the survey submitted by the user and compares them to the scores of a potential friend. It returns the difference between the two.

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