// Función asíncrona que lee el JSON de superhéroes y filtra los que tienen 3 o menos poderes
async function cargarSuperheroes() {
    try {
        // Hacemos fetch del archivo supers.json
        const respuesta = await fetch("supers.json");

        if (!respuesta.ok) throw new Error("No se pudo acceder a supers.json");

        // Usamos .json() directamente en vez de .text() + JSON.parse, que hace lo mismo pero más rápido
        const datosJSON = await respuesta.json();

        // Accedemos al array de miembros que está dentro del objeto principal
        const listaHeroes = datosJSON.members;

        // Filtramos: solo nos quedamos con los que tengan 3 poderes o menos
        const heroesFiltrados = listaHeroes.filter(heroe => heroe.powers.length <= 3);

        let htmlTarjetas = "";

        if (heroesFiltrados.length === 0) {
            htmlTarjetas = "<p>No se encontraron héroes con 3 o menos poderes.</p>";
        } else {
            // Creamos una tarjeta por cada héroe que pase el filtro
            heroesFiltrados.forEach(heroe => {
                // Montamos la lista de poderes como items de una <ul>
                const itemsPoderes = heroe.powers.map(poder => `<li>${poder}</li>`).join("");

                htmlTarjetas += `
                    <div class="tarjetaObjeto" style="flex: 1; min-width: 250px;">
                        <h3>${heroe.name}</h3>
                        <p><b>Identidad:</b> ${heroe.secretIdentity}</p>
                        <p><b>Edad:</b> ${heroe.age}</p>
                        <p><b>Poderes:</b></p>
                        <ul>
                            ${itemsPoderes}
                        </ul>
                    </div>
                `;
            });
        }

        // Pintamos las tarjetas en el div resultado
        document.getElementById("resultado").innerHTML = htmlTarjetas;

    } catch (error) {
        console.error("Error leyendo superhéroes:", error);
        document.getElementById("resultado").innerHTML = "<p id='error'>Error al procesar el fichero JSON.</p>";
    }
}
