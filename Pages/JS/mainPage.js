var slideIndex;
var slideTime = 8000;
var slideArray = $(".slide");

$(document).ready(function(){
    $("#dialog").hide();
    slideIndex = 0;
	slideArray.css({"position" : "absolute",
	"top":'0', "left": '0'}).hide();
	slideArray.eq(slideIndex).show();
});

function openDialog(){
    $("#dialog").fadeIn(); 
}

function closeDialog(){
    $("#dialog").fadeOut();
}

var changeSlide = function() {
	slideArray.eq(slideIndex).fadeOut(2500);
	slideIndex++;
	slideIndex = slideIndex == 5 ? 0 : slideIndex;
	slideArray.eq(slideIndex).fadeIn(2500);
}

setInterval(changeSlide, slideTime);




