var volume = true;

$(document).ready(function(){
        $("#dialog").hide();
});

function openDialog(){
    $("#dialog").fadeIn(); 
}

function closeDialog(){
    $("#dialog").fadeOut();
}

function switchVolume() {
    if(!volume) {
         $("#video-background").prop('muted', false);
         $("#volume").css("background", "url(CSS/slides/sound_on.png)");
        volume = !volume;
    } else {
        $("#video-background").prop('muted', true);
        $("#volume").css("background", "url(CSS/slides/sound_off.png)");
        volume = !volume;
    }
}




