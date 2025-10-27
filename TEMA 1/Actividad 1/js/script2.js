// Podemos añadir una clase y nos ahorramos código
const tabla = `<table id='tablaPersonalizada'> 
             <tr><td>Fila 1</td></tr>
             <tr><td>Fila 2</td></tr>
             </table>`;

function introducirTabla() {
    document.getElementById('divTabla').innerHTML= tabla;
}

