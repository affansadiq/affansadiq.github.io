$(function() {
	$("#slides").slidesjs({
	    width: 400,
	    height: 230,
	    //navigation: true, // navi ist dann weg
	    pagination: {
	      active: false,
	      effect: "fade" // selbsterklärend
	    },
	    start: 2 // Fang vom Zweiten an!
	});
});