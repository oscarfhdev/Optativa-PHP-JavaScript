// Método que se llama desde el botón de ejecutar operacion, le pasamos desde el HTML todos los IDs
function ejecutarOperacion(idInputValor1, idInputValor2, idInputOperacion) {
  // Obtenemos los elementos a través de los IDs
  const inputNumero1 = document.getElementById(idInputValor1);
  const inputNumero2 = document.getElementById(idInputValor2);
  const inputOperacion = document.getElementById(idInputOperacion);

  // Llamamos al método auxiliar para comprobar que el valor es correcto
  if (operacionValida(inputOperacion.value)) {
    mostrarError(""); // Quitamos la etiqueta de error

    // Obtenemos los valores numéricos:
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    
    let divResultado = document.getElementById('resultado');

    let resultadoOperacion;
    let cocienteDivision;
    let pResultado = document.createElement("p");


    switch (inputOperacion.value) {
      // Ejecutamos la operación en función del signo, y se lo asignamos a la variable
      case '+':
         resultadoOperacion = numero1 + numero2;
        break;

      case '-':
        resultadoOperacion = numero1 - numero2;
        break;

      case '*':
        resultadoOperacion =  numero1 * numero2;
        break;

      case '/':
        // Aquí controlamos la división por 0
        if(numero2 === 0){
          mostrarError("Error, la división por 0 no es posible")
          return;
        }

        resultadoOperacion =  numero1 / numero2;
        cocienteDivision =  numero1 % numero2;
        break;
  
        // Por si se cuela algo que no es sale
      default:
        break;
    }

    // Por si se le da varias veces, lo reseteamos
    divResultado.textContent = "";

    //Le asignamos el valor al p y lo apendamos al div principal
    pResultado.textContent = "Resultado: " + resultadoOperacion;
    divResultado.append(pResultado);

    // Comprobamos que el cociente esté lleno, en ese caso lo appendamos
    if(cocienteDivision != undefined){
      let pCociente = document.createElement('p');
      pCociente.textContent = "Cociente: " + cocienteDivision;
      divResultado.append(pCociente);
    }

    // Reseteamos los input
    inputNumero1.value = "";
    inputNumero2.value = "";

  } else {
    // En el caso de que el valor no es correcto se muestra este error
    mostrarError(
      "La operación a realizar no está definida correctamente (+, -, /, *)"
    );
  }
}


// Llamamos a esta función para comprobar si el valor del imput de la operación es correcto
function operacionValida(valorInputOperacion) {
  // Comparamos si coincide con los operadores por defecto, retornamos true en el caso de que si
  if (valorInputOperacion === "+" || valorInputOperacion === "-" || valorInputOperacion === "*" || valorInputOperacion === "/") {
    return true;
  } else {
    return false;
  }
}

// Esta función es 
function mostrarError(error) {
  let pError = document.getElementById("error");
  pError.textContent = error;
}
