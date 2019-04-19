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
    
    var n = $('.tradeItem').length;
    for (i=1; i<=n; i++) {
        $('#playerInvCol .tradeItem:nth-child(' + i + ')').attr('no', i);
    }
    
});
$(window).load(function(){
    
    $('.tradeItem').bind("contextmenu",function(e){
        return false;
    });
    
    $('.navElementUser, .userDropdown').hover(function() {
        $('.hoverUnderline').css({"transition-delay" : "0s"});
        $('.userDropdown').css({"transition-delay" : "0.6s"});
        
        $('.hoverUnderline').css({"width" : "100%"});
        $('.userDropdown').css({"max-height" : "500px"});
    }, function(){
        if (($('.hoverUnderline').width() == 150) && ($('.userDropdown').height() >= 160)) {
            $('.hoverUnderline').css({"transition-delay" : "1s"});
            $('.userDropdown').css({"transition-delay" : "0s"});
            
            $('.hoverUnderline').css({"width" : "0%"});
            $('.userDropdown').css({"max-height" : "0px"});
        } else {
            $('.hoverUnderline').css({"width" : "0%"});
            $('.userDropdown').css({"max-height" : "0px"});
        }
    });
    
    var itemInfoTemplate = '<div class="tradeItemHoverWrap">' +
                                    '<div class="tradeItemHover">' +
                                        '<div class="tradeItemHoverInfoWrap">' +
                                            '<ul class="tradeItemHoverInfo">' +
                                                '<li class="listTitle" id="itemName">Breakout</li>' +
                                                '<li class="listDesc" id="itemRarity">Common</li>' +
                                                '<li class="listDesc" id="itemType">Body</li>' +
                                                '<li class="listDesc" id="itemPaint">No paint</li>' +
                                                '<li class="listDesc" id="itemCert">Not certified</li>' +
                                            '</ul>' +
                                        '</div><div class="hoverGraphWrap">' +
                                            '<svg width="510" height="300" xmlns="http://www.w3.org/2000/svg">' +
                                                '<defs><linearGradient y2="0" x2="1" y1="0" x1="0" id="svg_28"><stop offset="0" stop-opacity="0.5" stop-color="#ffffff"/><stop offset="1" stop-opacity="0.097656" stop-color="#ffffff"/></linearGradient></defs>' +
                                                '<g><title>background</title><rect fill="#001a44" id="canvas_background" height="302" width="512" y="-1" x="-1"/><g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g></g>' +
                                                '<g><title>Layer 1</title><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="260.442478" x2="45.752212" y1="20" x1="45.752212" stroke="#ffffff" fill="none"/><line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="260.442478" x2="486.752212" y1="260" x1="45.252212" stroke="#ffffff" fill="none"/><use href="#gridGradLines" y="20" x="45.752212" stroke-width="0"></use><use href="#gridGradLines" y="68" x="45.752212" stroke-width="0"></use><use href="#gridGradLines" y="116" x="45.752212" stroke-width="0"></use><use href="#gridGradLines" y="164" x="45.752212" stroke-width="0"></use><use href="#gridGradLines" y="212" x="45.752212" stroke-width="0"></use><rect id="svg_22" height="240" width="1" y="20.442478" x="119.052212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#6e7d95"/><rect id="svg_23" height="240" width="1" y="20.442478" x="192.412212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#5c6d87"/><rect id="svg_24" height="240" width="1" y="20.442478" x="265.752212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#4c5e7c"/><rect id="svg_25" height="240" width="1" y="20.442478" x="339.082212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#3b4f6f"/><rect id="svg_26" height="240" width="1" y="20.442478" x="412.412212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#293f62"/><rect id="svg_27" height="240" width="1" y="20" x="485.752212" stroke-opacity="null" stroke-width="0" stroke="#ffffff" fill="#193056"/>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_30" y="28.442478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$2.50</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_31" y="67.942478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$2.00</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_32" y="116.442478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$1.50</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_33" y="164.442478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$1.00</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_34" y="212.442478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$0.50</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="11" id="svg_35" y="260.442478" x="15.557522" stroke-width="0" stroke="#ffffff" fill="#ffffff">$0.00</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_36" y="271.426853" x="45.752212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Mon</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_37" y="271.426853" x="119.082212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Tue</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_38" y="271.426853" x="192.412212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Wed</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_39" y="271.442478" x="265.752212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Thu</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_40" y="271.426853" x="339.082212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Fri</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_41" y="271.426853" x="412.412212" stroke-width="0" stroke="#ffffff" fill="#ffffff">Sat</text>' +
                                                    '<text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" id="svg_42" y="271.442478" x="469.345962" stroke-width="0" stroke="#ffffff" fill="#ffffff">Sun</text></g>' +
                                        '</svg>' +
                                        '</div>' +
                                    '</div>';
    
    jQuery.fn.mouseIsOver = function() {
        return $(this).parent().find($(this).selector + ":hover").length > 0;
    }
    
    var itemPos = 0;
    var hoverPinStatus = false;
    
    $('.tradeItem').hover(function() {
        $('.tradeItemHoverWrap').remove();
        itemPos = $(this).offset();
        $('.tradeItemHoverCont').append(itemInfoTemplate);
        $('.tradeItemHoverWrap').css({
            "top" : itemPos.top - 310 + "px",
            "left" : itemPos.left + "px",
            "display" : "block"
        });
    }, function () {
        if (hoverPinStatus) {
            if (!$('.tradeItemHoverWrap').mouseIsOver()) {
                $('.tradeItemHoverWrap').remove();
            }
            hoverPinStatus = false;
        } else {
            $('.tradeItemHoverWrap').remove();
        }
    });
    setInterval(function(){
        $('.tradeItemHoverWrap').hover(function(){
        console.log('hi');
    }, function(){
        $(this).remove();
    });
    }, 150);
    $('.tradeItem').mousedown(function(e){
        if (e.which == 1) { //left click
            if ($(this).parent('#playerInvCol').length == 1){
                $(this).appendTo('#playerTradeCol'); 
            } else {
                $(this).appendTo('#playerInvCol');
            }
        } else if (e.which == 3) { //right click
            hoverPinStatus = !hoverPinStatus;
        }
        
    });
    
    var block = false;
    var pin = false;
    
    
    $('#frameOne').on('click', function(){
        block = !block;
        pin = !pin;
        console.log(block);
    });
    
    $('#colourHeaderOne').mouseenter(function(){
        console.log('mouse enter');
        
        if (!pin){
           block = false; 
        }
        
        if(block == false) {
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
                console.log('block set to short width');
                console.log(block);
            });
        }
    });
    
    $('#colourHeaderOne').mouseleave(function(){
        console.log('mouse leave');
        if(!block) {
            block = true;
            console.log('block = ' + block);
            console.log($('#headerAngleOne').width());
            if ($('#headerAngleOne').width() > 200) {
                $('#headerAngleOne').one('transitionend', function(){
                    $('#headerAngleOne').width(1100);
                    $('#playerTradeSettings').css({
                    "left" : "30px",
                    "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44"
                    });
                    $(function(){
                        block = false;
                        console.log('no transition delay success');
                        console.log(block);
                    });
                });
            } 
            if ($('#headerAngleOne').width() <= 201) {
                
                $('#headerAngleOne').css({"transition-delay":"0.5s"});
                $('#headerAngleOne').width(1100);
                $('#playerTradeSettings').css({
                    "left" : "30px",
                    "box-shadow" : "-25px 12px 0 #001a44, -15px -12px 0 #001a44",
                    "transition-delay" : "0.5s"
                });
                $(function(){
                    block = false;
                    console.log('transition delay successful');
            });
            }
        }
    });
    
    var blockTwo = false;
    var pinTwo = false;
    
    $('#frameTwo').on('click', function(){
        blockTwo = !blockTwo;
        pinTwo = !pinTwo;
        console.log(block);
    });
    
    $('#colourHeaderTwo').mouseenter(function(){
        
        if (!pinTwo){
            blockTwo = false;
        }
        
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
            } 
            if ($('#headerAngleTwo').width() <= 201) {
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
