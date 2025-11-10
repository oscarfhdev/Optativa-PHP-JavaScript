// Creamos la clase Bus
class Bus {

    // Lo hacemos privado con #, válido desde ES2022
    #capacidadMaxima;
    #numeroPasajeros;
    #conductor;

    // Aquí tenemos el constructor, las variables se declaran dentro
    constructor(capacidadMaxima, conductor) {
        this.#capacidadMaxima = capacidadMaxima;
        this.#numeroPasajeros = 0; // Inicializamos el número de pasajeros a 0
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

    // Esto es como un toString personalizado en Java 
    mostrarInfo(){
        return "Autobús: capacidad máxima: " + this.getCapacidadMaxima() + " , pasajeros actualmente: " + this.getNumeroPasajeros();
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

    mostrarInfo(){
        return "Nombre del conductor: " + this.getNombre() + ", licencia: " + this.getLicencia();
    }
}


// Creamos el conductor para asingarselo al bus
const conductor1 = new Conductor("Óscar Fernández Hernández", "3245892F");

// Creamos nuestra instancia de la clase bus con valores por defecto
const bus1 = new Bus(60, conductor1)


// Función que se llama desde el botón bajar pasajeros
function bajarPasajeros(idImputPasajeros){
    // Obtenemos el imput y el valor
    const inputCantidadPasajeros = document.getElementById(idImputPasajeros);
    const valorCantidadPasajeros = +inputCantidadPasajeros.value;

    // Comprobamos que no retiremos cantidad negativa ni más de los pasajeros actuales
    if(valorCantidadPasajeros <= 0 || valorCantidadPasajeros > bus1.getNumeroPasajeros()){
        mostrarError("La cantidad no puede estar vacía ni ser menor o igual que 0, tampoco ser superior a los pasajeros actuales");
    }
    else{
        // Si el valor es correcto se bajan los pasajeros, además se limpian los campos y se actualiza el saldo en pantalla
        bus1.bajarPasajeros(valorCantidadPasajeros);
        cargarDatos();
        inputCantidadPasajeros.value = "";
        mostrarError("")
    }

}

// Función que se llama desde el botón subir pasajeros
function subirPasajeros(idImputPasajeros){
    // Obtenemos el imput y el valor
    const inputCantidadPasajeros = document.getElementById(idImputPasajeros);
    const valorCantidadPasajeros = +inputCantidadPasajeros.value;

    // Comprobamos que no retiremos cantidad negativa ni superior al máximo de pasajeros
    if(valorCantidadPasajeros <= 0 || ((valorCantidadPasajeros + bus1.getNumeroPasajeros()) > bus1.getCapacidadMaxima())){
        mostrarError("La cantidad no puede ser menor o igual a 0, ni estar vacía. Tampoco puedes subir más pasajeros de los posibles");
    }
    else{
        // Si el valor es correcto se suben los pasjeros, además se limpian los campos y se actualiza el saldo en pantalla
        bus1.subirPasajeros(valorCantidadPasajeros);
        cargarDatos();
        inputCantidadPasajeros.value = "";
        mostrarError("")
    }
}

// Método que se llama desde el botón de mostrar conductor
function mostrarConductor(idPInfoConductor){
    let pDatos2 = document.getElementById(idPInfoConductor);
    pDatos2.textContent = conductor1.mostrarInfo(); // El contenido del p es la ifromación del conductor
}

// Método que se llama desde los métodos subir y bajar pasajeros el caso de haber errores
function mostrarError(mensaje) {
    return document.getElementById("error").textContent = mensaje;
}

// Función que se llama para actualizar los datos en el HTML, actualiza nombre y las sesiones cada vez que se llama. Automáticamente se ejecuta al inicaiar
function cargarDatos(){
    // Obtenemos el div de datos y lo reseteamos
    let divDatos = document.getElementById("datos")
    divDatos.textContent = "";

    // Creamos el <p>
    let pDatos = document.createElement("p")

    // Ahora el contenido de va a ser la info del bus
    pDatos.textContent = bus1.mostrarInfo();

    // Añadimos el <p> al <div>
    divDatos.append(pDatos);
}

 