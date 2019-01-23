$(function() {
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
    
    var hashStringOne = ["K", "W", "U", "9", "2"]
    var hashStringTwo = ["N", "A", "9", "Y", "0"]
    var hashStringThree = ["J", "2", "N", "X", "P"]
    setInterval(function(){
        var randLetterOne = Math.floor(Math.random() * 5);
        do {
            var randLetterTwo = Math.floor(Math.random() * 5);
        } while (randLetterTwo === randLetterOne);
        hashStringOne[randLetterOne] = Math.random().toString(36).substr(2, 1);
        hashStringOne[randLetterTwo] = Math.random().toString(36).substr(2, 1);
        $("#r1c1").text(hashStringOne[0]);
        $("#r1c2").text(hashStringOne[1]);
        $("#r1c3").text(hashStringOne[2]);
        $("#r1c4").text(hashStringOne[3]);
        $("#r1c5").text(hashStringOne[4]);
        
        var randLetterThree = Math.floor(Math.random() * 5);
        do {
            var randLetterFour = Math.floor(Math.random() * 5);
        } while (randLetterFour === randLetterThree);
        hashStringTwo[randLetterThree] = Math.random().toString(36).substr(2, 1);
        hashStringTwo[randLetterFour] = Math.random().toString(36).substr(2, 1);
        $("#r2c1").text(hashStringTwo[0]);
        $("#r2c2").text(hashStringTwo[1]);
        $("#r2c3").text(hashStringTwo[2]);
        $("#r2c4").text(hashStringTwo[3]);
        $("#r2c5").text(hashStringTwo[4]);
        
        var randLetterFive = Math.floor(Math.random() * 5);
        do {
            var randLetterSix = Math.floor(Math.random() * 5);
        } while (randLetterSix === randLetterFive);
        hashStringThree[randLetterFive] = Math.random().toString(36).substr(2, 1);
        hashStringThree[randLetterSix] = Math.random().toString(36).substr(2, 1);
        $("#r3c1").text(hashStringThree[0]);
        $("#r3c2").text(hashStringThree[1]);
        $("#r3c3").text(hashStringThree[2]);
        $("#r3c4").text(hashStringThree[3]);
        $("#r3c5").text(hashStringThree[4]);
    },60)
    
    $(window).scroll(function(){
		var st = $(this).scrollTop();
	
		if(st === 0) {
			$('#navBar').css({
				"padding" : "20px 0"
			});
			$('#logo').css({
				"width" : "90px",
                "height" : "90px"
			});
		} else {
			$('#navBar').css({
				"padding" : "0 0"
			});
			$('#logo').css({
				"width" : "50px",
                "height" : "50px"
			});
		}
	})
	.scroll();
    
    $('.tradeItem').click(function(event){
        if ($(this).parent('#playerInvCol').length == 1){
            $(this).appendTo('#playerTradeCol'); 
        } else {
            $(this).appendTo('#playerInvCol');
        }
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
