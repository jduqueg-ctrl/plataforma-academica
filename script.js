/* ==========================================================
   Plataforma Académica Básica — Interacción básica
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    var boton = document.getElementById("btn-anuncio");
    var mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
        if (mensaje.textContent === "") {
            mensaje.textContent =
                "Recuerde subir las evidencias del taller de Git y GitHub antes del cierre de la semana 3.";
        } else {
            mensaje.textContent = "";
        }
    });

    console.log("Plataforma Académica Básica cargada correctamente.");
});
