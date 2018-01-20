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

// $.post("/api/friends", newSurvey).done(data => {
//     const newFriend = data[pickRandomFriend(data.length - 1)];
//     $("#matchName").text(newFriend.name);
//     $("#matchImg").attr("src", newFriend.photo);
//     $("#resultsModal").modal("toggle");
//   });