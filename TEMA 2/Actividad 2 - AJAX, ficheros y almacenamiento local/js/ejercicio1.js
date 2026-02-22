// Función asíncrona que carga el fichero XML usando fetch en vez de XMLHttpRequest
async function cargarFichero() {
    try {
        // Hacemos la petición del fichero catalogo.xml y esperamos la respuesta
        const respuesta = await fetch("catalogo.xml");

        // Comprobamos que la respuesta sea correcta
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo XML");
        }

        // Sacamos el contenido como texto
        const datosTexto = await respuesta.text();

        // Creamos un parser para convertir el texto a un documento XML
        const parser = new DOMParser();
        const documentoXml = parser.parseFromString(datosTexto, "application/xml");

        // Buscamos todos los nodos ARTIST dentro del XML
        const artistas = documentoXml.getElementsByTagName("ARTIST");

        let textoHtml = "";

        // Recorremos cada artista y lo añadimos al string con un salto de línea
        for (let i = 0; i < artistas.length; i++) {
            textoHtml += artistas[i].childNodes[0].nodeValue + "<br>";
        }

        // Mostramos el resultado en el div
        document.getElementById("demo").innerHTML = textoHtml;

    } catch (error) {
        // Si algo falla lo mostramos por consola y en pantalla
        console.error("Error al cargar el catálogo:", error);
        document.getElementById("demo").innerHTML = "<span id='error'>Error al cargar los datos.</span>";
    }
}
