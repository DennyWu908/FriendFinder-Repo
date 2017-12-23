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
	.done(
		// callback function with one parameter ("data")
	)
})