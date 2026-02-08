// Función que se llama desde el botón del HTML para añadir una tarea
function anyadirTarea() {
    // Obtenemos el elemento del input a través del ID
    const inputTarea = document.getElementById('entradaTexto');
    
    // Obtenemos el valor del input y lo enviamos a una variable
    let texto = inputTarea.value;

    // Condición para comprobar que el texto no esté vacío
    if (texto != "") {
        // Limpiamos el error si lo hubiera
        document.getElementById('error').textContent = "";

        // Obtenemos la lista donde añadiremos los elementos
        let lista = document.getElementById('listaTareas');

        // Creamos el elemento de la lista (li)
        let elementoLista = document.createElement('li');

        // Creamos un span para el texto, que será editable
        let spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        // Le damos un estilo inline para que quede bien
        spanTexto.style.marginRight = "10px";
        spanTexto.style.padding = "5px";

        // Creamos el botón de eliminar
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = "X";
        botonEliminar.classList.add('deleteBtn'); // Clase para el estilo rojo
        // Añadimos el evento para borrar el elemento de la lista al hacer click
        botonEliminar.addEventListener('click', function() {
            elementoLista.remove();
        });

        // Creamos el botón de modificar (Editar)
        let botonModificar = document.createElement('button');
        botonModificar.textContent = "Editar";
        botonModificar.classList.add('editBtn');
        // Añadimos margenes para que no se peguen
        botonModificar.style.marginLeft = "5px";
        botonEliminar.style.marginLeft = "5px";

        // Añadimos el evento para modificar la tarea al hacer click (Lógica Inline)
        botonModificar.addEventListener('click', function() {
            // Comprobamos el texto del botón para saber en qué estado estamos
            if(botonModificar.textContent === "Editar") {
                // CAMBIAMOS A MODO EDICIÓN
                // Hacemos que el span sea editable
                spanTexto.contentEditable = true;
                // Ponemos el foco en el span para escribir directamente
                spanTexto.focus();
                // Cambiamos el texto del botón a Guardar
                botonModificar.textContent = "Guardar";
                // Añadimos un borde para indicar que se puede escribir
                spanTexto.style.borderBottom = "1px solid black";
                spanTexto.style.backgroundColor = "white"; // Para que se note más

            } else {
                // CAMBIAMOS A MODO GUARDAR
                // Desactivamos la edición
                spanTexto.contentEditable = false;
                // Volvemos a poner el texto del botón en Editar
                botonModificar.textContent = "Editar";
                // Quitamos el estilo de edición
                spanTexto.style.borderBottom = "none";
                spanTexto.style.backgroundColor = "transparent";
            }
        });

        // Añadimos los elementos al li (span y botones)
        elementoLista.appendChild(spanTexto);
        elementoLista.appendChild(botonModificar);
        elementoLista.appendChild(botonEliminar);

        // Añadimos el li a la lista (ul)
        lista.appendChild(elementoLista);

        // Limpiamos el input después de añadir la tarea
        inputTarea.value = "";

    } else {
        // Si el campo está vacío mostramos el mensaje de error
        document.getElementById('error').textContent = "Debes introducir un texto para la tarea.";
    }
}
