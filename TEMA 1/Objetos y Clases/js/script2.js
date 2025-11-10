// Creamos la clase alumno
class Alumno {

    // Aquí tenemos el constructor, las variables se declaran dentro, en este caso son públicas
    constructor(nombreCompleto, calificaciones) {
        this.nombreCompleto = nombreCompleto;
        this.calificaciones = calificaciones;
    }

   //Funciones visibles por defecto
    devolverNombreCompleto(){
        // Creamos el div y el p
        let divNombreCompleto = document.createElement("div")
        let pNombreCompleto = document.createElement("p")

        // Le configuramos el texto al p, añadiendo el nombre
        pNombreCompleto.textContent= "Nombre completo: " + this.nombreCompleto;

        divNombreCompleto.appendChild(pNombreCompleto); // Se añade p>div

        return divNombreCompleto;
    }

    devolverCalificaciones(){
        // Creamos el div de calificaciones y la variable suma
        let divCalificaciones = document.createElement("div")
        let suma = 0;

        // Ahora recorremos el objeto de calificaciones
        for (const modulo in this.calificaciones) {

            // Creamos el párrafo
            let p = document.createElement("p");
            // Asignamos el contenido
            p.textContent = modulo + ": " + this.calificaciones[modulo];
            // Lo agregamos al div
            divCalificaciones.appendChild(p);

            // Sumar la nota para calcular media
            suma += this.calificaciones[modulo];
        }

        // Creamos el párrafo con la media
        let pMedia = document.createElement("p");

        // Aquí calculamos la media, dividiendo la suma entre la cantidad de asignaturas (también podemos utilizar Objects.value)
        pMedia.textContent = "Media del curso: " + (suma / Object.keys(this.calificaciones).length);

        divCalificaciones.appendChild(pMedia); // Añadimos el <p> de media al div

        return divCalificaciones;
    }

    // Se llamará desde otro método al pulsar el botón
    mostrarDatosAlumno(){
        // Guardamos el div del nombre y de las calificaciones
        let divNombreCompleto = this.devolverNombreCompleto(); 
        let divCalificaciones = this.devolverCalificaciones();

        // Obtenemos el div del resultado y lo reseteamos
        const divResultado = document.getElementById("resultado");
        divResultado.textContent= "";

        // Ahora al div de resultado le añadimos los dos div con el contenido
        divResultado.appendChild(divNombreCompleto);
        divResultado.appendChild(divCalificaciones);
    }
}

// Creamos un alumno con la clase Alumno
const alumno1 = new Alumno("Óscar Fernández", {
    // Le pasamos los calificiones mediante clave-valor
    DIN: 9.5,
    AaD: 6.0,
    Opt: 10.0,
    IPE: 9.0,
    Ingles: 8.0
});

// Función que se llama desde el botón cada vez que se hace click
function mostrarAlumno(){
    alumno1.mostrarDatosAlumno();
}