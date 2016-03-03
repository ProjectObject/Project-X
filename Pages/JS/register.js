$(document).ready(function() {
   $('#e-mail').blur(function() {
       if($(this).val == '') {
           $(this).css({'border' : '2px solid #ff0000'});
           $('#validation').text('Поле email не должно быть пустым');
       } else {
           var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#validation').text('Верно');
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#validation').text('Не верно');
            }
       }
   }) 
});