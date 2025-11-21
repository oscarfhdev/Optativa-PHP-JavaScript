// Variables globales para ir acutalizando
let contadorSegundos = 0; 
let contadorMinutos = 0;

// Esta función se llama cada segundo automáticamente al pulsar el botón de iniciar cronometro
function iniciarCronometro(){
  contadorSegundos++ // Incrementamos cada segundo

  // Obtenemos los elementos que nos interesan, en este caso el p del cronómetro y el div de resultado
  const pCronometro = document.getElementById("cronometro");
  const divResultado = document.getElementById("resultado");

  // A los 10 segundos se muestra el mensaje
  if(contadorMinutos == 0 & contadorSegundos == 10){
    const pMensaje = document.createElement("p");
    pMensaje.textContent = "Han pasado 10 segundos!";
    divResultado.append(pMensaje);
  }

  // A los 60 segundo se aumenta +1 el minuto
  if(contadorSegundos == 60){
    contadorSegundos = 0;
    contadorMinutos++;
  }

  // Con esto formateamos el cronómetro, primero los minutos y luegos los segundos
  pCronometro.textContent = contadorMinutos+"m " + " : " + contadorSegundos + "s";
}