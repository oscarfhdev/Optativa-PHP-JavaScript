let asignaturas = [];

function insertarAsignaturas() {
    // 1. Leer los valores de los inputs
    const curso  = document.getElementById("inputCurso").value;
    const nombre = document.getElementById("inputNombre").value;
    const nota  = document.getElementById("inputNota").value;

    // 2. Crear un objeto
    let asignatura = {
        curso: curso,
        artista: nombre,
        precio: nota,
    };

    // 3. Añadirlo al array
    asignaturas.push(asignatura);

    // 4. Limpiar los inputs
    document.getElementById("inputCurso").value = "";
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputNota").value = "";

    guardarDatos();
}

function guardarDatos(){
    localStorage.setItem("listaAsignaturas", JSON.stringify(asignaturas));
}
