$("#submitSurvey").on("click", function() {
	var survAnswers = {
		name: $("#registerName").val().trim(),
		photo: $("#registerPhoto").val().trim(),
		scores: []
	}

	for (var i = 1; i < 11; i++) {
		var singleAnswer = $("#question" + i + " option:selected").val()
		survAnswers.scores.push(singleAnswer)
	};

	$.post("/api/friends", survAnswers)
	.done(function(data){
		console.log(data)
	})
})

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

}