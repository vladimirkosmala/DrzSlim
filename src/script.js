

$(function(){
	try {

		$('.page-header .navbar').addClass('rainbow').empty();
		document.getElementsByClassName("search")[0].getElementsByTagName("input")[0].placeholder = 'Search Music';
		document.getElementsByClassName("covers")[0].style.height = '91px';

	} catch(e) {
		console.log(JSON.stringify(e));
	}
});


var fav_play = chrome.extension.getURL("fav_play.ico");
var fav_pause = chrome.extension.getURL("fav_pause.ico");

var interval;
if (interval) {
	clearInterval(interval);
	interval = null;
}
interval = window.setInterval(function(){
	try {
		var fav;

		if ($('.control-play').css('display') == 'none') {
			fav = fav_play;
		} else {
			fav = fav_pause;
		}

		$('link[rel="icon"]').attr('href', fav);
		$('link[rel="shortcut icon"]').attr('href', fav);
	} catch(e) {
		console.log(JSON.stringify(e));
	}
}, 100);