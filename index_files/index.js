$( document ).ready(function(){
	$('#aboutLink').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('#aboutPage').offset().top
		}, 600);
	});

	$('#functionLink').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('#functionPage').offset().top
		}, 600);
	});
	
	$('#contactLink').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('#contactPage').offset().top
		}, 600);
	});
	$('#homeLink').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('#homePage').offset().top
		}, 600);
	});
	$('#aboutFooter').on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $('#aboutPage').offset().top
		}, 600);
	});
})
