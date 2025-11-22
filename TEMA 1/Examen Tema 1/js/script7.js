class Asingatura{
    constructor(nombre, numeroCreditos, numeroMaximoAlumos){
        this.nombre = nombre;
        this.numeroCreditos = numeroCreditos;
        this.numeroMaximoAlumos = numeroMaximoAlumos;
    }

    toString(){
        const divPrincipal = document.createElement("div");

        const pNombre = document.createElement("p");
        pNombre.textContent = "Nombre de la asignatura: " + this.nombre;

        const pNumeroCreditos = document.createElement("p");
        pNumeroCreditos.textContent = "Número de creditos: " + this.numeroCreditos;

        const pNumeroMaximoAlumnos = document.createElement("p");
        pNumeroMaximoAlumnos.textContent = "Número máximo de alumnos: " + this.numeroMaximoAlumos;
;

        divPrincipal.append(pNombre);
        divPrincipal.append(pNumeroCreditos);
        divPrincipal.append(pNumeroMaximoAlumnos)

        return divPrincipal;
    }
      
}

class Curso{
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    anadirAsignatura(asignaturaAnadir){
        for (const asignatura of this.asignaturas) {
            if (asignaturaAnadir ==  asignatura){
                console.log("No es posible añadir esta asignatura porque ya existe")
                return;
            }

            this.asignaturas.push(asignaturaAnadir);
            
        } 
    }

    eliminarAsignatura(asignaturaEliminar){
        let indice = this.asignaturas.indexOf(asignaturaEliminar);
        if(indice != -1){
            this.asignaturas.splice(asignaturaAnadir, 1);
        }
    }

    toString(){
        const divPrincipal = document.createElement("div");

        const pNombre = document.createElement("p");
        pNombre.textContent = "Nombre del curso: " + this.nombre;

        const pNumeroAsignaturas = document.createElement("p");
        pNumeroAsignaturas.textContent = "Número de asignaturas: " + this.asignaturas.length;
;

        divPrincipal.append(pNombre);
        divPrincipal.append(pNumeroAsignaturas);
        return divPrincipal;
    }
}


const asignatura1 = new Asingatura("AaD", 30, 20);
const asignatura2 = new Asingatura("PSP", 50, 18);
const asignatura3 = new Asingatura("DIN", 40, 17);
const asignatura4 = new Asingatura("SGE", 30, 19);

const asignaturas = [asignatura1, asignatura2, asignatura3, asignatura4];

let curso = new Curso("2DAM", asignaturas)

const divResultado = document.getElementById("resultado");

function mostrarCurso(){
    divResultado.textContent = "";
    divResultado.append(curso.toString())
}

function listarAsignaturas(){
    const divPrincipal = document.createElement("div") ;
    for (const asignatura of asignaturas) {
        divPrincipal.append(asignatura.toString())
    }
    divResultado.append(divPrincipal);
}

function mostrarError(error){
    const pError = document.getElementById("error");
    pError.textContent = error ;
}
