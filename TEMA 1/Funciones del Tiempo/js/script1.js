let contador = 0;

function sumarSegundos(){
    const cadena = document.getElementById('segundos')
    cadena.textContent = contador++ + " segundos en esta página";
}