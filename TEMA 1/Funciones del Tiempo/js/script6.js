// Declaramos las variables fuera del método para guardar los valores
let contadorMiliSegundos = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let encendido = false;

const cadena = document.getElementById('segundos') // Obtenemos el h2


function sumarSegundos(){ // Se llama automáticamente cada segundo
    if(encendido){ // Cada vez que llegue a 100 milisegundos, antes de que se muestro lo ponemos a 0 y aumentamos el segundo
        if(contadorMiliSegundos === 101){
            contadorMiliSegundos = 0;
            contadorSegundos++;
        }
        if(contadorSegundos === 60){ // Cada vez que llegue a 60 segundo, antes de que se muestre lo ponemos a 0 y aumentamos el minuto
            contadorSegundos = 0;
            contadorMinutos++; // Además aumentamos en +1 los minutos
        }
        cadena.textContent = contadorMinutos + ":" + contadorSegundos + ":" + contadorMiliSegundos++; // Editamos el contenido del texto añadiendo los minutos
    }
}

// Métodos que se llaman desde los botones
function pararCronometro(){
    encendido = false;
}

function iniciarCronometro(){
    encendido = true;
}

// Para el cronómetro y lo restablece
function reiniciarCronometro(){
    pararCronometro();
    contadorMiliSegundos = 0;
    contadorSegundos = 0;
    contadorMinutos = 0;
    cadena.textContent = contadorMinutos + ":" + contadorSegundos + ":" + contadorMiliSegundos; // Editamos el contenido del texto, ahora añadiéndolos a 0
}