// Creamos la clase alumno
class Alumno {

    // Aquí tenemos el constructor, las variables se declaran dentro
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

class Curso{
    // Aquí tenemos el constructor, ponemos el nombre y el array de alumnos
    constructor(nombreCurso, aula, alumnos) {
        this.nombreCurso = nombreCurso;
        this.aula = aula;
        this.alumnos = alumnos;
    }

    mostrarAlumnosCurso(){
        let divResultado = document.getElementById("resultado");

        for (const alumno of this.alumnos) {
            divResultado.append(alumno.devolverNombreCompleto());
            divResultado.append(alumno.devolverCalificaciones());
            divResultado.append(document.createElement("br"));
        }
    }

    mostrarInformacionCurso(){
        let divResultado = document.getElementById("resultado");
        divResultado.textContent = "";
        let pElement = document.createElement("p");
        pElement.textContent = "Nombre del Curso: " + this.nombreCurso;
        divResultado.appendChild(pElement);
        let pElement2 = document.createElement("p")
        pElement2.textContent = "Aula: " + this.aula;
        divResultado.appendChild(pElement2);
        divResultado.appendChild(document.createElement("br"));
        this.mostrarAlumnosCurso()
    }
}

// Creamos varios alumnos con la clase Alumno
const alumno1 = new Alumno("Óscar Fernández", {
    // Le pasamos los calificiones mediante clave-valor
    DIN: 9.5,
    AaD: 6.0,
    Opt: 10.0,
    IPE: 9.0,
    Ingles: 8.0
});

const alumno2 = new Alumno("María López", {
    DIN: 7.5,
    AaD: 8.0,
    Opt: 6.5,
    IPE: 9.0,
    Ingles: 7.0
});

const alumno3 = new Alumno("Javier Gómez", {
    DIN: 5.0,
    AaD: 6.5,
    Opt: 7.0,
    IPE: 8.0,
    Ingles: 6.0
});

const alumno4 = new Alumno("Lucía Martín", {
    DIN: 9.0,
    AaD: 9.5,
    Opt: 8.5,
    IPE: 9.0,
    Ingles: 10.0
});

const alumno5 = new Alumno("Carlos Sánchez", {
    DIN: 6.0,
    AaD: 7.0,
    Opt: 5.5,
    IPE: 6.5,
    Ingles: 6.0
});

const alumno6 = new Alumno("Elena Torres", {
    DIN: 8.0,
    AaD: 8.5,
    Opt: 9.0,
    IPE: 7.5,
    Ingles: 8.0
});


const alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6];
// Ahora creamos el curso

const curso1 = new Curso("Desarrollo de Aplicaciones Multiplataforma", "2DAM", alumnos)

// Función que se llama desde el botón cada vez que se hace click
function mostrarDatosCurso(){
    curso1.mostrarInformacionCurso();
}