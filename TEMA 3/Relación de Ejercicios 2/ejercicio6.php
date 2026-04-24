<?php
// Función para mostrar el array por pantalla
function mostrarArray($array) {
    foreach ($array as $indice => $valor) {
        echo "Posición " . ($indice + 1) . ": $valor <br>";
    }
}

// Función que ordena el vector de menor a mayor
function ordenarVector($vector) {
    // Copiamos el vector para no modificar el original
    $vectorOrdenado = $vector;

    // Usamos sort() para ordenar de menor a mayor
    sort($vectorOrdenado);

    return $vectorOrdenado;
}

// Generamos un vector con 20 números aleatorios
$vector = [];
for ($i = 0; $i < 20; $i++) {
    $vector[] = rand(1, 100);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 6 - Ordenar Vector</title>
</head>
<body>
    <h1>Ejercicio 6</h1>
    <p>6 - Genera un vector con 20 números generados aleatoriamente, después muéstralo por pantalla, por último crea una función que reciba un vector y lo devuelva ordenado de menor a mayor.</p>

    <div id="resultado">
        <!-- Mostramos el vector original -->
        <p>Vector original:</p>
        <?php mostrarArray($vector); ?>

        <br>

        <!-- Mostramos el vector ordenado -->
        <p>Vector ordenado:</p>
        <?php mostrarArray(ordenarVector($vector)); ?>
    </div>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>
