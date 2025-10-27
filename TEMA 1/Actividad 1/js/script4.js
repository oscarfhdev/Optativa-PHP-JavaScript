    function sumarCampos() {
        const v1 = parseFloat(document.getElementById('valor1').value);
        const v2 = parseFloat(document.getElementById('valor2').value);



        dibujarTabla(v1, v2);
    }

    function dibujarTabla(v1, v2){
        // Convertimos los valores a float
        const suma = parseFloat(v1) + parseFloat(v2);

        const tabla = `<table id='tablaFormal'>
                <tr><td>Num 1: </td><td>`+ v1 +`</td></tr>
                <tr><td>Num 2: </td><td>`+ v2 +`</td></tr>
                <tr><td>Suma: </td><td>`+ suma +`</td></tr>
                </table>`;

        document.getElementById('divTabla').innerHTML= tabla;
    }