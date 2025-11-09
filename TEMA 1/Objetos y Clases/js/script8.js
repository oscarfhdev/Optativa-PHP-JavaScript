// Creamos la clase Bus
class Bus {

    // Lo hacemos privado con #, válido desde ES2022
    #capacidadMaxima;
    #numeroPasajeros;
    #conductor;

    // Aquí tenemos el constructor, las variables se declaran dentro
    constructor(capacidadMaxima, conductor) {
        this.#capacidadMaxima = capacidadMaxima;
        this.#numeroPasajeros = 0;
        this.#conductor = conductor;
    }

    // Métodos públicos que acceden a las variables privadas (getters y setters)
    getCapacidadMaxima() {
        return this.#capacidadMaxima;
    }

    getNumeroPasajeros(){
        return this.#numeroPasajeros;
    }

    getConductor(){
        return this.#conductor;
    }

    setCapacidadMaxima(capacidadMaxima){
        this.#capacidadMaxima = capacidadMaxima;
    }

    setNumeroPasajeros(numeroPasajeros){
        this.#numeroPasajeros = numeroPasajeros;
    }
    
    setConductor(conductor){
        this.#conductor = conductor;
    }


    // Métodos públicos parar subir y bajar pasajeros
    subirPasajeros(numeroPasajeros){
        this.#numeroPasajeros += numeroPasajeros;
    }

    bajarPasajeros(numeroPasajeros){
        this.#numeroPasajeros -= numeroPasajeros;
    }
}

// Otra clase conductor para poder instanciar objetos de este tipo
class Conductor {
    #nombre;
    #licencia

    constructor(nombre, licencia) {
        this.#nombre = nombre;
        this.#licencia = licencia;
    }

    getNombre(){
        return this.#nombre;
    }

    getLicencia(){
        return this.#licencia;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    setLicencia(licencia){
        this.#licencia = licencia;
    }
}


// Creamos nuestra instancia de persona con valores por defecto
const bus = new Bus(60, new Conductor("Óscar Fernández Hernández", "3245892F"))




// Método que se llama desde los métodos subir y bajar pasajeros el caso de haber errores
function mostrarError(mensaje) {
    return document.getElementById("error").textContent = mensaje;
}

// Función que se llama para actualizar los datos en el HTML, actualiza nombre y las sesiones cada vez que se llama. Automáticamente se ejecuta al inicaiar
function cargarDatos(){
   
}