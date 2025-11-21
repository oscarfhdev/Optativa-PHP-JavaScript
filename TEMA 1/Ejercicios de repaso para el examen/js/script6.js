// Esta función se llama cada vez que se acaba de pulsar una tecla, se pasa el elemento del imput principal y el id del segundo imput
function escribirNumeros(inputNumerosYLetras, idInputNumeros){
  let numeros = ""; // Inicializamos la variable como un string vacía

  // Comprobamos de cada caracter del input is es un número
  for(caracter of inputNumerosYLetras.value){
    if (!isNaN(caracter)){
      numeros += caracter; // En el caso de que sea un número se concatena
    }
  }

  // Obtenemos el elemento input por el id
  const inputNumeros = document.getElementById(idInputNumeros);
  inputNumeros.value = numeros; // El contenido serán únicamente los números
}

// El primer input, con el evento onfocus, llama a este método que cambia el fondo
function resaltar(inputNumerosYLetras){
  inputNumerosYLetras.style.backgroundColor = "beige";
}

// Cuando se quita la atención, el evento onblur devuelve el color original (lightcyan)
function restablecer(inputNumerosYLetras){
  inputNumerosYLetras.style.backgroundColor = "lightcyan";
}

// Esta función es llamada desde el botón de restablecer inputs
function restablecerInputs(idInputNumerosYLetras, idInputNumeros){
  // Obtenemos los elementos inputs por el id
  const inputNumerosYLetras = document.getElementById(idInputNumerosYLetras);
  const inputNumeros = document.getElementById(idInputNumeros);

  // Los restablecemos
  inputNumerosYLetras.value = "";
  inputNumeros.value = "";
}