$(document).ready(function() {
	$('.back-dialog').hide();
	$('.dialog-picture').attr('src', $('.user-picture').attr('src'));
	$.when(setPicture('.user-picture')).done(setDialogCss());
});

var height;
var width;

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
	var k = isWidth ? $(cl).width()/200 : $(cl).height()/200;
	var side = isWidth ? $(cl).height()*k : $(cl).width()*k;
	$(cl).css(isWidth ? 'width' : 'height', '200px');
	if(isWidth) {
		width = $(cl).width()*2;
		height = side*2;
	} else {
		height = $(cl).height()*2;
		width = side * 2;
	}
}

function setDialogCss() {
	$('.dialog-picture').css({
		'width': width + 'px',
		'height': height + 'px'
	})
}
function showDialog() {
	$('.back-dialog').fadeIn();
}

function closeDialog() {
	$('.back-dialog').fadeOut();
}