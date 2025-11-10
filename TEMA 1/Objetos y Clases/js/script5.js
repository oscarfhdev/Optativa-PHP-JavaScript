// Creamos el objeto literal
let objetoConDescuento = {
    precio: 0,
    descuento: 0,

    devolverPrecioConDescuento: function(precio, descuento){
        // Recibimos el precio y el descuento por parámetros, y lo asignamos
        this.precio = precio;
        this.descuento = descuento;

        // Calculamos el descuento
        let precioConDescuento = this.precio - ((this.precio * this.descuento) / 100);

        return precioConDescuento;
    }
}


// Función que se llama desde el botón buscar alumno cada vez que se hace click
function mostrarPrecioDescuento(idInputPrecio, idInputDescuento){

    // Obtenemos los dos elementos input
    let inputPrecio = document.getElementById(idInputPrecio);
    let inputDescuento = document.getElementById(idInputDescuento);

    let divResultado = document.getElementById("resultado");

    // Ponemos vacío al resultado para evitar la acumulación
    divResultado.textContent = "";

    // Ahora ajustamos el texto, obteniendo el resultado del método que devuelve el precio con descuento
    divResultado.textContent = "Precio con descuento aplicado: " + objetoConDescuento.devolverPrecioConDescuento(inputPrecio.value, inputDescuento.value);

    // Ponemos los campos de input vacíos por defecto 
    inputPrecio.value = "";
    inputDescuento.value = "";

}