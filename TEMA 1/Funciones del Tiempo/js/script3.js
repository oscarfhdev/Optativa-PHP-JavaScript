let contadorSegundos = 0;
let contadorMinutos = 0;


function sumarSegundos(){
    const cadena = document.getElementById('segundos')
    if( contadorSegundos === 59){
        contadorSegundos = 0;
        contadorMinutos++;
    }
    cadena.textContent = contadorMinutos + " minutos y " + contadorSegundos++ + " segundos en esta página";
    if(contadorMinutos >= 2){
        window.location.replace("https://iesantoniogala.es/")
    }
}