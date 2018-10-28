$(document).ready(function() {
  	$('#frameOne').click(function() {
		$('#headerAngleOne').toggleClass('smallWidth');
		$('#headerPinOne').toggleClass('whitePin');
		$('#playerTradeSettings').toggleClass('headerIconBarsPin');
	});
	$('#frameTwo').click(function() {
    	$('#headerAngleTwo').toggleClass('smallWidth');
		$('#headerPinTwo').toggleClass('whitePin');
		$('#botTradeSettings').toggleClass('headerIconBarsPin');
  	});
	var tradeBackgrounds = [
		"images/tradeBackgrounds/tradeWindow1.png",
		"images/tradeBackgrounds/tradeWindow2.png",
		"images/tradeBackgrounds/tradeWindow3.png",
		"images/tradeBackgrounds/tradeWindow4.png",
		"images/tradeBackgrounds/tradeWindow5.png",
		"images/tradeBackgrounds/tradeWindow6.png",
		"images/tradeBackgrounds/tradeWindow7.png",
	];
	var size = tradeBackgrounds.length;
	var playerX = Math.floor(size*Math.random());
	var botX = Math.floor(size*Math.random());
	$('#playerTrade').css({
		"background" : "url("+ tradeBackgrounds[playerX] +")",
		"top" : "20px",
		"background-size" : "contain",
		"background-position" : "0px 50px"
	});
	$('#botTrade').css({
		"background" : "url("+ tradeBackgrounds[botX] +")",
		"top" : "40px",
		"background-size" : "contain",
		"background-position" : "0px 50px"
	});
});
$(function(){
	$(window).scroll(function(){
		var st = $(this).scrollTop();
	
		if(st === 0) {
			$('#navBar').css({
				"padding" : "20px 0"
			});
			$('#logo').css({
				"font-size" : "50px"
			});
		} else {
			$('#navBar').css({
				"padding" : "0 0"
			});
			$('#logo').css({
				"font-size" : "40px"
			});
		}
	})
	.scroll();
});
