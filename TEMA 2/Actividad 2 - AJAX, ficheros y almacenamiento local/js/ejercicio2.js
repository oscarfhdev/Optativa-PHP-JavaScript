// Función asíncrona que carga el XML y filtra los CDs a partir de 1990
async function cargarCDs() {
    try {
        // Pedimos el fichero catalogo.xml
        const respuesta = await fetch("catalogo.xml");

        if (!respuesta.ok) {
            throw new Error("Fallo descargando el XML");
        }

        // Convertimos la respuesta a texto y luego la parseamos como XML
        const cadenaXml = await respuesta.text();
        const parser = new DOMParser();
        const documentoXml = parser.parseFromString(cadenaXml, "application/xml");

        // Sacamos todos los CDs del documento
        const cds = documentoXml.getElementsByTagName("CD");

        let htmlResultado = "";
        let hayResultados = false;

        // Recorremos cada CD uno a uno
        for (let i = 0; i < cds.length; i++) {
            // Buscamos la etiqueta YEAR dentro del CD y la pasamos a número
            const anioStr = cds[i].getElementsByTagName("YEAR")[0].textContent;
            const anio = parseInt(anioStr);

            // Filtramos solo los que sean de 1990 en adelante
            if (anio >= 1990) {
                hayResultados = true;
                const titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
                const artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;

                // Montamos la tarjeta con los datos del CD
                htmlResultado += `
                    <div class="tarjetaObjeto">
                        <h3>${titulo}</h3>
                        <p class="autor">${artista}</p>
                        <p>Año: ${anio}</p>
                    </div>
                `;
            }
        }

        // Si no encontramos ninguno que cumpla el filtro
        if (!hayResultados) {
            htmlResultado = "<p>No se encontraron CDs de 1990 en adelante.</p>";
        }

        // Volcamos todo el HTML generado en el div resultado
        document.getElementById("resultado").innerHTML = htmlResultado;

    } catch (error) {
        console.error("Error cargando CDs:", error);
        document.getElementById("resultado").innerHTML = "<p id='error'>Error al cargar los datos.</p>";
    }
}
