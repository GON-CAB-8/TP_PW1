function validarCampos() {

    var regexSoloNumeros = /^[0-9]+$/;
    var regexPass = /^(?=(.*[\d]){2,})(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[@#$%!]){2,})(?:[\da-zA-Z@#$%!]){8}$/
    var regexTarjeta = /^(?:\d[ -]*?){16,19}$/
    var mensaje = "";
    var error = 0;

    reset();

    if (!$("#newpass").val().match(regexPass)) {
        error++;
        mensaje += "<p>Ingrese una contraseña valida (8 digitos exactos, al menos 2 mayusculas, 2 minusculas, 2 caracteres especiales y 2 numeros)</p>";
        $("#newpass").addClass('error');
    }

    if (!($("#newpassrepeat").val() === $("#newpass").val())) {
        error++;
        mensaje += "<p>Repita la contraseña correctamente.</p>";
        $("#newpassrepeat").addClass('error');
    }

    if ($('input[id="credito"]').is(':checked')) {
        if (!($("#nrotarjeta").val().match(regexTarjeta)) || !validarNumerosTarjeta($("#nrotarjeta").val())) {
            error++;
            mensaje += "<p>Ingrese un numero de Tarjeta de credito valido.</p>";
            $("#nrotarjeta").addClass('error');
        }
    }

    if ($('input[id="credito"]').is(':checked')) {
        if ($("#nrocvv").val().length < 3 || $("#nrocvv").val() == "000" || !($("#nrocvv").val().match(regexSoloNumeros))) {
            error++;
            mensaje += "<p>Ingrese una clave de tarjeta valida.</p>";
            $("#nrocvv").addClass('error');
        }
    }
    
    if($('input[id="cupon"]').is(':checked')){
        if(!($('input[id="pagof"]').is(':checked')) && !($('input[id="rapip"]').is(':checked'))){
            error++;
            mensaje += "<p>Seleccione Como desea Debitar el pago (PagoFacil o Rapipago).</p>"
        }
    }


    if (!($('input[name="metodo"]').is(':checked'))) {
        mensaje += "<p>Debe seleccionar un metodo de pago</p>";
        error++;
    }

    if (error > 0) {
        $("#mensaje").append(mensaje);
        $("#mensaje").show();
        return true;
    } else {
        $("#btn_submit").prop("disabled", false); //Si esta todo correcto desabilita el disabled del boton submit
        $("#mensaje").hide(); // esconde el div de errores.

        //SETEAR LOS LOCAL STORAGE SEGUN QUE INPUT ESTE PRENDIDO:
        if ($('input[id="credito"]').is(':checked')) {
            let tarjetaDeCredito = { numero: $("#nrotarjeta").val(), cvv: $("#nrocvv").val() };
            localStorage.setItem('datosTarjeta', tarjetaDeCredito);
        } else if ($('input[id="cupon"]').is(':checked')) {
            if ($('input[id="pagof"]').is(':checked') && $('input[id="rapip"]').is(':checked')) {
                let cupon = { tipo: "PagoFacil", tipo: "RapiPago" };
                localStorage.setItem('cupon', cupon);
            } else if ($('input[id="rapip"]').is(':checked')) {
                let cupon = { tipo: "RapiPago" };
                localStorage.setItem('cupon', cupon);
            } else if ($('input[id="pagof"]').is(':checked')) {
                let cupon = { tipo: "PagoFacil" };
                localStorage.setItem('cupon', cupon);
            }
        } else {
            let transfer = { CBU: "362514444595959337723" }
            localStorage.setItem('transferencia', transfer);
        }

        return false;
    }
}

function reset() {
    $("#newpass").removeClass('error');
    $("#newpassrepeat").removeClass('error');
    $("#nrotarjeta").removeClass('error')
    $("#nrocvv").removeClass('error');

    $("#mensaje").empty();
}

function validarNumerosTarjeta(numerotarjeta) {
    let sum = 0;

    for (let i = 0; i <= numerotarjeta.length - 2; i++) {
        sum += Number(numerotarjeta[i]);
    }

    if (sum % 2 == numerotarjeta.charAt(numerotarjeta.length - 1) % 2) {
        return false;
    } else {
        return true;
    }
}



$(document).ready(function () {
    let nombreUsuario = localStorage.getItem('usuario');
    $("#nombreUsuario").html(nombreUsuario);

    $("#btn_submit").prop("disabled", true);

    $("#form-registro").submit(function () {
        return validarCampos();
    })


    $("#newpass").keyup(function () {
        validarCampos();
    })

    $("#newpassrepeat").keyup(function () {
        validarCampos();
    })

    $("#nrotarjeta").keyup(function () {
        validarCampos();
    })

    $("#nrocvv").keyup(function () {
        validarCampos();
    })

    $('input[name="metodo"]').change(function () {
        validarCampos();
    })


})