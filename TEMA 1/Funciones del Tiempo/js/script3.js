// Declaramos las variables fuera del método para guardar los valores
let contadorSegundos = 0;
let contadorMinutos = 0;


function sumarSegundos(){ // Se llama automáticamente cada segundo
    const cadena = document.getElementById('segundos') // Obtenemos el h2
    if( contadorSegundos === 60){ // Cada vez que llegue a 60 segundo, antes de que se muestre lo ponemos a 0
        contadorSegundos = 0;
        contadorMinutos++; // Además aumentamos en +1 los minutos
    }
    cadena.textContent = contadorMinutos + " minutos y " + contadorSegundos++ + " segundos en esta página"; // Editamos el contenido del texto añadiendo los minutos

    // Añadimmos la condición de que en cuanto llegue a los 2 minutos o lo supere nos redirija
    if(contadorMinutos >= 2){ 
        window.location.replace("https://iesantoniogala.es/")
    }
}