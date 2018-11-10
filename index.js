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
        "images/tradeBackgrounds/tradeWindow8.png",
		"images/tradeBackgrounds/tradeWindow9.png",
		"images/tradeBackgrounds/tradeWindow10.png",
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
$(window).load(function(){
    var block = false;
    
    $('#frameOne').on('click', function(){
        block = !block;
        console.log(block);
    });
    
    $('#colourHeaderOne').mouseenter(function(){
        if(!block) {
            block = true;
            $('#headerAngleOne').width(200);
            $('#headerAngleOne').css({"transition-delay":"0s"});
            $('#playerTradeSettings').css({
                "left" : "5px",
                "box-shadow" : "25px 12px 0 #001a44, 15px -12px 0 #001a44",
                "transition-delay" : "0s"
            });
            $(function(){
                block = false;
                console.log('block false');
            });
        }
    });
    
    $('#colourHeaderOne').mouseleave(function(){
        console.log('true');
        if(!block) {
            block = true;
            console.log('true2');
            
            if ($('#headerAngleOne').width() > 200) {
                $('#headerAngleOne').one('transitionend', function(){
                    $('#headerAngleOne').width(1100);
                    $('#playerTradeSettings').css({
                    "left" : "30px",
                    "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44"
                });
                    $(function(){
                        block = false;
                        console.log('true3');
                        console.log(block);
            });
                });
            } else if (block === true) {
                $('#headerAngleOne').css({"transition-delay":"0.5s"});
                $('#headerAngleOne').width(1100);
                $('#playerTradeSettings').css({
                    "left" : "30px",
                    "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44",
                    "transition-delay" : "0.5s"
                });
                $(function(){
                    block = false;
                    console.log('true3');
            });
            }
        }
    });
    
    var blockTwo = false;
    
    $('#frameTwo').on('click', function(){
        blockTwo = !blockTwo;
        console.log(block);
    });
    
    $('#colourHeaderTwo').mouseenter(function(){
        if(!blockTwo) {
            blockTwo = true;
            $('#headerAngleTwo').width(200);
            $('#headerAngleTwo').css({"transition-delay":"0s"});
            $('#botTradeSettings').css({
                "left" : "5px",
                "box-shadow" : "25px 12px 0 #001a44, 15px -12px 0 #001a44",
                "transition-delay" : "0s"
            });
            $(function(){
                blockTwo = false;
                console.log('block false');
            });
        }
    });
    $('#colourHeaderTwo').mouseleave(function(){
        console.log('true');
        if(!blockTwo) {
            blockTwo = true;
            console.log('true2');
            if ($('#headerAngleTwo').width() > 200) {
                $('#headerAngleTwo').one('transitionend', function(){
                    $('#headerAngleTwo').width(1100);
                    $('#botTradeSettings').css({
                        "left" : "30px",
                        "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44"
                    });
                    $(function(){
                        blockTwo = false;
                        console.log('true3');
                        console.log(block);
            });
                });
            } else if (blockTwo === true) {
                $('#headerAngleTwo').css({"transition-delay":"0.5s"});
                $('#headerAngleTwo').width(1100);
                $('#botTradeSettings').css({
                    "left" : "30px",
                    "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44",
                    "transition-delay" : "0.5s"
                });
                $(function(){
                    blockTwo = false;
                    console.log('true3');
            });
            }
        }
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
