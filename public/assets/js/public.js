console.log("helloooooooowow");

$(function() {
	$(".devour-burger").on("click", function(event) {
		var id = $(this).data("id");
		// need to finish listeners
	});


	// add POST request for new burger

	// add PUT request for update 
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		console.log("submit button pressed");

		var newBurger = {
			burger_name: $("#newBurgerName").val().trim()
		};

		$.ajax("api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger!");
				location.reload();
			}
		);
	});


	// including the different divs for devoured and whole 
});