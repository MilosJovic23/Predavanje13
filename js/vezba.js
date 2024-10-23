//

//

$(document).ready(function () {
	$("#hideText").click(function () {
		var trenutniText = $(this).text();
		console.log(trenutniText);
		if (trenutniText == "Hide text") {
			$(this).text("Show text");
		} else {
			$(this).text("Hide text");
		}
		$(".readLess").toggle();
	});
});
