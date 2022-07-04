$(document).ready(function(){
    $("#form-sign-in").submit(function(){
        return validar();
    })

    function validar(){
        let error = 0;
        let mensajesError = "";

        $("#mensaje").empty();
        if($("#user").val().length <= 0){
            error ++;
            mensajesError += '<p>Ingrese su usuario</p>';
        }

        if($("#password").val().length <=0){
            error ++;
            mensajesError += '<p>Ingrese su contraseña</p>';
        }

        if(error > 0){
            $("#mensaje").append(mensajesError);
            return false;
        } else {
            let usuario = $("#user").val();
            localStorage.setItem("usuario",usuario);
            return true;
        }
    }
})