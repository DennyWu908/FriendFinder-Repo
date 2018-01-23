$("#submitSurvey").on("click", function() {

	// After a user clicks the button to submit their name, photo, and answers, this data is stored in an object.
	var survAnswers = {
		name: $("#registerName").val().trim(),
		photo: $("#registerPhoto").val().trim(),
		scores: []
	}

	// The answers to the user's survey are stored in an array.
	for (var i = 1; i < 11; i++) {
		var singleAnswer = $("#question" + i + " option:selected").val()
		survAnswers.scores.push(singleAnswer)
	};

	$.post("/api/friends", survAnswers)
	.done(function(data){

		// After the data on the closest matching friend is returned, the name and photo of this person is added to the modal.
		var surveyResult = data.friendFound
		$("#friendName").text(surveyResult)

		// An image tag is created for the photo of the person.
		var resultPic = data.friendPhoto
		var resultTag = $("<img>")
		resultTag.attr("src", resultPic)
		resultTag.attr("alt", "Best Friend Match")
		$("#friendPic").prepend(resultTag)

		// $("#friendModal").modal("toggle")
		console.log(data)
	})
})