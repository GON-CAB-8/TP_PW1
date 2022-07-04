function validarCampos(){

var regexSoloLetras = /^[a-zA-Z]+$/;
var regexSoloNumeros = /^[0-9]+$/;
var regexAlfanumerico = /^[a-zA-Z0-9]+$/
var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
var regexPass = /^(?=(.*[\d]){2,})(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[@#$%!]){2,})(?:[\da-zA-Z@#$%!]){8}$/
var mensaje = "";
var error = 0;

reset();

if (!$("#nombre").val().match(regexSoloLetras)) {
    error++;
    mensaje += "<p>Ingrese un Nombre valido (solo caracteres)</p>";
    $("#nombre").addClass('error');
}

if (!$("#apellido").val().match(regexSoloLetras)) {
    error++;
    mensaje += "<p>Ingrese un Apellido valido (solo caracteres)</p>";
    $("#apellido").addClass('error');
}

if (!$("#email").val().match(regexEmail)) {
    error++;
    mensaje += "<p>Ingrese un E-mail valido</p>";
    $("#email").addClass('error');
}

if (!$("#usrname").val().match(regexAlfanumerico)) {
    error++;
    mensaje += "<p>Ingrese un Usuario valido (solo letras y numeros)</p>";
    $("#usrname").addClass('error');
}

if (!$("#pass").val().match(regexPass)) {
    error++;
    mensaje += "<p>Ingrese una contraseña valida (8 digitos exactos, al menos 2 mayusculas, 2 minusculas, 2 caracteres especiales y 2 numeros)</p>";
    $("#pass").addClass('error');
}

if (!($("#rpass").val() === $("#pass").val())) {
    error++;
    mensaje += "<p>Repita la contraseña correctamente.</p>";
    $("#rpass").addClass('error');
}

if ($("#nrocvv").val().length < 3 || $("#nrocvv").val() == "000" || !($("#nrocvv").val().match(regexSoloNumeros))){
    error++;
    mensaje += "<p>Ingrese una clave de tarjeta valida.</p>";
    $("#nrocvv").addClass('error');
}

if(error > 0){
    $("#mensaje").append(mensaje);
    $("#mensaje").show();    
    return false;
}else{
    return true;
}
}

function reset(){
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#email").removeClass('error');
    $("#usrname").removeClass('error');
    $("#pass").removeClass('error');
    $("#rpass").removeClass('error');
    $("#nrocvv").removeClass('error')

    $("#mensaje").empty();
}

$(document).ready(function () {
    $("#form-registro").submit(function () {
        return validarCampos();
    })

    $("#nombre").keyup(function(){
        validarCampos();
    })

    $("#apellido").keyup(function(){
        validarCampos();
    })

    $("#email").keyup(function(){
        validarCampos();
    })

    $("#usrname").keyup(function(){
        validarCampos();
    })

    $("#pass").keyup(function(){
        validarCampos();
    })

    $("#rpass").keyup(function(){
        validarCampos();
    })

    $("#nrocvv").keyup(function(){
        validarCampos();
    })
})