// Función para crear el objeto y mostrarlo
function crearObjeto() {
    // Obtenemos los valores de los inputs
    const inputTitulo = document.getElementById('titulo');
    const inputCuerpo = document.getElementById('cuerpo');
    const inputAutor = document.getElementById('autor');

    let titulo = inputTitulo.value;
    let cuerpo = inputCuerpo.value;
    let autor = inputAutor.value;

    // Comprobamos que no estén vacíos
    if (titulo != "" && cuerpo != "" && autor != "") {
        // Limpiamos el mensaje de error
        document.getElementById('error').textContent = "";

        // Creamos el objeto literal con los campos solicitados
        let post = {
            titulo: titulo,
            cuerpo: cuerpo,
            autor: autor
        };

        // Llamamos a la función para mostrar el objeto en el DOM
        mostrarObjeto(post);

        // Limpiamos los inputs
        inputTitulo.value = "";
        inputCuerpo.value = "";
        inputAutor.value = "";

    } else {
        // Mostramos error si falta algún dato
        document.getElementById('error').textContent = "Por favor, rellena todos los campos.";
    }
}

// Función auxiliar para incrustar el objeto en el HTML
function mostrarObjeto(obj) {
    // Obtenemos el contenedor donde irán los objetos
    let container = document.getElementById('containerObjetos');

    // Creamos un div para el objeto (tipo tarjeta) y le asignamos la clase
    let divObjeto = document.createElement('div');
    divObjeto.classList.add('tarjetaObjeto');

    // Creamos los elementos para mostrar los datos
    let h3Titulo = document.createElement('h3');
    h3Titulo.textContent = "Título: " + obj.titulo;

    let pCuerpo = document.createElement('p');
    pCuerpo.textContent = "Cuerpo: " + obj.cuerpo;

    let pAutor = document.createElement('p');
    pAutor.textContent = "Autor: " + obj.autor;
    pAutor.classList.add('autor'); // Clase para estilo itálico

    // Creamos el botón de borrar
    let botonBorrar = document.createElement('button');
    botonBorrar.textContent = "Borrar Objeto";
    
    // Funcionalidad de borrar
    botonBorrar.addEventListener('click', function() {
        divObjeto.remove();
    });

    // Añadimos todo al div del objeto
    divObjeto.appendChild(h3Titulo);
    divObjeto.appendChild(pCuerpo);
    divObjeto.appendChild(pAutor);
    divObjeto.appendChild(botonBorrar);

    // Añadimos el objeto al contenedor principal (sin borrar los anteriores)
    container.appendChild(divObjeto);
}
