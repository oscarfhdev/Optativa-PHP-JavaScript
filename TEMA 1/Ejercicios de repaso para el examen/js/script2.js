// Al ejecutar el script se crea el número aleatorio
const numeroAleatorio = Math.floor(Math.random()* 50) +1;

// Método que se llama desde el botón de adivinar número , le pasamos desde el HTML todos los IDs
function adivinarNumeroAleatorio(idInputNumero) {
  // Obtenemos el input y el valor
  const inputNumero = document.getElementById(idInputNumero);
  const numeroIntentoAdivinar = Number(inputNumero.value);

  // Creamos nuestra variable resultado
  let resultado;

  // En función de la condición retornamos una cosa u otra
  if(numeroIntentoAdivinar > 50 || numeroIntentoAdivinar < 1){
    resultado = "El número a adivinar está en el rango 1-50"
  }

  else if (numeroIntentoAdivinar > numeroAleatorio){
    resultado = "El número que intentas adivinar es más pequeño que el introducido"
  }

  else if (numeroIntentoAdivinar < numeroAleatorio){
    resultado = "El número que intentas adivinar es más grande que el introducido"
  }

  
  else if (numeroIntentoAdivinar == numeroAleatorio){
    resultado = "¡Has acertado!"
  }

  // Obtenemos el div resultado y lo reiniciamos
  let divResultado = document.getElementById('resultado');
  divResultado.textContent = "";

  // Creamos el elemento p y le seteamos el texto con el resultado de la comparación
  let pResultado = document.createElement("p");
  pResultado.textContent = resultado;
  divResultado.append(pResultado); // Por último le appendamos el p a el div de datos

}
