// Método que se llama desde el botón de tirar dado, le pasamos desde el HTML todos los IDs
function tirarDado(idImagenDado) {
  // Obtenemos el input y el valor
  const numeroAleatorio = Math.floor(Math.random()* 6) +1;

  // Ahora obtenemos la imagen con el id que viene por parámetro
  const imagenDado = document.getElementById(idImagenDado);

  // Hacemos un switch, en función del valor generado se va a poner una foto u otra
  switch (numeroAleatorio) {
    case 1:
      imagenDado.src = "./images/1.png" // Le cambiamos el enlace a la imagen 
      break;

    case 2:
      imagenDado.src = "./images/2.png"
      break;
    case 3:
      imagenDado.src = "./images/3.png"
      break;
    case 4:
      imagenDado.src = "./images/4.png"
      break;
    case 5:
      imagenDado.src = "./images/5.png"
      break;
    case 6:
      imagenDado.src = "./images/6.png"
      break;
  
    default:
      break;
  }
}
