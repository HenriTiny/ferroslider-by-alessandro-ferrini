/*
  Ferro Slider version 2
  Requires jQuery (tested on 1.9.1).
  Requires jQuery Transit (tested on 0.9.9).

  Copyright 2013 Ferro
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

if(isMobileOut()){
	var deviceWidth = window.outerWidth+"px";
	$("head").append('<meta name="viewport" id="vpFerroSlider" content="width='+deviceWidth+', minimum-scale = 1.0, maximum-scale = 1.0, initial-scale=1.0, user-scalable=no"/>');
}

function isMobileOut(){
	if(( navigator.userAgent.toLowerCase().indexOf("android") >-1)
			|| ( navigator.userAgent.toLowerCase().indexOf("blackberry9500")>-1) || ( navigator.userAgent.toLowerCase().indexOf("blackberry9530")>-1) || ( navigator.userAgent.toLowerCase().indexOf("cupcake") >-1) || ( navigator.userAgent.toLowerCase().indexOf("dream") >-1) || ( navigator.userAgent.toLowerCase().indexOf("incognito") >-1) || ( navigator.userAgent.toLowerCase().indexOf("iphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ipod")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("ipad")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("mini")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("webos") >-1) || ( navigator.userAgent.toLowerCase().indexOf("webmate")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("2.0 mmp") >-1) || ( navigator.userAgent.toLowerCase().indexOf("240×320") >-1) || ( navigator.userAgent.toLowerCase().indexOf("asus") >-1) || ( navigator.userAgent.toLowerCase().indexOf("au-mic")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("alcatel") >-1) || ( navigator.userAgent.toLowerCase().indexOf("amoi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("audiovox") >-1) || ( navigator.userAgent.toLowerCase().indexOf("avantgo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("benq") >-1) || ( navigator.userAgent.toLowerCase().indexOf("bird") >-1) || ( navigator.userAgent.toLowerCase().indexOf("blackberry") >-1) || ( navigator.userAgent.toLowerCase().indexOf("blazer") >-1) || ( navigator.userAgent.toLowerCase().indexOf("cdm") >-1) || ( navigator.userAgent.toLowerCase().indexOf("cellphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ddipocket") >-1) || ( navigator.userAgent.toLowerCase().indexOf("danger") >-1) || ( navigator.userAgent.toLowerCase().indexOf("docomo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("elaine/3.0") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ericsson") >-1) || ( navigator.userAgent.toLowerCase().indexOf("eudoraweb") >-1) || ( navigator.userAgent.toLowerCase().indexOf("fly") >-1) || ( navigator.userAgent.toLowerCase().indexOf("hp.ipaq")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("haier") >-1) || ( navigator.userAgent.toLowerCase().indexOf("huawei") >-1) || ( navigator.userAgent.toLowerCase().indexOf("iemobile") >-1) || ( navigator.userAgent.toLowerCase().indexOf("j-phone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kddi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("konka") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kwc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kyocera/wx310k") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lg") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lg/u990") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lenovo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("midp-2.0") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mmef20") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mot-v") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mobilephone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("motorola") >-1) || ( navigator.userAgent.toLowerCase().indexOf("newgen") >-1) || ( navigator.userAgent.toLowerCase().indexOf("netfront") >-1) || ( navigator.userAgent.toLowerCase().indexOf("newt") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nintendo wii") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nitro") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nokia") >-1) || ( navigator.userAgent.toLowerCase().indexOf("novarra") >-1) || ( navigator.userAgent.toLowerCase().indexOf("o2") >-1) || ( navigator.userAgent.toLowerCase().indexOf("opera mini") >-1) || ( navigator.userAgent.toLowerCase().indexOf("opera.mobi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pantech") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pdxgw") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pg") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ppc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pt") >-1) || ( navigator.userAgent.toLowerCase().indexOf("palm") >-1) || ( navigator.userAgent.toLowerCase().indexOf("panasonic") >-1) || ( navigator.userAgent.toLowerCase().indexOf("philips") >-1) || ( navigator.userAgent.toLowerCase().indexOf("playstation portable") >-1) || ( navigator.userAgent.toLowerCase().indexOf("proxinet") >-1) || ( navigator.userAgent.toLowerCase().indexOf("proxinet") >-1) || ( navigator.userAgent.toLowerCase().indexOf("qtek") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sch") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sec") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sgh") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sharp-tq-gx10") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sie") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sph") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sagem") >-1) || ( navigator.userAgent.toLowerCase().indexOf("samsung") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sanyo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sendo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sharp")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("small") >-1) || ( navigator.userAgent.toLowerCase().indexOf("smartphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("softbank") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sonyericsson") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbian") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbian os") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbianos") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ts21i-10") >-1) || ( navigator.userAgent.toLowerCase().indexOf("toshiba") >-1) || ( navigator.userAgent.toLowerCase().indexOf("treo")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("up.browser") >-1) || ( navigator.userAgent.toLowerCase().indexOf("up.link") >-1) || ( navigator.userAgent.toLowerCase().indexOf("uts") >-1) || ( navigator.userAgent.toLowerCase().indexOf("vertu") >-1) || ( navigator.userAgent.toLowerCase().indexOf("willcome") >-1) || ( navigator.userAgent.toLowerCase().indexOf("winwap") >-1) || ( navigator.userAgent.toLowerCase().indexOf("windows ce") >-1) || ( navigator.userAgent.toLowerCase().indexOf("windows.ce") >-1) || ( navigator.userAgent.toLowerCase().indexOf("xda") >-1) || ( navigator.userAgent.toLowerCase().indexOf("zte") >-1) || ( navigator.userAgent.toLowerCase().indexOf("dopod") >-1) || ( navigator.userAgent.toLowerCase().indexOf("hiptop")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("htc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("i-mobile") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nokia") >-1) || ( navigator.userAgent.toLowerCase().indexOf("portalmmm") >-1)){
		
		if(navigator.platform.toLowerCase().indexOf("win32") == -1 && navigator.platform.toLowerCase().indexOf("win64") == -1){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

(function( $ ){
    var methods = {
        ferroSliderCreate : function(options) {
            var defaults = {
                ajaxLoading				: false, //fatto
                ajaxScript				: null, //fatto
                autoSlide				: false, //fatto
                autoSlideTime			: 5000, //fatto
                axis					: null, //fatto
                container 				: 'none', //fatto
                createLinks				: false, //fatto
                createMap				: false, //fatto
                createPlayer			: false, //fatto
                createSensibleAreas		: false, //fatto
                createTimeBar			: false, //fatto
                displace 				: 'row', //fatto
                easing 					: 'ease', //fatto
                linksPosition			: 'bottom_center', //fatto
                linksStyle				: 'row', //fatto
                mapPosition				: 'bottom_right', //fatto
                playerPosition			: 'bottom_center', //fatto
                preventArrowNavigation	: false, //fatto
                swipeTime				: 100, //fatto
                swipeTreshold			: 80, //fatto
                time 					: 300, //fatto
                timeBarPosition			: 'bottom', //fatto
                timeBarInsidePlayer		: true, //fatto
                tips					: false, //fatto
                tipsPosition			: 'top' //fatto
            };
    		
            var autoPlayStartTime = 0;
            var constrainSwipeX = false;
            var constrainSwipeY = false;
            var containerHeight = 0;
            var containerWidth = 0;
            var displayHeight = 0;
            var displayWidth = 0;
            var endSwipeTime = 0;
            var internalCounter = 0;
            var isMobile = isMobile();
            var matrix = new Array();
            var matrixColumns = 0;
            var matrixFirst = null;
            var matrixRows = 0;
            var matrixOrder = new Array();
            var opts = $.extend({},defaults, options); 
            var outerSliderWidth = 0;
            var outerSliderHeight = 0;
            var pauseTime = 0;
            var pixelRatio = (typeof(window.devicePixelRatio) != "undefined")? window.devicePixelRatio : 1;
            var playSlide = false;
            var playStartTime = 0;
            var slide = false;
            var sliderClass = this.selector.replace(".","");
            var slideEndX = 0;
            var slideEndY = 0;
            var slideInitialX = 0;
            var slideInitialY = 0;
            var slideStartX = 0;
            var slideStartY = 0;
            var startSwipeTime = 0;
            var stopSlidingTags = new Array("input","textarea","a","select","button","audio","video");
            var timeLeft = opts.autoSlideTime;
            var t = null;
            
            /*FUNZIONI PUBBLICHE*/
            $.fn.ferroSlider.play = function(){
            	playSlide = true;
            	$("#ferroslider-player .play").hide();
            	$("#ferroslider-player .pause").removeClass("actual");
            	$("#ferroslider-player .pause").show();
            	$("#ferroslider-player .pause").addClass("actual");
            	$("#ferroslider-player .prev").blur();
            	$("#ferroslider-player .next").blur();
            	autoPlayStartTime = new Date().getTime();
            	timeLeft = opts.autoSlideTime-pauseTime;
            	//alert(timeLeft);
            	_refreshTimeBar(timeLeft);
            };
            
            $.fn.ferroSlider.pause = function(){
            	playSlide = false;
            	$("#ferroslider-player .pause").hide();
            	$("#ferroslider-player .play").show();
            	$("#ferroslider-player .prev").blur();
            	$("#ferroslider-player .next").blur();
            	pauseTime = new Date().getTime()-autoPlayStartTime;
            	timeLeft = opts.autoSlideTime-pauseTime;
            	_refreshTimeBar(timeLeft);
            };
            
            $.fn.ferroSlider.slideTo = function(slideToId){
            	if(_actualPage().replace("#","") != slideToId){
            		_moveSlide("#"+slideToId,opts.time);
            	}
            };
            
            $.fn.ferroSlider.slideToNext = function(){
            	var actualPageId = _actualPage().replace("#",""); 
            	$("."+sliderClass).each(function(index){
            		if(actualPageId == $(this).attr("id")){
            			var nextId = 0;
            			if((index+1) < $("."+sliderClass).length){
            				nextId = index+1;
            			}
            			_moveSlide("#"+$($("."+sliderClass)[nextId]).attr("id"),opts.time);
            			timeLeft = opts.autoSlideTime;
            			if(!playSlide){
            				timeLeft = opts.autoSlideTime-pauseTime;
            			}else{
            				$("#ferroslider-timebar-in").width(0);
            				autoPlayStartTime = new Date().getTime();
            			}
            			_refreshTimeBar(timeLeft);
            		}
            	});
            	$("#ferroslider-player .prev").blur();
            	$("#ferroslider-player .next").blur();
            };
            
            $.fn.ferroSlider.slideToPrev = function(){
            	var actualPageId = _actualPage().replace("#",""); 
            	$("."+sliderClass).each(function(index){
            		if(actualPageId == $(this).attr("id")){
            			var prevId = $("."+sliderClass).length-1;
            			if((index-1) >= 0){
            				prevId = index-1;
            			}
            			_moveSlide("#"+$($("."+sliderClass)[prevId]).attr("id"),opts.time);
            			timeLeft = opts.autoSlideTime;
            			if(!playSlide){
            				timeLeft = opts.autoSlideTime-pauseTime;
            			}else{
            				$("#ferroslider-timebar-in").width(0);
            				autoPlayStartTime = new Date().getTime();
            			}
            			_refreshTimeBar(timeLeft);
            		}
            	});
            	$("#ferroslider-player .prev").blur();
            	$("#ferroslider-player .next").blur();
            };
            /*FINE FUNZIONI PUBBLICHE*/
            
            /*START*/
            $("head").append('<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" />');
            if (!$.support.transition){
            	opts.easing = "swing";
            	$.fn.transition = $.fn.animate;
            }
            _init();
            /*END*/
            
            /*LISTENERS*/
            _addEventListenerUniversal("resize",window,_manageResize);
            _addEventListenerUniversal("orientationchange",window,function(){
            	var t = setTimeout(function(){_manageOrientationChange()},200);
            });
            
            var isTouchSupported = 'ontouchstart' in window;
            var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
            var moveEvent = isTouchSupported ? 'touchmove' : 'mousemove';
            var endEvent = isTouchSupported ? 'touchend' : 'mouseup';
            
            _addEventListenerUniversal(startEvent,$("#outerSliderWrapper").get(0),_onmousedown);
            _addEventListenerUniversal(moveEvent,$("#outerSliderWrapper").get(0),_onmousemove);
            _addEventListenerUniversal(endEvent,$("#outerSliderWrapper").get(0),_onmouseup);
            
            _addEventListenerUniversal("keydown",document,_onkeydown);
            
            /*FINE LISTENERS*/
            
            /*FUNZIONI INTERNE*/
            function _addEventListenerUniversal(evnt, elem, func){
            	if (elem.addEventListener)  // W3C DOM
            		elem.addEventListener(evnt,func,false);
            	else if (elem.attachEvent) { // IE DOM
            		elem.attachEvent("on"+evnt, func);
            	}
            	else { // No much to do
            		elem[evnt] = func;
            	}
            }
            
            function _actualPage(){
            	return location.hash.replace("!","");
            }
            
            function _checkFromPosition(row,column){
            	var toReturn = false;
            	$("."+sliderClass).each(function(){
            		if($(this).data("row") == row && $(this).data("column") == column && !toReturn){
            			toReturn = true;
            		}
            	});
            	return toReturn;
            }
            
            function _computeEnvDimentions(){
            	$("html,body").css({
            		height : window.innerHeight,
            		width : window.innerWidth
            	});
            	
            	if(isMobile){
            		displayWidth = window.innerWidth;
            		displayHeight = window.innerHeight;
            		
            		var viewPortContent = $("#vpFerroSlider").attr("content").split(",");
            		//viewPortContent[0] = displayWidth*window.devicePixelRatio+"px";
            		viewPortContent[0] = displayWidth+"px";
            		
            		$("#vpFerroSlider").attr("content",viewPortContent.join(","));
            	}else{
            		displayWidth = window.innerWidth;
            		displayHeight = window.innerHeight;
            	}
            	
            	if(opts.container == "none"){
            		containerWidth = displayWidth;
            		containerHeight = displayHeight;
            	}else{
            		containerWidth = $(opts.container).outerWidth(true);
            		containerHeight = $(opts.container).outerHeight(true);
            	}
            	
            	/*creo il contenitore che dovra' scorrere*/
            	if(typeof(opts.displace) == "object"){
            		//calcolo le dimensioni della matrice
            		matrixRows = opts.displace.length;
            		
            		$(opts.displace).each(function(){
            			if(matrixColumns < this.length){
            				matrixColumns = this.length;
            			}
            		});
            		
            		outerSliderWidth = matrixColumns*containerWidth;
        			outerSliderHeight = matrixRows*containerHeight;
            	}else{
            		if(opts.displace == "row"){
            			outerSliderWidth = $("."+sliderClass).length*containerWidth;
            			outerSliderHeight = containerHeight;
            		}else{
            			outerSliderWidth = containerWidth;
            			outerSliderHeight = $("."+sliderClass).length*containerHeight;
            		}
            	}
            }
            
            function _createLinks(){
            	if(opts.createLinks){
            		$("#outerSliderWrapper").append("<div id='ferroslider-navigation-links' class='btn-group'>");
            		
            		$("."+sliderClass).each(function(){
            			var linkTitle = (typeof($(this).attr("title")) == "undefined" || $.trim($(this).attr("title")) == "" )? $(this).attr("id") : $(this).attr("title");
            			var linkHref = $(this).attr("id");         		
            			
            			$("#ferroslider-navigation-links").append("<a id=\"navlink_"+linkHref+"\" class='btn' href=\"javascript:$.fn.ferroSlider.slideTo('"+linkHref+"');\">"+linkTitle+"</a>");
            			if(linkHref == _actualPage().replace("#","")){
            				$("#navlink_"+linkHref).addClass("actual");
            			}
            		});
            		if(opts.linksStyle == "column"){
            			$("#ferroslider-navigation-links a").addClass("column");
            		}
            		_positionLinks();
            	}
            }
            
            function _createMap(){
            	if(opts.createMap){
            		var dots = [];
            		var maxColumns = 0;
            		var maxRows = 0;
            		
            		$(".innerSlider > *").each(function(){
            			if(maxColumns < $(this).data("column")){
            				maxColumns = $(this).data("column");
            			}
            			if(maxRows < $(this).data("row")){
            				maxRows = $(this).data("row");
            			}
            			
            			dots.push({
            				empty : $(this).data("padding"),
            				href : $(this).attr("id"),
            				column : $(this).data("column"),
            				row : $(this).data("row")
            			});
            		});
            		$("#outerSliderWrapper").append("<div id='ferroslider-navigation-map'>");
            		$(dots).each(function(){
            			var dot = $("<a class='navigation-dot'></a>");
            			if(this.empty){
            				dot.addClass("empty");
            				dot.attr("href","javascript:void(0);");
            			}else{
            				dot.attr("href","javascript:$.fn.ferroSlider.slideTo('"+this.href+"');");
            				dot.attr("id","dot_"+this.href.replace("#",""));
            			}
            			if("#"+this.href == _actualPage()){
            				dot.addClass("actual");
            			}
            			$("#ferroslider-navigation-map").append(dot);
            		});
            		$("#ferroslider-navigation-map").width((maxColumns+1)*$(".navigation-dot").outerWidth(true));
            		$("#ferroslider-navigation-map").height((maxRows+1)*$(".navigation-dot").outerHeight(true));
            		
            		if(opts.tips && !isMobile){
            			$(".navigation-dot:not(.empty)").addClass("tooltip");
            			$(".navigation-dot:not(.empty)").addClass(opts.tipsPosition);
            			$(".navigation-dot:not(.empty)").each(function(){
            				var thisId = $(this).attr("id").split("_");
            				var tipTitle = (typeof($("#"+thisId[1]).attr("title")) != "undefined")?$("#"+thisId[1]).attr("title"):$("#"+thisId[1]).attr("id");
            				$(this).append("<span>"+tipTitle+"</span>");
            			});
            		}
            		
            		_positionMap();
            	}
            }
            
            function _createPlayer(){
            	if(opts.createPlayer){
            		$("#outerSliderWrapper").append("" +
            				"<div id='ferroslider-player' class='btn-group'>" +
            					"<a class='btn prev' href='javascript:$.fn.ferroSlider.slideToPrev();'><i class='icon-backward'></i></a>" +
            					"<a class='btn play' href='javascript:$.fn.ferroSlider.play();'><i class='icon-play'></i></a>" +
            					"<a class='btn pause' href='javascript:$.fn.ferroSlider.pause();'><i class='icon-pause'></i></a>" +
            					"<a class='btn next' href='javascript:$.fn.ferroSlider.slideToNext();'><i class='icon-forward'></i></a>" +
            				"</div>");
            		
            		if(opts.autoSlide){
            			$("#ferroslider-player .play").hide();
            			$("#ferroslider-player .pause").show();
            		}else{
            			$("#ferroslider-player .play").show();
            			$("#ferroslider-player .pause").hide();
            		}
            		_positionPlayer();            	
            		
            		/*if(opts.autoSlide){
            			$.fn.ferroSlider.play();
            		}*/
            	}
            }
            
            function _createSensibleAreas(){
            	if(opts.createSensibleAreas && !isMobile){
            		$("#outerSliderWrapper .sensible-area").remove();
            		$("#outerSliderWrapper").append("" +
            				"<div id='ferroslider-sensible-area-top' class='sensible-area'><i class=' icon-angle-up'></i></div>" +
            				"<div id='ferroslider-sensible-area-right' class='sensible-area'><i class=' icon-angle-right'></i></div>" +
            				"<div id='ferroslider-sensible-area-bottom' class='sensible-area'><i class=' icon-angle-down'></i></div>" +
            				"<div id='ferroslider-sensible-area-left' class='sensible-area'><i class=' icon-angle-left'></i></div>");
            		
            		$(".sensible-area i").each(function(){
            			$(this).css({
            				"line-height" : $(this).parent(".sensible-area").height()+"px"
            			});
            		});
            		
            		$(".sensible-area").unbind("mouseover");
            		$(".sensible-area").on("mouseover",function(){
                    	_showSensibleArea($(this),true);
                    });
            		
            		$(".sensible-area").unbind("mouseout");
                    $(".sensible-area").on("mouseout",function(){
                    	_showSensibleArea($(this),false);
                    });
                    $(".sensible-area").unbind("click");
                    $(".sensible-area").on("click",function(){
                    	if($(this).hasClass("fadeIn")){
                    		var actualPage = $(_actualPage());
                    		var saId = $(this).attr("id").split("-");
                    		if(saId[saId.length-1] == "top"){
                    			var nextPage = _getNextPageId(actualPage.data("row")-1,actualPage.data("column"));
                    		}else if(saId[saId.length-1] == "bottom" && _checkFromPosition(($(_actualPage()).data("row"))+1,$(_actualPage()).data("column"))){
                    			var nextPage = _getNextPageId(actualPage.data("row")+1,actualPage.data("column"));
                    		}else if(saId[saId.length-1] == "left" && _checkFromPosition($(_actualPage()).data("row"),($(_actualPage()).data("column"))-1)){
                    			var nextPage = _getNextPageId(actualPage.data("row"),actualPage.data("column")-1);
                    		}else if(saId[saId.length-1] == "right" && _checkFromPosition($(_actualPage()).data("row"),($(_actualPage()).data("column"))+1)){
                    			var nextPage = _getNextPageId(actualPage.data("row"),actualPage.data("column")+1);
                    		}
                    		_moveSlide(nextPage,opts.time);
                    	}
                    });

                    var nextPageId = _actualPage();
                    if(opts.createSensibleAreas){
                		if(!_checkFromPosition($(nextPageId).data("row")-1,$(nextPageId).data("column"))){
                			$("#ferroslider-sensible-area-top").css("z-index",-100);
                		}else{
                			$("#ferroslider-sensible-area-top").css("z-index",1);
                		}
                		
                		if(!_checkFromPosition($(nextPageId).data("row")+1,$(nextPageId).data("column"))){
                			$("#ferroslider-sensible-area-bottom").css("z-index",-100);
                		}else{
                			$("#ferroslider-sensible-area-bottom").css("z-index",1);
                		}
                		
                		if(!_checkFromPosition($(nextPageId).data("row"),$(nextPageId).data("column")-1)){
                			$("#ferroslider-sensible-area-left").css("z-index",-100);
                		}else{
                			$("#ferroslider-sensible-area-left").css("z-index",1);
                		}
                		
                		if(!_checkFromPosition($(nextPageId).data("row"),$(nextPageId).data("column")+1)){
                			$("#ferroslider-sensible-area-right").css("z-index",-100);
                		}else{
                			$("#ferroslider-sensible-area-right").css("z-index",1);
                		}
                	}
            	}
            }
            
            function _createTimeBar(){
            	if(opts.createTimeBar){
            		$("#outerSliderWrapper").append("" +
            				"<div id='ferroslider-timebar-out'>" +
            				"	<div id='ferroslider-timebar-in'></div>" +
            				"</div>");
            	}
            	
            	_positionTimeBar();
            }
            
            function _destroyEvent(eventName){
		 		$("#outerSlider").unbind(eventName);
		 	}
            
            function _getNextPageId(row,column){
            	var found = false;
            	var toReturn = _actualPage();
            	$("."+sliderClass).each(function(){
            		if($(this).data("row") == row && $(this).data("column") == column && !found){
            			found = true;
            			toReturn = "#"+$(this).attr("id"); 
            		}
            	});
            	
            	return toReturn;
            }
             
            function _init(){
            	_computeEnvDimentions();
            	
            	$("."+sliderClass).each(function(){
            		$(this).wrap("<div class='innerSlider'  id='innerSlider"+(internalCounter++)+"'/>");
            	});
            	
            	$(".innerSlider").wrapAll("<div id='outerSlider'/>");
            	$("#outerSlider").wrap("<div id='outerSliderWrapper'>");
            	if(opts.container != 'none'){
            		$(opts.container).append($("#outerSliderWrapper"));
            	}
            	if(opts.ajaxLoading){
            		$("#outerSliderWrapper").append("<div id='ferroslider-ajaxLoader'><i class='icon-spinner icon-spin'></i></div>");
            	}
            	_parseElements();
            	_setSlidesDimentions();
            	if($.trim(location.hash) != ""){
            		_moveSlide(_actualPage(),0);
            	}else{
	            	if(matrixFirst != null){
	            		_moveSlide("#"+matrixFirst,0);
	            	}else{
	            		_moveSlide("#"+$($("."+sliderClass)[0]).attr("id"),0);
	            	}
            	}
            	_createTimeBar();
            	_createMap();
            	_createLinks();
            	_createPlayer();
            	_createSensibleAreas();
            	if(opts.autoSlide){
        			$.fn.ferroSlider.play();
        		}
            }
            
            function _manageResize(){
            	if(!isMobile){
	            	_computeEnvDimentions();
	            	_setSlidesDimentions();
	            	_moveSlide(_actualPage(),0);
	            	_positionMap();
	            	_positionLinks();
	            	_createSensibleAreas();
	            	_positionPlayer();
	            	if(opts.imeBarInsidePlayer){
	            		_positionTimeBar();
	            	}
            	}
            }
            
            function _manageOrientationChange(){
            	if(isMobile){
	            	_computeEnvDimentions();
	            	_setSlidesDimentions();
	            	_moveSlide(_actualPage(),0);
	            	_positionMap();
	            	_positionLinks();
	            	_positionPlayer();
	            	if(opts.imeBarInsidePlayer){
	            		_positionTimeBar();
	            	}
	            	//forza refresh
	            	window.scrollTo(0,0);
            	}
            }
            
            function _moveSlide(nextPageId,moveTime){
            	var startPage = _actualPage();
            	var endPage = nextPageId;
            	
            	if(opts.ajaxLoading && !$(nextPageId).data("ajaxLoaded")){
            		$("#ferroslider-ajaxLoader").addClass("bring-to-front");
            		$(nextPageId).empty();
            	}
            	if(opts.createMap){
            		$(".navigation-dot").removeClass("actual");
            		$("#dot_"+nextPageId.replace("#","")).addClass("actual");
            	}
            	if(opts.createLinks){
            		$("#ferroslider-navigation-links a").removeClass("actual");
            		$("#navlink_"+nextPageId.replace("#","")).addClass("actual");
            	}
            	
            	var moveDirection = opts.axis;
            	
            	if(typeof($(_actualPage()).data("moveDirection")) != "undefined"){
            		moveDirection = $(_actualPage()).data("moveDirection");
            	}
            	
            	if(endPage != startPage){
            		_destroyEvent("startslide");
                	_triggerEvent("startslide",startPage,endPage);
            	}
            	
            	if(moveDirection == null){
	            	$("#outerSlider").stop().transition({
	            		x : -$(nextPageId).data("offsetX"),
	            		y : -$(nextPageId).data("offsetY") 
	            	},moveTime,opts.easing,function(){
	            		if(nextPageId != startPage){
	                		_destroyEvent("endslide");
	                    	_triggerEvent("endslide",startPage,endPage);
	                	}
	            	});
            	}else if(moveDirection == "xy"){
            		if($(_actualPage()).data("column") == $(nextPageId).data("column")){
            			$("#outerSlider").stop().transition({
    	            		x : -$(nextPageId).data("offsetX"),
    	            		y : -$(nextPageId).data("offsetY") 
    	            	},moveTime,opts.easing,function(){
    	            		if(nextPageId != startPage){
    	                		_destroyEvent("endslide");
    	                    	_triggerEvent("endslide",startPage,endPage);
    	                	}
    	            	});
            		}else{
            			$("#outerSlider").stop().transition({
    	            		x : -$(nextPageId).data("offsetX") 
    	            	},(moveTime/2),opts.easing,function(){
    	            		$("#outerSlider").stop().transition({
    		            		y : -$(nextPageId).data("offsetY") 
    		            	},(moveTime/2),opts.easing,function(){
    		            		if(nextPageId != startPage){
    		                		_destroyEvent("endslide");
    		                    	_triggerEvent("endslide",startPage,endPage);
    		                	}
    		            	});
    	            	});
            		}
            	}else{
            		if($(_actualPage()).data("row") == $(nextPageId).data("row")){
            			$("#outerSlider").stop().transition({
    	            		x : -$(nextPageId).data("offsetX"),
    	            		y : -$(nextPageId).data("offsetY") 
    	            	},moveTime,opts.easing,function(){
    	            		if(nextPageId != startPage){
    	                		_destroyEvent("endslide");
    	                    	_triggerEvent("endslide",startPage,endPage);
    	                	}
    	            	});
            		}else{
	            		$("#outerSlider").stop().transition({
		            		y : -$(nextPageId).data("offsetY") 
		            	},(moveTime/2),opts.easing,function(){
		            		$("#outerSlider").stop().transition({
			            		x : -$(nextPageId).data("offsetX") 
			            	},(moveTime/2),opts.easing,function(){
			            		if(nextPageId != startPage){
			                		_destroyEvent("endslide");
			                    	_triggerEvent("endslide",startPage,endPage);
			                	}
			            	});
		            	});
            		}
            	}
            	
            	location.hash = "#!"+nextPageId.replace("#","");
            	
            	//controllo se nascondere le aree sensibili
            	if(opts.createSensibleAreas){
            		if(!_checkFromPosition($(nextPageId).data("row")-1,$(nextPageId).data("column"))){
            			$("#ferroslider-sensible-area-top").css("z-index",-100);
            		}else{
            			$("#ferroslider-sensible-area-top").css("z-index",1);
            		}
            		
            		if(!_checkFromPosition($(nextPageId).data("row")+1,$(nextPageId).data("column"))){
            			$("#ferroslider-sensible-area-bottom").css("z-index",-100);
            		}else{
            			$("#ferroslider-sensible-area-bottom").css("z-index",1);
            		}
            		
            		if(!_checkFromPosition($(nextPageId).data("row"),$(nextPageId).data("column")-1)){
            			$("#ferroslider-sensible-area-left").css("z-index",-100);
            		}else{
            			$("#ferroslider-sensible-area-left").css("z-index",1);
            		}
            		
            		if(!_checkFromPosition($(nextPageId).data("row"),$(nextPageId).data("column")+1)){
            			$("#ferroslider-sensible-area-right").css("z-index",-100);
            		}else{
            			$("#ferroslider-sensible-area-right").css("z-index",1);
            		}
            	}
            	
            	if((opts.ajaxLoading || $(nextPageId).data("ajaxLoading")) && !$(nextPageId).data("ajaxLoaded")){
            		$.ajax({
            			type: "POST",
            			url: opts.ajaxScript,
            			data: "id="+nextPageId.replace("#",""),
            			success : function(data){
            				$(nextPageId).data("ajaxLoaded",true);
            				$(nextPageId).html("<div id='ajax-loaded-content-"+(++internalCounter)+"'>"+data+"</div>");
            				
            				if(containerHeight < $("#ajax-loaded-content-"+internalCounter).outerHeight(true)){
            					$(nextPageId).css("height",$("#ajax-loaded-content-"+internalCounter).outerHeight(true)+"px");
            				}
            				$("#ferroslider-ajaxLoader").removeClass("bring-to-front");
            			}
            		});
            	}
            	
            	if(isMobile){
            		//forza refresh dello schermo
            		 window.scrollTo(0,0);
            	}
            }
            
            function _onkeydown(e){
            	if(!opts.preventArrowNavigation){
	            	if($("*:focus").is("textarea, input, option, select")){}
			 		else{
			 			var go = false;
			 			var keyCode = e.keyCode || e.which;
	    		 	    var arrow = {left: 37, up: 38, right: 39, down: 40 };
	    		 	    var actualPage = $(_actualPage());
	    		 	    switch (keyCode) {
					 		case arrow.left:
					 			e.preventDefault();
					 			go = true;
					 			var nextPage = _getNextPageId(actualPage.data("row"),actualPage.data("column")-1);
					 			break;
					 	    case arrow.up:
					 	    	e.preventDefault();
					 	    	go = true;
					 	    	var nextPage = _getNextPageId(actualPage.data("row")-1,actualPage.data("column"));
					 	    	break;
					 	    case arrow.right:
					 	    	e.preventDefault();
					 	    	go = true;
					 	    	var nextPage = _getNextPageId(actualPage.data("row"),actualPage.data("column")+1);
					 	    	break;
					 	    case arrow.down:
					 	    	e.preventDefault();
					 	    	go = true;
					 	    	var nextPage = _getNextPageId(actualPage.data("row")+1,actualPage.data("column"));
					 	    	break;
	    		 	    }
	    		 	    if(go){
	    		 	    	_moveSlide(nextPage,opts.time);
	    		 	    }
			 		}
            	}
            }
            
            function _onmousedown(e){
            	slide = true;
            	startSwipeTime = new Date().getTime();
            	constrainSwipeX = false;
            	constrainSwipeY = false;
            	var elementParent = $(e.target).closest(".innerSlider").get(0);
            	
            	if($.inArray($(e.target).get(0).nodeName.toLowerCase(),stopSlidingTags) > -1){
            		slide = false;
            	}else{
	            	if(!isMobile){
		            	e.preventDefault();
		            	try{
		            		slideStartX = e.clientX+elementParent.scrollLeft;
		            		slideInitialX = e.clientX+elementParent.scrollLeft;
		            		slideStartY = e.clientY+elementParent.scrollTop;
		            		slideInitialY = e.clientY+elementParent.scrollTop;
		            	}catch(err){}
	            	}else{
	            		try{
		            		slideStartX = e.touches[0].pageX+elementParent.scrollLeft;
			            	slideInitialX = e.touches[0].pageX+elementParent.scrollLeft;
			            	slideStartY = e.touches[0].pageY+elementParent.scrollTop;
			            	slideInitialY = e.touches[0].pageY+elementParent.scrollTop;
	            		}catch(err){}
	            	}
            	}
            }
            
            function _onmousemove(e){
            	var goMove = false;
            	var elementParent = $(e.target).closest(".innerSlider").get(0);
            	var translate = $("#outerSlider").css('translate').split(",");
            	try{
            		var st = elementParent.scrollTop;
                	var sl = elementParent.scrollLeft;
            	}catch(err){}
            	
            	if(!isMobile){
        			slideEndX = e.clientX+sl;
        			slideEndY = e.clientY+st;
        		}else{
        			slideEndX = e.touches[0].pageX+sl;
        			slideEndY = e.touches[0].pageY+st;
        		}
            	
            	if(((slideEndY-slideInitialY) < 0) 
            			&& (elementParent.scrollHeight - st == $(elementParent).outerHeight(true))){
                	goMove = true;
                }else if((slideEndY-slideInitialY) >= 0 && st == 0){
                	//up
                	goMove = true;
                }
        
            	if(goMove){
            		e.preventDefault();
            		if(slide){
            			$(e.target).addClass("dragging");
                		var translate = $("#outerSlider").css('translate').split(",");
                		
                    	var shiftX = parseInt(translate[0].replace("px",""))+(slideEndX-slideStartX);
                    	var shiftY = parseInt(translate[1].replace("px",""))+(slideEndY-slideStartY);
                    	
                    	if(!constrainSwipeX && !constrainSwipeY){
        	            	if(Math.abs((slideEndX-slideStartX)) >= Math.abs((slideEndY-slideStartY))){
        	            		constrainSwipeX = true;
        	            	}else{
        	            		constrainSwipeY = true;
        	            	}
                    	}
                    	
    	            	if(constrainSwipeX){
    	            		if(shiftX <= 0 && shiftX >= -(outerSliderWidth-containerWidth)){
    		            		$("#outerSlider").stop().transition({
    		            			x : parseInt(translate[0].replace("px",""))+(slideEndX-slideStartX)
    		            		},0,opts.easing);
    	            		}
    	            	}else if(constrainSwipeY){
    	            		if(shiftY <= 0 && shiftY >= -(outerSliderHeight-containerHeight)){
    	            			//elementParent.scrollTop = st;
    	            			$("#outerSlider").stop().transition({
    	            				y : parseInt(translate[1].replace("px",""))+(slideEndY-slideStartY)
    	            			},0,opts.easing);
    	            		}
    	            	}
    	            	slideStartX = slideEndX;
    		            slideStartY = slideEndY;
    		            
                	}
            	}
            }
            
            function _onmouseup(e){
            	e.preventDefault();
            	endSwipeTime = new Date().getTime();
            	
            	var actualPage = _actualPage();
            	var nextPageId = actualPage;
            	
            	if(endSwipeTime - startSwipeTime >= opts.swipeTime){
            		if(constrainSwipeX && Math.abs(slideEndX-slideInitialX) >= opts.swipeTreshold){
	            		//swipe orizzontale
            			if((slideEndX-slideInitialX) >= 0){
	            			//left
	            			nextPageId = _getNextPageId($(actualPage).data("row"),$(actualPage).data("column")-1);
	            		}else{
	            			//right
	            			nextPageId = _getNextPageId($(actualPage).data("row"),$(actualPage).data("column")+1);
	            		}
	            	}else if(constrainSwipeY  && Math.abs(slideEndY-slideInitialY) >= opts.swipeTreshold){
	            		//swipe verticale
	            		if((slideEndY-slideInitialY) >= 0){
	            			//up
	            			nextPageId = _getNextPageId($(actualPage).data("row")-1,$(actualPage).data("column"));
	            		}else{
	            			//down
	            			nextPageId = _getNextPageId($(actualPage).data("row")+1,$(actualPage).data("column"));
	            		}
	            	}
            	}
            	_moveSlide(nextPageId,opts.time);
            	$("*").removeClass("dragging");
            	
            	slide = false;
            	constrainSwipeX = false;
            	constrainSwipeY = false;
            }
            
            function _positionLinks(){
            	var linksCoords = opts.linksPosition.split("_");
            	if(linksCoords.length != 2){
            		linksCoords[0] = "bottom";
            		linksCoords[1] = "center";
            	}
            	
            	if(linksCoords[0] == "bottom"){
            		$("#ferroslider-navigation-links").css("bottom",0);
            	}else if(linksCoords[0] == "top"){
            		$("#ferroslider-navigation-links").css("top",0);
            	}else if(linksCoords[0] == "center"){
            		var absTop = (containerHeight/2)-($("#ferroslider-navigation-links").outerHeight(true)/2);
            		$("#ferroslider-navigation-links").css("top",((absTop*100)/containerHeight)+"%");
            	}else if(linksCoords[0].indexOf("px") > -1){
            		$("#ferroslider-navigation-links").css("top",linksCoords[0]);
            	}else if(linksCoords[0].indexOf("%") > -1){
            		$("#ferroslider-navigation-links").css("top",linksCoords[0]);
            	}else{
            		$("#ferroslider-navigation-links").css("bottom",0);
            	}
            	
            	if(linksCoords[1] == "right"){
            		$("#ferroslider-navigation-links").css("right",0);
            	}else if(linksCoords[1] == "left"){
            		$("#ferroslider-navigation-links").css("left",0);
            	}else if(linksCoords[1] == "center"){
            		var absLeft = (containerWidth/2)-($("#ferroslider-navigation-links").outerWidth(true)/2);
            		$("#ferroslider-navigation-links").css("left",((absLeft*100)/containerWidth)+"%");
            	}else if(linksCoords[1].indexOf("px") > -1){
            		$("#ferroslider-navigation-links").css("left",linksCoords[1]);
            	}else if(linksCoords[1].indexOf("%") > -1){
            		$("#ferroslider-navigation-links").css("left",linksCoords[1]);
            	}else{
            		var absLeft = (containerWidth/2)-($("#ferroslider-navigation-links").outerWidth(true)/2);
            		$("#ferroslider-navigation-links").css("left",((absLeft*100)/containerWidth)+"%");
            	}
            }
            
            function _positionMap(){
            	var mapCoords = opts.mapPosition.split("_");
            	if(mapCoords.length != 2){
            		mapCoords[0] = "bottom";
            		mapCoords[1] = "right";
            	}
            	
            	if(mapCoords[0] == "bottom"){
            		$("#ferroslider-navigation-map").css("bottom",0);
            	}else if(mapCoords[0] == "top"){
            		$("#ferroslider-navigation-map").css("top",0);
            	}else if(mapCoords[0] == "center"){
            		var absTop = (containerHeight/2)-($("#ferroslider-navigation-map").outerHeight(true)/2);
            		$("#ferroslider-navigation-map").css("top",((absTop*100)/containerHeight)+"%");
            	}else if(mapCoords[0].indexOf("px") > -1){
            		$("#ferroslider-navigation-map").css("top",mapCoords[0]);
            	}else if(mapCoords[0].indexOf("%") > -1){
            		$("#ferroslider-navigation-map").css("top",mapCoords[0]);
            	}else{
            		$("#ferroslider-navigation-map").css("bottom",0);
            	}
            	
            	if(mapCoords[1] == "right"){
            		$("#ferroslider-navigation-map").css("right",0);
            	}else if(mapCoords[1] == "left"){
            		$("#ferroslider-navigation-map").css("left",0);
            	}else if(mapCoords[1] == "center"){
            		var absLeft = (containerWidth/2)-($("#ferroslider-navigation-map").outerWidth(true)/2);
            		$("#ferroslider-navigation-map").css("left",((absLeft*100)/containerWidth)+"%");
            	}else if(mapCoords[1].indexOf("px") > -1){
            		$("#ferroslider-navigation-map").css("left",mapCoords[1]);
            	}else if(mapCoords[1].indexOf("%") > -1){
            		$("#ferroslider-navigation-map").css("left",mapCoords[1]);
            	}else{
            		$("#ferroslider-navigation-map").css("right",0);
            	}
            }
            
            function _positionPlayer(){
            	var playerCoords = opts.playerPosition.split("_");
            	if(playerCoords.length != 2){
            		playerCoords[0] = "bottom";
            		playerCoords[1] = "center";
            	}
            	
            	if(playerCoords[0] == "bottom"){
            		$("#ferroslider-player").css("bottom",0);
            	}else if(playerCoords[0] == "top"){
            		$("#ferroslider-player").css("top",0);
            	}else if(playerCoords[0] == "center"){
            		var absTop = (containerHeight/2)-($("#ferroslider-player").outerHeight(true)/2);
            		$("#ferroslider-player").css("top",((absTop*100)/containerHeight)+"%");
            	}else if(playerCoords[0].indexOf("px") > -1){
            		$("#ferroslider-player").css("top",playerCoords[0]);
            	}else if(playerCoords[0].indexOf("%") > -1){
            		$("#ferroslider-player").css("top",playerCoords[0]);
            	}else{
            		$("#ferroslider-player").css("bottom",0);
            	}
            	
            	if(playerCoords[1] == "right"){
            		$("#ferroslider-player").css("right",0);
            	}else if(playerCoords[1] == "left"){
            		$("#ferroslider-player").css("left",0);
            	}else if(playerCoords[1] == "center"){
            		var absLeft = (containerWidth/2)-($("#ferroslider-player").outerWidth(true)/2);
            		$("#ferroslider-player").css("left",((absLeft*100)/containerWidth)+"%");
            	}else if(playerCoords[1].indexOf("px") > -1){
            		$("#ferroslider-player").css("left",playerCoords[1]);
            	}else if(playerCoords[1].indexOf("%") > -1){
            		$("#ferroslider-player").css("left",playerCoords[1]);
            	}else{
            		var absLeft = (containerWidth/2)-($("#ferroslider-player").outerWidth(true)/2);
            		$("#ferroslider-player").css("left",((absLeft*100)/containerWidth)+"%");
            	}
            	
            	if(opts.createTimeBar && opts.timeBarInsidePlayer){
            		if(opts.timeBarPosition == "bottom"){
            			$("#ferroslider-player").append($("#ferroslider-timebar-out"));
            			$("#ferroslider-player").css("margin-bottom","7px");
            		}else{
            			$("#ferroslider-player").prepend($("#ferroslider-timebar-out"));
            			$("#ferroslider-player").css("margin-top","7px");
            		}
            	}
            }
            
            function _positionTimeBar(){
            	
            	var timebarCoords = opts.timeBarPosition.split("_");
            	if(timebarCoords.length != 2){
            		timebarCoords[0] = "bottom";
            		timebarCoords[1] = "center";
            	}
            	
            	if(opts.timeBarPosition == "bottom"){
            		$("#ferroslider-timebar-out").css("bottom",0);
            	}else{
            		$("#ferroslider-timebar-out").css("top",0);
            	}
            	
            	var absLeft = (containerWidth/2)-($("#ferroslider-timebar-out").outerWidth(true)/2);
        		$("#ferroslider-timebar-out").css("left",((absLeft*100)/containerWidth)+"%");
        		$("#ferroslider-timebar-in").width(0);
            }
            
            function _parseElements(){
            	if(typeof(opts.displace) == "object"){
	            	//inserisco gli elementi nella matrice dove ce n'e' bisogno
	        		var matrixCounter = 0;
	        		//righe
	        		for(var i=0;i<matrixRows;i++){
	        			//colonne
	        			for(var y=0;y<matrixColumns;y++){
	        				var cell = opts.displace[i][y];
	        				if(cell.full == 0){
	        					$("#outerSlider").append("<div class='innerSlider' id='innerSlider"+(internalCounter++)+"'><div class='slider-matrix-pad' id='ferroslider-internal-"+internalCounter+"'></div></div>");
	        					$("#ferroslider-internal-"+internalCounter).data("row",i);
	        					$("#ferroslider-internal-"+internalCounter).data("column",y);
	        					$("#ferroslider-internal-"+internalCounter).data("offsetX",y * containerWidth);
	        					$("#ferroslider-internal-"+internalCounter).data("offsetY",i * containerHeight);
	        					$("#ferroslider-internal-"+internalCounter).data("padding",true);
	        					internalCounter++;
	        				}else{
	        					if(cell.first){
	        						matrixFirst = $($("."+sliderClass)[matrixCounter]).attr("id");
	        					}
	        					
	        					if(typeof(cell.moveDirection) != "undefined"){
	        						$($("."+sliderClass)[matrixCounter]).data("moveDirection",cell.moveDirection);
	        					}else{
	        						$($("."+sliderClass)[matrixCounter]).data("moveDirection",opts.axis);
	        					}
	        					
	        					$($("."+sliderClass)[matrixCounter]).data("row",i);
	        					$($("."+sliderClass)[matrixCounter]).data("column",y);
	        					$("#outerSlider").append($($("."+sliderClass)[matrixCounter]).parent());
	        				}
	        			}
	        		}
	        		if(matrixFirst == null){
	        			matrixFirst = $($("."+sliderClass)[0]).attr("id");
	        		}
        		}else{
        			if(opts.displace == "row"){
        				$("."+sliderClass).each(function(index,value){
        					$(this).data("row",0);
        					$(this).data("column",index);
        				});
        			}else{
        				$("."+sliderClass).each(function(index,value){
        					$(this).data("row",index);
        					$(this).data("column",0);
        				});
        			}
        		}
            }
            
            function _refreshTimeBar(time){
            	if(opts.createTimeBar){
					$("#ferroslider-timebar-in").stop();
			 		if(playSlide){
			 			$("#ferroslider-timebar-in").animate({
			 				width:"100%"
			 			},time,'linear',function(){
			 				$.fn.ferroSlider.slideToNext();
			 			});
			 		}
		 		}else{
		 			clearTimeout(t);
		 			t = setTimeout(function(){
		 				$.fn.ferroSlider.slideToNext();
		 			},time);
		 		}
		 	}
            
            function _setSlidesDimentions(){
            	$(".slider-matrix-pad").css({
            		width : containerWidth,
            		height : containerHeight,
            		display: "block",
            		float:"left"
            	});
            	
            	$(".innerSlider").css({
            		width : containerWidth,
            		height : containerHeight,
            		float: "left",
            		display: "block",
            		"-moz-user-select" : "none",
            		"-webkit-user-select" : "none",
            		"user-select" : "none",
            		"overflow" : "auto"
            	});
            	
            	$("."+sliderClass).css({
            		float: "left",
            		display: "block",
            		"-moz-user-select" : "none",
            		"-webkit-user-select" : "none",
            		"user-select" : "none"
            	});
            	
            	$("#outerSliderWrapper").css({
            		width : containerWidth,
            		height : containerHeight,
            		background:"rgba(0,0,0,0.3)",
            		overflow: "hidden",
            		display:"block",
            		position:"absolute"
            	});
            	
            	$("#ferroslider-ajaxLoader i").css({
            		marginTop:(containerHeight/2)-($("#ferroslider-ajaxLoader i").height()/2)
            	});
            	
            	$("#outerSlider").css({
            		width : outerSliderWidth,
            		height : outerSliderHeight,
            		display: "block",
            		overflow: "hidden",
            		background:"rgba(0,0,0,0.3)",
            		position: "absolute"
            	});
            	
            	/*salvo i dati per ogni elemento*/
            	$("."+sliderClass).each(function(){
            		$(this).data("offsetX",$(this).data("column") * containerWidth);
            		$(this).data("offsetY",$(this).data("row") * containerHeight);
            		$(this).data("padding",false);
            		$(this).data("ajaxLoading",false);
            		
            		if(typeof($(this).attr("id")) == "undefined"){
            			$(this).attr("id","ferroslider-internal-"+internalCounter++);
            		}
            		
            		if(opts.ajaxLoading){
            			$(this).data("ajaxLoading",true);
            		}
            		
            		if(typeof($(this).data("ajaxLoaded")) == "undefined"){
            			$(this).data("ajaxLoaded",false);
            		}
            		
            		if(typeof($(this).attr("data-bgimage")) != "undefined"){
            			$(this).css({
            				"background-image" : "url("+$(this).attr("data-bgimage")+")",
            				"background-position" : "center center",
            				"background-repeat" : "no-repeat",
            				"-webkit-background-size": "cover",
            				"-moz-background-size": "cover",
            			  	"-o-background-size": "cover",
            			  	"background-size": "cover"
            			});
            		}
            	});
            }
            
            function _showSensibleArea(sensibleArea,show){
            	if(show){
            		var actualPage = $(_actualPage());
            		var saId = sensibleArea.attr("id").split("-");
            		if(saId[saId.length-1] == "top" && _checkFromPosition(($(_actualPage()).data("row"))-1,$(_actualPage()).data("column"))){
            			sensibleArea.addClass("fadeIn");
            		}else if(saId[saId.length-1] == "bottom" && _checkFromPosition(($(_actualPage()).data("row"))+1,$(_actualPage()).data("column"))){
            			sensibleArea.addClass("fadeIn");
            		}else if(saId[saId.length-1] == "left" && _checkFromPosition($(_actualPage()).data("row"),($(_actualPage()).data("column"))-1)){
            			sensibleArea.addClass("fadeIn");
            		}else if(saId[saId.length-1] == "right" && _checkFromPosition($(_actualPage()).data("row"),($(_actualPage()).data("column"))+1)){
            			sensibleArea.addClass("fadeIn");
            		}
            	}else{
            		sensibleArea.removeClass("fadeIn");
            	}
            }
            
            function _triggerEvent(eventName,toStart,toMove){
            	var toStartObj = {
            			id			: toStart,
            			row			: $(toStart).data("row"),
            			column		: $(toStart).data("column"),
            			offsetX		: $(toStart).data("offsetX"),
            			offsetY		: $(toStart).data("offsetY"),
            			ajaxLoading	: $(toStart).data("ajaxLoading"),
            			ajaxLoaded	: $(toStart).data("ajaxLoaded"),
            			axis		: (typeof($(toStart).data("moveDirection")) != "undefined") ? $(toStart).data("moveDirection") : opts.axis,
            			first 		: ($("."+sliderClass).get(0).id == toStart.replace("#","")) ? true:false,
            			last 		: ($("."+sliderClass).get(($("."+sliderClass).length)-1).id == toStart.replace("#","")) ? true:false
            	}
            	
            	var toMoveObj = {
            			id			: toMove,
            			row			: $(toMove).data("row"),
            			column		: $(toMove).data("column"),
            			offsetX		: $(toMove).data("offsetX"),
            			offsetY		: $(toMove).data("offsetY"),
            			ajaxLoading	: $(toMove).data("ajaxLoading"),
            			ajaxLoaded	: $(toMove).data("ajaxLoaded"),
            			axis		: (typeof($(toMove).data("moveDirection")) != "undefined") ? $(toMove).data("moveDirection") : opts.axis,
            			first 		: ($("."+sliderClass).get(0).id == toMove.replace("#","")) ? true:false,
            			last 		: ($("."+sliderClass).get(($("."+sliderClass).length)-1).id == toMove.replace("#","")) ? true:false
            	}
            	
    			$.event.moveTo = toMoveObj;
    			$.event.moveFrom = toStartObj;
    		 	$(document).trigger(eventName);
		 	}
            /*FINE FUNZIONI INTERNE*/
            
            /*ALTRE FUNZIONI*/
            function isMobile(){
				if(( navigator.userAgent.toLowerCase().indexOf("android") >-1)
						|| ( navigator.userAgent.toLowerCase().indexOf("blackberry9500")>-1) || ( navigator.userAgent.toLowerCase().indexOf("blackberry9530")>-1) || ( navigator.userAgent.toLowerCase().indexOf("cupcake") >-1) || ( navigator.userAgent.toLowerCase().indexOf("dream") >-1) || ( navigator.userAgent.toLowerCase().indexOf("incognito") >-1) || ( navigator.userAgent.toLowerCase().indexOf("iphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ipod")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("ipad")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("mini")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("webos") >-1) || ( navigator.userAgent.toLowerCase().indexOf("webmate")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("2.0 mmp") >-1) || ( navigator.userAgent.toLowerCase().indexOf("240×320") >-1) || ( navigator.userAgent.toLowerCase().indexOf("asus") >-1) || ( navigator.userAgent.toLowerCase().indexOf("au-mic")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("alcatel") >-1) || ( navigator.userAgent.toLowerCase().indexOf("amoi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("audiovox") >-1) || ( navigator.userAgent.toLowerCase().indexOf("avantgo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("benq") >-1) || ( navigator.userAgent.toLowerCase().indexOf("bird") >-1) || ( navigator.userAgent.toLowerCase().indexOf("blackberry") >-1) || ( navigator.userAgent.toLowerCase().indexOf("blazer") >-1) || ( navigator.userAgent.toLowerCase().indexOf("cdm") >-1) || ( navigator.userAgent.toLowerCase().indexOf("cellphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ddipocket") >-1) || ( navigator.userAgent.toLowerCase().indexOf("danger") >-1) || ( navigator.userAgent.toLowerCase().indexOf("docomo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("elaine/3.0") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ericsson") >-1) || ( navigator.userAgent.toLowerCase().indexOf("eudoraweb") >-1) || ( navigator.userAgent.toLowerCase().indexOf("fly") >-1) || ( navigator.userAgent.toLowerCase().indexOf("hp.ipaq")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("haier") >-1) || ( navigator.userAgent.toLowerCase().indexOf("huawei") >-1) || ( navigator.userAgent.toLowerCase().indexOf("iemobile") >-1) || ( navigator.userAgent.toLowerCase().indexOf("j-phone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kddi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("konka") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kwc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("kyocera/wx310k") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lg") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lg/u990") >-1) || ( navigator.userAgent.toLowerCase().indexOf("lenovo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("midp-2.0") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mmef20") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mot-v") >-1) || ( navigator.userAgent.toLowerCase().indexOf("mobilephone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("motorola") >-1) || ( navigator.userAgent.toLowerCase().indexOf("newgen") >-1) || ( navigator.userAgent.toLowerCase().indexOf("netfront") >-1) || ( navigator.userAgent.toLowerCase().indexOf("newt") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nintendo wii") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nitro") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nokia") >-1) || ( navigator.userAgent.toLowerCase().indexOf("novarra") >-1) || ( navigator.userAgent.toLowerCase().indexOf("o2") >-1) || ( navigator.userAgent.toLowerCase().indexOf("opera mini") >-1) || ( navigator.userAgent.toLowerCase().indexOf("opera.mobi") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pantech") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pdxgw") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pg") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ppc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("pt") >-1) || ( navigator.userAgent.toLowerCase().indexOf("palm") >-1) || ( navigator.userAgent.toLowerCase().indexOf("panasonic") >-1) || ( navigator.userAgent.toLowerCase().indexOf("philips") >-1) || ( navigator.userAgent.toLowerCase().indexOf("playstation portable") >-1) || ( navigator.userAgent.toLowerCase().indexOf("proxinet") >-1) || ( navigator.userAgent.toLowerCase().indexOf("proxinet") >-1) || ( navigator.userAgent.toLowerCase().indexOf("qtek") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sch") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sec") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sgh") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sharp-tq-gx10") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sie") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sph") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sagem") >-1) || ( navigator.userAgent.toLowerCase().indexOf("samsung") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sanyo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sendo") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sharp")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("small") >-1) || ( navigator.userAgent.toLowerCase().indexOf("smartphone") >-1) || ( navigator.userAgent.toLowerCase().indexOf("softbank") >-1) || ( navigator.userAgent.toLowerCase().indexOf("sonyericsson") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbian") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbian os") >-1) || ( navigator.userAgent.toLowerCase().indexOf("symbianos") >-1) || ( navigator.userAgent.toLowerCase().indexOf("ts21i-10") >-1) || ( navigator.userAgent.toLowerCase().indexOf("toshiba") >-1) || ( navigator.userAgent.toLowerCase().indexOf("treo")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("up.browser") >-1) || ( navigator.userAgent.toLowerCase().indexOf("up.link") >-1) || ( navigator.userAgent.toLowerCase().indexOf("uts") >-1) || ( navigator.userAgent.toLowerCase().indexOf("vertu") >-1) || ( navigator.userAgent.toLowerCase().indexOf("willcome") >-1) || ( navigator.userAgent.toLowerCase().indexOf("winwap") >-1) || ( navigator.userAgent.toLowerCase().indexOf("windows ce") >-1) || ( navigator.userAgent.toLowerCase().indexOf("windows.ce") >-1) || ( navigator.userAgent.toLowerCase().indexOf("xda") >-1) || ( navigator.userAgent.toLowerCase().indexOf("zte") >-1) || ( navigator.userAgent.toLowerCase().indexOf("dopod") >-1) || ( navigator.userAgent.toLowerCase().indexOf("hiptop")	>-1) || ( navigator.userAgent.toLowerCase().indexOf("htc") >-1) || ( navigator.userAgent.toLowerCase().indexOf("i-mobile") >-1) || ( navigator.userAgent.toLowerCase().indexOf("nokia") >-1) || ( navigator.userAgent.toLowerCase().indexOf("portalmmm") >-1)){
					
					if(navigator.platform.toLowerCase().indexOf("win32") == -1 && navigator.platform.toLowerCase().indexOf("win64") == -1){
						return true;
					}else{
						return false;
					}
				}else{
					return false;
				}
			}
            
            
        }
    };

    $.fn.ferroSlider = function(arguments) {
        return methods.ferroSliderCreate.call(this,arguments);
    };
})( jQuery );