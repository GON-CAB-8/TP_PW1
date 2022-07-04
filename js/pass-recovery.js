$(document).ready(function(){
    $('.enviar').attr('disabled',true);

    $('#email, #usuario').keyup(function(){
        if($("#email").val() != '' && $("#usuario").val() != ''){
            $('.enviar').attr('disabled',false);
        } else {
            $('.enviar').attr('disabled',true);
        }
    });
});