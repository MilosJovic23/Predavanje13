//

//ready - dogadjaj

// $( document ).ready(function () {});

//

// document.getElementById("klikniButton").addEveentListner("click", function(){})
$("#klikniButton").click(function () {
	console.log("test123");
});

$(".anchorLink").click(function () {
	console.log("test");
	$(this).animate(
		{
			backgroundColor: "red",
			color: "white",
		},
		500
	);
});

//
$(".hideText").click(function () {
	$("#paragraf").slideToggle();
});
