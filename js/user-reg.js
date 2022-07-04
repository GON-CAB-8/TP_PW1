let regexSoloLetras = /^[a-zA-Z]+$/;
let regexSoloNumeros = /^[0-9]+$/;
let regexAlfanumerico = /^[a-zA-Z0-9]+$/
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
let regexPass = /^(?=(.*[\d]){2,})(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[@#$%!]){2,})(?:[\da-zA-Z@#$%!]){8}$/

$(document).ready(function () {
    $("#form-registro").submit(function () {
        return validar();
    })

    function validar() {
        var error = 0;
        var mensajeAlert = "";

        if (!$("#nombre").val().match(regexSoloLetras)) {
            error++;
            mensajeAlert += "Ingrese un Nombre valido (solo caracteres)\n";
        }

        if (!$("#apellido").val().match(regexSoloLetras)) {
            error++;
            mensajeAlert += "Ingrese un Apellido valido (solo caracteres)\n";
        }

        if (!$("#email").val().match(regexEmail)) {
            error++;
            mensajeAlert += "Ingrese un E-mail valido\n";
        }

        if (!$("#usrname").val().match(regexAlfanumerico)) {
            error++;
            mensajeAlert += "Ingrese un Usuario valido (solo letras y numeros)\n";
        }

        if (!$("#pass").val().match(regexPass)) {
            error++;
            mensajeAlert += "Ingrese una contraseña valida (8 digitos exactos, al menos 2 mayusculas, 2 minusculas, 2 caracteres especiales y 2 numeros)\n";
        }

        if (!$("#rpass").val().match(("#pass").val())) {
            error++;
            mensajeAlert += "Repita la contraseña correctamente.\n";
        }

        if (error > 0) {
            alert("HOLIS")
            return false;
        } else {
            return true;
        }
    }
})