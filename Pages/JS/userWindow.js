var currentWindow;

$(document).ready(function() {
	currentWindow = $(".user-information");
	$(".search").hide();
	$(".create").hide();
});


var showUserInformation = function() {
	$.when(currentWindow.slideUp(500)).then(function() {
		currentWindow = $(".user-information");
		currentWindow.slideDown(500);
	})
}

var showSearchWindow = function() {
		$.when(currentWindow.slideUp(500)).then(function() {
			currentWindow = $(".search");
			currentWindow.slideDown(500);
		})
}

var showCreateWindow = function() {
	$.when(currentWindow.slideUp(500)).then(function() {
		currentWindow = $(".create");
		currentWindow.slideDown(500);
	})
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
