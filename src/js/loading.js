$(function () {
	setTimeout(function () {
		$('.loading').remove();
	}, 1000)
	$(document).scrollLeft($('.main').width());
}());