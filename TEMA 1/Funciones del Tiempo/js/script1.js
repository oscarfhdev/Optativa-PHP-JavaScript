let contador = 0; // Declaramos el contador fuera de la función para que el valor se mantenga

function sumarSegundos(){ // Se llama atuomáticamente cada segundo
    const cadena = document.getElementById('segundos') // Obtenemos el h2
    cadena.textContent = contador++ + " segundos en esta página"; // Le editamos el texto cada segundo con el valor del contador
}