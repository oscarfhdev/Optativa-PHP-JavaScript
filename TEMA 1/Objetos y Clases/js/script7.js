// Creamos la clase Persona
class Persona {

    // Lo hacemos privado con #, válido desde ES2022
    #nombreCompleto;
    #sesiones;

    // Aquí tenemos el constructor, las variables se declaran dentro
    constructor(nombreCompleto, sesiones) {
        this.#nombreCompleto = nombreCompleto;
        this.#sesiones = sesiones;
    }

    // Métodos públicos que acceden a las variables privadas (getters y setters)
    getNombreCompleto() {
        return this.#nombreCompleto;
    }

    getSesiones(){
        return this.#sesiones;
    }

    // Añade la nueva distancia en km al array con el método push (al final)
    anadirSesion(distanciaNuevaSesion){
        this.#sesiones.push(distanciaNuevaSesion);
    }


    // Método que va a devolver la media en km de las sesiones
    devolverMedia(){
        // Creamos la variable suma
        let suma = 0;

        // Ahora recorremos el objeto de las sesiones deportivas
        for (const sesion of this.#sesiones) {
            // Sumar la nota para calcular media
            suma += sesion;
        }

        // Creamos el párrafo con la media, aquí calculamos la media, dividiendo la suma entre la cantidad de asignaturas (también podemos utilizar Objects.value)
        let media = "Media: " + (suma / this.#sesiones.length);

        return media;
    }
}

// Creamos nuestra instancia de persona con valores por defecto
const persona = new Persona("Óscar Fernández Hernández", [4, 5, 9])


// Fucnión que se llama desde el botón añadir sesión
function anadirNuevaSesion(idInputImporte){
    // Obtenemos el imput y el valor
    const inputKilometrosSesion = document.getElementById(idInputImporte);
    const valorKilometrosSesion = +inputKilometrosSesion.value;

    // Hacemos una comprobación, no aceptamos que los kilómetros sean < 0
    if(valorKilometrosSesion <= 0){
        mostrarError("La cantidad no puede ser menor o igual a 0, ni estar vacía");
    }
    else{
        // Si el valor es correcto se guarda, además se limpian los campos y se actualiza el saldo en pantalla
        persona.anadirSesion(valorKilometrosSesion);
        cargarDatos();
        inputKilometrosSesion.value = "";
        mostrarError("")
    }

}

// Método que se llama desde el botón de calcular la media de las sesiones
function mostrarMedia(idPMedia){
    document.getElementById(idPMedia).textContent = persona.devolverMedia() + " km por sesión";
}


// Método que se llama desde el método añadir sesión en el caso de haber errores
function mostrarError(mensaje) {
    return document.getElementById("error").textContent = mensaje;
}

// Función que se llama para actualizar los datos en el HTML, actualiza nombre y las sesiones cada vez que se llama. Automáticamente se ejecuta al inicaiar
function cargarDatos(){
    document.getElementById("nombrePersona").textContent = "Nombre del cliente: " + persona.getNombreCompleto();
    document.getElementById("sesiones").textContent = "Sesiones registadas (km): " + persona.getSesiones();
}