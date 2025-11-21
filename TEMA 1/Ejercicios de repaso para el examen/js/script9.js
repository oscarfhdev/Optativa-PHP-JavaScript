// Creamos nuestra clase compra
class Compra {
  // Atributos privados
  #nombre;
  #fechaCompra;
  #alimentosAComprar;
  #cantidadAlimentos;

  // Creamos el constructor con todos los parámetros
  constructor(nombre, fechaCompra, arrayAlimentos,arrayCantidad, ) {
    this.#nombre = nombre;
    this.#fechaCompra = fechaCompra;
    this.#alimentosAComprar = arrayAlimentos;
    this.#cantidadAlimentos = arrayCantidad;
  }

  getNombre(){ return this.#nombre; } // Método getnombre, no creo el resto porqeu no es necesario

  // Este método devuelve un div con la información completa de la compra
  toString(){
    // Creamos el div principal
    const divListaCompra = document.createElement("div");

    // Creamos un elemento p y el valor va a ser el nombre de la compra
    const pNombre = document.createElement("p");
    pNombre.textContent = "Nombre: " + this.#nombre;

    // Hacemos lo mismo con la fecha de la compra
    const pFechaCompra = document.createElement("p");
    pFechaCompra.textContent = "Fecha de compra prevista: " + this.#fechaCompra;

    // Aquí tenemos un div que va a contener un p por cada alimento + cantidad
    const divAlimentosYCantidad = document.createElement("div");
  
    // Recorremos los dos arrays y añadimos los p al div para ir guardándolo todo
    for (let i = 0; i < this.#alimentosAComprar.length; i++) {
      const pAlimentoYCantidad = document.createElement("p");
      pAlimentoYCantidad.textContent = this.#alimentosAComprar[i] + ", " + this.#cantidadAlimentos[i] + " unidades";
      divAlimentosYCantidad.append(pAlimentoYCantidad);
    }
    // Añadimos todos los elementos que hemos creado al div principal
    divListaCompra.append(pNombre);
    divListaCompra.append(pFechaCompra);
    divListaCompra.append(divAlimentosYCantidad);

    return divListaCompra; // Retornamos el div principal
  }
}

// Creamos 3 compras
const compra1 = new Compra("Compra cena empresa", "22/11/2025", ["Leche", "Pan", "CocaCola", "Cerveza"], [3, 1, 5, 10])
const compra2 = new Compra("Compra semana que viene", "28/11/2025", ["Huevos", "Lasaña", "Bolsas de basura"], [1, 2, 5])
const compra3 = new Compra("Compra comida familiar", "30/12/2025", ["Anís del Mono", "Carrilleras", "Paquete de Avellanas", "Mantecados de Cacao"], [1, 8, 2, 10])

// Metemos las 3 compras en un array
let comprasPendientes = [compra1, compra2, compra3]

// Esta función es llamada desde el evento onload al cargar el HTML, muestra las compras por los nombres
function cargarComprasPendientes(){
  // Obtenemos el p del html
  const pArrayCompras = document.getElementById("arrayCompras");
  pArrayCompras.textContent = "Compras pendientes: ";
  // Le vamos añadiendo mediante un bucle las compras que hay (solo el nombre)
  for (const compra of comprasPendientes) {
    pArrayCompras.textContent = pArrayCompras.textContent + compra.getNombre() + ", "; // Ponemos una , para hacerla más visual
  }
  
}

// Esta función es llamada desde el botón de mostrar compra
function mostrarCompra(idInputNombreCompra){
  // Obtenemos el input, pasamos el id por parámetro
  const inputNombreCompra = document.getElementById(idInputNombreCompra);
  
  // Buscamos la compra por el nombre
  let compraEncontrada = buscarCompraPorNombre(inputNombreCompra.value);

  // Si encontramos la compra la mostramos
  if(compraEncontrada != null){
      const divResultado = document.getElementById('resultado'); // Obtenemos el elemento del div resultado
      divResultado.textContent = ""; // Lo reseteamos para evitar teneer información extra
      mostrarError("");
      // Aquí el toString de la clase compra nos retorna un div que metemos dentro del div resultaod
      divResultado.append(compraEncontrada.toString()); 
  }
  
}

// Método para busccar una compra por su nombre
function buscarCompraPorNombre(nombreCompra){
  // Recorremos el array de compras
  for (const compra of comprasPendientes) {
    // Si el nombre coincide con el nombre pasado por parámetro se retorna
    if(compra.getNombre() === nombreCompra){
      return compra;
    }
  }
  // Si no se encuentra la compra se muestra un mensaje y se retorna null
  mostrarError("El nombre introducido no está registrado, ingrese un nombre de los disponibles")
  return null;
}

// Esta función es llamada desde otros métodos para mostrar los errores
function mostrarError(error) {
  let pError = document.getElementById("error");
  pError.textContent = error;
}
