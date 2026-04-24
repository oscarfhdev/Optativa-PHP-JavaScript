<?php
// Vector donde almacenamos los números primos
$primos = [];

// Recorremos del 2 al 100 (el 1 no cuenta como primo)
for ($i = 2; $i <= 100; $i++) {

    // Suponemos que el número es primo
    $esPrimo = true;

    // Intentamos dividirlo entre todos los números anteriores a él
    for ($j = 2; $j < $i; $j++) {
        // Si es divisible, no es primo
        if ($i % $j == 0) {
            $esPrimo = false;
            break; // Ya no hace falta seguir
        }
    }

    // Si sigue siendo true, es primo y lo metemos en el vector
    if ($esPrimo == true) {
        $primos[] = $i;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 4 - Números Primos</title>
</head>
<body>
    <h1>Ejercicio 4</h1>
    <p>4 - Crea un programa que imprima por pantalla los números primos comprendidos entre el 1 y el 100 (el número 1 no cuenta) en una tabla. Debes generar un vector denominado primos que los almacene.</p>

    <div id="resultado">
        <table>
            <tr>
                <td>Posición</td>
                <td>Número Primo</td>
            </tr>
            <?php
            // Recorremos el vector de primos y los mostramos en la tabla
            foreach ($primos as $indice => $numero) {
                $posicion = $indice + 1;
                echo "<tr>";
                echo "<td>$posicion</td>";
                echo "<td>$numero</td>";
                echo "</tr>";
            }
            ?>
        </table>
    </div>
</body>
</html>
