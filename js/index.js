$(document).ready(function(){
    $("#form-sign-in").submit(function(){
        return validar();
    })

    function validar(){
        let error = 0;

        if($("#user").val().length <=0){
            error ++;
            console.log("A1");
        }

        if($("#password").val().length <=0){
            error ++;
            console.log("A2");
        }

        if(error > 0){
            return false;
        } else {
                let usuario = $("#user").val();
                localStorage.setItem("usuario",usuario);
                return true;
        }
    }
})