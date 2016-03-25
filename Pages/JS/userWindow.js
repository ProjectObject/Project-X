var currentWindow;
var showNewEvents = true;
var animationTime = 600;
var height;
var width;

$(document).ready(function() {
	setPicture('.user-picture');
	currentWindow = $(".user-information");
	hide();
	$(".search").css("top", "-300px");
	$(".create").css("top", "-300px");
	$('#image-up').click( function(){
		window.scroll(0 ,0); 
	});
	$(window).scroll(function(){
		if ($(document).scrollTop() > 0 ) {
			$('#up').fadeIn(animationTime/2);
		} else {
			$('#up').fadeOut(animationTime/2);
		}
	});
});

var showUserInformation = function() {
	window.scroll(0, 0);
	if(!currentWindow.hasClass("user-information")) {
		$(".create-event-button").hide();
		$(".find-event-button").hide();
		$(".event-buttons").fadeIn(animationTime);
		$.when(currentWindow.animate({
			'top' : '-300px'
		})).done(function() {
			currentWindow.css("display", "none");
		});
		$(".search-result").hide();
		$(".creation").hide();
		$(".event-history").fadeIn(animationTime);
	}
}

var showSearchWindow = function() {
	currentWindow = $(".search");
	currentWindow.css("display" , "block");
	currentWindow.animate({
		'top' : '0px',
	}, animationTime)
	$(".event-buttons").hide();
	$(".event-history").hide();
	$(".search-result").fadeIn(animationTime);
	$(".find-event-button").fadeIn(animationTime);
}

var showCreateWindow = function() {
	currentWindow = $(".create");
	currentWindow.css("display" , "block");
	currentWindow.animate({
		'top' : '0px',
	}, animationTime)
	$(".event-buttons").hide();
	$(".event-history").hide();
	$(".creation").fadeIn(animationTime);
	$(".create-event-button").fadeIn(animationTime);
}

$(function(){
	$('.new-events').tabSlideOut({							
		tabHandle: '.handle',						
		pathToTabImage: 'CSS/slides/button.gif',				
		imageHeight: '120px',						
		imageWidth: '40px',						
		tabLocation: 'left',					
		speed: 250,								
		action: 'click',							
		topPos: '200px',							
		fixedPosition: true				
	});
});

function hide() {
	$('.back-dialog').hide();
	$(".search").hide();
	$(".create").hide();
	$(".find-event-button").hide();
	$(".create-event-button").hide();
	$(".search-result").hide();
	$(".creation").hide();
}


/****** Установка пропрций аватарки пользователя *************/

function setPicture(cl) {
	var mainSide;
	var isWidth;
	if($(cl).width() > $(cl).height()) {
		mainSide = $(cl).height();
		isWidth = false;
	} else {
		mainSide = $(cl).width();
		isWidth = true;
	}
	$(cl).css(isWidth ? 'width' : 'height', '160px');
}

/************ Появление/исчезновение диалога с полной пользовательской фоткой ***************/