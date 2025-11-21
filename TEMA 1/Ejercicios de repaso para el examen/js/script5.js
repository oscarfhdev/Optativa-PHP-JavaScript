// Al entrar en la página se carga el script y se muestra el array de las marcas
const arrayMarcas = ["SEAT", "Lancia", "Porsche", "Rolls Royce", "Mercedes"]
actualizarArray();


// Esta función carga los valores del array en el elemento p
function actualizarArray(){
  const pArrayMarcas = document.getElementById("arrayMarcas");
  pArrayMarcas.textContent = "Marcas registradas: " + arrayMarcas;
}

// Método que se llama desde el botón de añadir marca, le pasamos desde el HTML el id del input
function addMarca(idInputMarca) {
  
  // Ahora obtenemos el input de la marca mediante el id
  const inputMarca = document.getElementById(idInputMarca);

  // Al arrray de marcas, le añadimos el valor del imput al final
  arrayMarcas.push(inputMarca.value); 

  // Lo actualizamos y limpiamos el input
  actualizarArray();
  inputMarca.value = "";


}

// Método que se llama desde el botón de eliminar marca, le pasamos desde el HTML el id del input
function eliminarMarca(idInputMarca) {
  
  // Ahora obtenemos el input con el id que viene por parámetro
  const inputMarca = document.getElementById(idInputMarca);

  // Obtenemos el índice de la marca que queremos eliminar, si no la encuentra devuelve -1
  const index = arrayMarcas.indexOf(inputMarca.value);

  // En el caso de que no lo encuentre, mostramos el error y paramos la función
  if(index == -1){
    mostrarError("La marca que has introducido no está registrada, por lo tanto no se puede eliminar")
    return;
  }
  
  // Si continúa, limpiamos el error y eliminamos el elemento
  mostrarError("");
  arrayMarcas.splice(index, 1); // elimina 1 elemento a partir del índice

  // Lo actualizamos y limpiamos el input
  actualizarArray();
  inputMarca.value = "";

}


// Esta función es llamada desde otros métodos para mostrar los errores
function mostrarError(error) {
  let pError = document.getElementById("error");
  pError.textContent = error;
}
