<?php
// Numero del que queremos calcular la tabla de multiplicar
$numeroAMultiplicar = 7; 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 3 - Tabla Multiplicar</title>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <p>3 - Crea una página que imprima desde un módulo PHP una tabla, cuyo contenido sea la tabla de multiplicar de un número, tiene que tener 3 columnas y 10 filas (del 1 al 10).</p>

    <div id="resultado">
        <table>
            <tr>
                <td>Número</td>
                <td>Multiplicador</td>
                <td>Resultado</td>
            </tr>
            
            <?php
            // Recorremos del 1 al 10 para crear las 10 filas
            for ($i = 1; $i <= 10; $i++) {
                
                // Hacemos el cálculo
                $resultadoMultiplicacion = $numeroAMultiplicar * $i;
                
                // Mostramos los resultados en una fila, dentro las celdas
                echo "<tr>";
                echo "<td>$numeroAMultiplicar</td>";
                echo "<td>x $i</td>";
                echo "<td>$resultadoMultiplicacion</td>";
                echo "</tr>";
            }
            ?>
        </table>
    </div>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>