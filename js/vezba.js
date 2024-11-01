//

//

$(document).ready(function () {
	$("#hideText").click(function () {
		var trenutniText = $(this).text();
		if (trenutniText == "Hide text") {
			$(this).text("test");
		} else {
			$(this).text("Hide text");
		}
		$(".readLess").toggle();
	});
});
