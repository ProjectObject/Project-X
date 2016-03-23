var currentWindow;
var showNewEvents = true;
var animationTime = 600;
var height;
var width;

$(document).ready(function() {
	setPicture('.user-picture');
	currentWindow = $(".user-information");
	$('.back-dialog').hide();
	$(".search").hide();
	$(".create").hide();
	$(".find-event-button").hide();
	$(".create-event-button").hide();
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
	$(".create-event-button").hide();
	$(".find-event-button").hide();
	$(".event-buttons").fadeIn(animationTime);
	$.when(currentWindow.animate({
		'top' : '-300px'
	})).done(function() {
		currentWindow.css("display", "none");
	});
}

var showSearchWindow = function() {
	currentWindow = $(".search");
	currentWindow.css("display" , "block");
	currentWindow.animate({
		'top' : '0px',
	}, animationTime)
	$(".event-buttons").hide();
	$(".find-event-button").fadeIn(animationTime);
}

var showCreateWindow = function() {
	currentWindow = $(".create");
	currentWindow.css("display" , "block");
	currentWindow.animate({
		'top' : '0px',
	}, animationTime)
	$(".event-buttons").hide();
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

/****** Кнопка перемещения наверх ************/


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