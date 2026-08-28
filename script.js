const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Mensaje enviado correctamente.");
    });
}