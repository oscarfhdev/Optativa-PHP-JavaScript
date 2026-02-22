// Variable global donde almacenamos los CDs
let catalogoCDs = [];

// Al cargar la página miramos si hay algo guardado en el localStorage
document.addEventListener("DOMContentLoaded", () => {
    const memoriaLocal = localStorage.getItem("catalogoCDs");

    if (memoriaLocal) {
        // Si hay datos guardados los parseamos y los pintamos
        catalogoCDs = JSON.parse(memoriaLocal);
        pintarCDs();
    } else {
        // Si no hay nada guardado, cargamos desde el fichero XML
        cargarDesdeFichero();
    }
});

// Carga los CDs desde el XML y los filtra igual que en el ejercicio 2
async function cargarDesdeFichero() {
    try {
        const respuesta = await fetch("catalogo.xml");

        if (!respuesta.ok) throw new Error("Error al cargar el XML");

        // Parseamos el texto del XML
        const cadenaXml = await respuesta.text();
        const parser = new DOMParser();
        const documentoXml = parser.parseFromString(cadenaXml, "application/xml");
        const todosLosCds = documentoXml.getElementsByTagName("CD");

        // Vaciamos la lista para no duplicar si le das al botón varias veces
        catalogoCDs = [];

        for (let i = 0; i < todosLosCds.length; i++) {
            const anio = parseInt(todosLosCds[i].getElementsByTagName("YEAR")[0].textContent);

            // Solo metemos los de 1990 en adelante
            if (anio >= 1990) {
                let nuevoCD = {
                    id: i, // Usamos el índice como id para poder borrar luego
                    titulo: todosLosCds[i].getElementsByTagName("TITLE")[0].textContent,
                    artista: todosLosCds[i].getElementsByTagName("ARTIST")[0].textContent,
                    anio: anio
                };

                catalogoCDs.push(nuevoCD);
            }
        }

        // Guardamos en localStorage y mostramos por pantalla
        guardarMemoria();
        pintarCDs();

    } catch (error) {
        console.error("Error accediendo al fichero XML:", error);
        document.getElementById("resultado").innerHTML = "<p id='error'>Error al cargar el archivo catalogo.xml.</p>";
    }
}

// Guarda el array en el localStorage convertido a texto con JSON.stringify
function guardarMemoria() {
    localStorage.setItem("catalogoCDs", JSON.stringify(catalogoCDs));
}

// Borra un CD concreto del array usando filter y su id
function borrarCD(idAborrar) {
    catalogoCDs = catalogoCDs.filter(cd => cd.id !== idAborrar);
    // Actualizamos el localStorage
    guardarMemoria();
    // Repintamos para que desaparezca de la pantalla
    pintarCDs();
}

// Borra todo el localStorage y vacía el array
function borrarAlmacenamiento() {
    localStorage.removeItem("catalogoCDs");
    catalogoCDs = [];
    pintarCDs();
}

// Pinta las tarjetas de los CDs que haya en el array
function pintarCDs() {
    let contenidoFinal = "";

    if (catalogoCDs.length === 0) {
        contenidoFinal = "<p>No hay CDs guardados. Pulsa 'Volver a cargar' para traerlos del XML.</p>";
    } else {
        // Recorremos el array y creamos una tarjeta por cada CD
        catalogoCDs.forEach(cd => {
            contenidoFinal += `
                <div class="tarjetaObjeto">
                    <h3>${cd.titulo}</h3>
                    <p class="autor">${cd.artista}</p>
                    <p>Año: ${cd.anio}</p>
                    <button onclick="borrarCD(${cd.id})">Borrar este CD</button>
                </div>
            `;
        });
    }
    document.getElementById("resultado").innerHTML = contenidoFinal;
}
