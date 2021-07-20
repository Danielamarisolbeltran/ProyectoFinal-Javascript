// Seccion 2 NOSOTROS con animaciones con jQuery
$(document).ready(function(){
    console.log("%c Bienvenido a Domo Blanco Helados! 😄🍦", "font-size:15px");
})

$(window).ready(function(){
    console.log("%c La pagina se cargo correctamente"+ new Date(),"font-size:15px");
})

//EFECTOS Y ANIMACIONES CON jQuery
//ocultamos img con hide
$("#nosotros").hide();
$("#artesanal").hide();

//fadein en boton para mostrar parrafo al hacer click (4000 son 4 segundos)
$("#muestraParrafo").click(function () {
    $("#parrafo").fadeIn(2000);
});

//fadeOut para volver a ocultar el parrafo
$("#ocultarParrafo").click(function () {
    $("#parrafo").fadeOut(1000);
});

$("#slideImagen").click(() => {
    $("#nosotros").slideDown("slow");
});

$("#slideImgUp").click(() => {
    $("#nosotros").slideUp("slow");
});

//despues del == , va tal cual lo mismo que aparece impreso en el boton
$("#muestraOculta").click(() => {
    $("#artesanal").slideToggle (2000, function() {
        if ($("#muestraOculta").html == ("Mostrar elaboracion artesanal")) {
            $("#muestraOculta").html("Mostrar elaboracion");
        } else {
            $("#muestraOculta").html("Ocultar elaboracion");
        }
    });
});


// <!--Seccion 3 Formulario de contacto con validaciones js-->
//  Declaramos las variables 
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const fechaCumple = document.getElementById("fechaCUmple");
const sabores = document.getElementById("sabores");
const comentarios = document.getElementById("comentarios");
const submit = document.getElementById("btn-enviar");
const reset = document.getElementById("btn-borrar");
const resultado = document.querySelector(".resultado");

//agrego Event Listeners
submit.addEventListener("click",(e) => {
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error [1];
        resultado.classList.add("red");
    }else {
        resultado.innerHTML = "Suscripcion exitosa. Gracias por suscribirte, se enviaron tus datos !";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos =()=> {
    let error = [];
    if(nombre.value.lenght < 4 || nombre.value.lenght > 40){
        error[0] = true;
        error[1] = "El nombre es inválido";
        return error;
    }else if (email.value.lenght <5 ||
              email.value.lenght >40 ||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1){
                error[0] = true;
                error[1] = "El email es inválido";
                return error; 
            }else if (telefono.value.lenght< 10 || telefono.value.lenght>14){
                error[0] = true;
                error[1] = "El telefono es inválido";
                return error; 
            }
            error[0]= false;
            return error;
}

