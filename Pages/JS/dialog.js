$(document).ready(function(){
        $("#dialog").hide(); //скрываем окно при загрузке страница
    });

    function openDialog(){
        $("#dialog").fadeIn(); //плавное появление блока
    }

    function closeDialog(){
        $("#dialog").fadeOut(); //плавное исчезание блока
    }