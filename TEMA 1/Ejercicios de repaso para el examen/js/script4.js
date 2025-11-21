// Método que se llama desde el botón de calcular factorial, le pasamos desde el HTML el id del input
function calcularFactorial(idInputNumero) {
  
  // Ahora obtenemos la imagen con el id que viene por parámetro
  const inputNumero = document.getElementById(idInputNumero);
  const numero = Number(inputNumero.value);
  let resultadoFactorial = 1;

  // Si es menor mostramos el error
  if(numero < 0){
    mostrarError("No se puede calcular el factorial de un número negativo")
    return;
  }
  // Si el número es distinto de 1 calculamos, sino se queda como está
  if(numero != 0){
    for (let i = numero; i >= 1; i--) {
      resultadoFactorial = resultadoFactorial * i
    }
  } 

  mostrarError(""); // Limpiamos los errores
  // Obtenemos el div resultado y lo reiniciamos
  let divResultado = document.getElementById('resultado');
  divResultado.textContent = "";

  // Creamos el elemento p y le seteamos el texto con el resultado de la comparación
  let pResultado = document.createElement("p");
  pResultado.textContent = resultadoFactorial;
  divResultado.append(pResultado); // Por último le appendamos el p a el div de datos
}


// Esta función es llamada desde otros métodos para mostrar los errores
function mostrarError(error) {
  let pError = document.getElementById("error");
  pError.textContent = error;
}
