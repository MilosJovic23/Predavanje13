//

//
$(document).ready(function () {
	$("#saberi").click(function () {
		var broj1 = $("#broj1").val();
		var broj2 = $("#broj2").val();
		broj1 = parseInt(broj1);
		broj2 = parseInt(broj2);
		var saberi = broj1 + broj2;
		console.log(saberi);
	});
});
