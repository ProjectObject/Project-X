var currentWindow;
var animationTime = 500;

$(document).ready(function() {
	currentWindow = $(".user-information");
	$(".search").hide();
	$(".create").hide();
	$(".find-event-button").hide();
	$(".create-event-button").hide();
	$(".search").css("top", "-300px");
	$(".create").css("top", "-300px");
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
