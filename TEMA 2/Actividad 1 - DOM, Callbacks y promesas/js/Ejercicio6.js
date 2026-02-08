// Obtenemos el elemento donde mostraremos los mensajes
const divResultado = document.getElementById('resultado');

// Función principal que ejecuta la promesa
function ejecutarPromesa() {
    
    // Primer mensaje al inicio de la función
    divResultado.innerHTML = "Inicio de la función";

    // Creamos la promesa
    const promesa = new Promise(function(exito, fracaso) {

        // Este código se ejecuta inmediatamente al crear la promesa
        divResultado.innerHTML += "<br>Estoy dentro de la promesa";

        setTimeout(function() {
            // Después de 3 segundos avisamos al .then de que hemos terminado
            let mensaje = "Salí de la promesa";
            exito(mensaje);
        }, 3000);

    });

    // Esperamos a que la promesa se resuelva
    promesa.then(function(valor) {
        divResultado.innerHTML += "<br>" + valor;
    });

}
