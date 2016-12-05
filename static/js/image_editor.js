$(document).ready(function () {
	$(".range").change(change_filter).mousemove(change_filter);
});

function change_filter () {
	var gray_val = $('#grayscale').val(),
		blur_val = $('#blur').val(),
		exposure_val= $('#exposure').val(),
		sepia_val = $('#sepia').val(),
		opacity_val = $('#opacity').val();

	 $("#image_corr")
	 	.css("-webkit-filter",
	 		 "grayscale("+gray_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
}