cargarJSON();

const contenedorPrincipal = document.getElementById("main-container");

const divJapon = document.getElementById("japon");
const divFinlandia = document.getElementById("finlandia");
const divEeuu = document.getElementById("eeuu");
const divCoreasur = document.getElementById("coreasur");
const divChina = document.getElementById("china");

async function cargarJSON() {
    // 1. Cargar fichero
    const response = await fetch("movil.json");
    const texto = await response.text();

    // 2. Parsear a objeto JavaScript
    const moviles = JSON.parse(texto);

    // 3. Recorrer directamente como array de objetos
    for (let i = 0; i < moviles.length; i++) {
        let marca = moviles[i].marca;       
        let anio_fundacion  = moviles[i].anio_fundacion;  
        let lugar_origen  = moviles[i].lugar_origen;  

        let movil = document.createElement("p");

        movil.innerHTML = marca + " | " + anio_fundacion;
        

        if(lugar_origen == "Japón"){
            divJapon.appendChild(movil);
        }

        else if(lugar_origen == "Finlandia"){
            divFinlandia.appendChild(movil);
        }
        
        else if(lugar_origen == "Estados Unidos"){
            divEeuu.appendChild(movil);
        }

        else if(lugar_origen == "Corea del Sur"){
            divCoreasur.appendChild(movil);
        }

        else if(lugar_origen == "China"){
            divChina.appendChild(movil);
        }
    }
}