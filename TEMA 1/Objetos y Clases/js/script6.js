//Constructor de objetos
function ConstructorCliente(nombreCompleto, saldoInicial){
     //Estas variables son privadas, se pone el _ por convención
    const _nombreCompleto = nombreCompleto;
    let _saldoInicial = saldoInicial;


    // Métodos públicos que acceden a las variables privadas (getters y setters)
    this.getNombreCompleto = function() {
        return _nombreCompleto;
    }

    this.getSaldo = function() {
        return _saldoInicial;
    }

    this.depositar = function(cantidad) {
        _saldoInicial += cantidad;
    }

    this.retirar = function(cantidad) {
        _saldoInicial -= cantidad;
    }
}


// Instanciamos el cliente pasándole los valores iniciales nombreCompleto y saldo
const cliente1 = new ConstructorCliente("Óscar Fernández", 5500);


// Fucnión que se llama desde el botón depositar
function depositarImporte(idInputImporte){
    // Obtenemos el imput y el valor
    const inputImporte = document.getElementById(idInputImporte);
    const valorImporte = +inputImporte.value;

    // Hacemos una comprobación, no aceptamos depositar negativo
    if(valorImporte <= 0){
        mostrarError("La cantidad no puede ser menor o igual a 0, ni estar vacía");
    }
    else{
        // Si el valor es correcto se deposita, además se limpian los campos y se actualiza el saldo en pantalla
        cliente1.depositar(valorImporte);
        cargarDatos();
        inputImporte.value = "";
        mostrarError("")
    }

}

// Fucnión que se llama desde el botón retirar
function retirarImporte(idInputImporte){
    // Obtenemos el imput y el valor
    const inputImporte = document.getElementById(idInputImporte);
    const valorImporte = +inputImporte.value;

    // Comprobamos que no retiremos cantidad negativa ni más del saldo actual
    if(valorImporte <= 0 || valorImporte > cliente1.getSaldo()){
        mostrarError("La cantidad no puede estar vacía ni ser menor o igual que 0, tampoco ser superior al saldo disponible");
    }
    else{
        // Si el valor es correcto se deposita, además se limpian los campos y se actualiza el saldo en pantalla
        cliente1.retirar(valorImporte);
        cargarDatos();
        inputImporte.value = "";
        mostrarError("")
    }

}

// Método que se llama desde los métodos depositar y retirar en el caso de haber errores
function mostrarError(mensaje) {
    return document.getElementById("error").textContent = mensaje;
}

// Función que se llama para actualizar los datos en el HTML, actualiza nombre y saldo cada vez que se llama
function cargarDatos(){
    document.getElementById("cliente").textContent = "Nombre del cliente: " + cliente1.getNombreCompleto();
    document.getElementById("saldo").textContent = "Saldo bancario: " + cliente1.getSaldo();
}