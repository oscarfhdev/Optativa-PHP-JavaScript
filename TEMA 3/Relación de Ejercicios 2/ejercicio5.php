<?php
// Array con diferentes elementos
$elementos = ["Manzana", "Plátano", "Naranja", "Fresa", "Uva", "Pera", "Sandía"];

// Función para mostrar el array por pantalla
function mostrarArray($array) {
    foreach ($array as $elemento) {
        echo "$elemento ";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 5 - Eliminar Elemento</title>
</head>
<body>
    <h1>Ejercicio 5</h1>
    <p>5 - Crea un array con diferentes elementos, después crea un formulario que introduzca el nombre de uno de los elementos y este se elimine del vector.</p>

    <!-- Mostramos el array actual -->
    <div id="resultado">
        <p>Array actual:</p>
        <p><?php mostrarArray($elementos); ?></p>
    </div>

    <!-- Formulario para introducir el nombre del elemento a eliminar -->
    <form method="POST">
        <input type="text" name="nombre" placeholder="Nombre del elemento" required>
        <button type="submit">Eliminar</button>
    </form>

    <?php
    // Comprobamos si se envió el formulario
    if (isset($_POST["nombre"]) && $_POST["nombre"] != "") {
        $nombre = $_POST["nombre"];
        $encontrado = false;

        // Recorremos el array buscando el elemento
        for ($i = 0; $i < count($elementos); $i++) {
            if ($elementos[$i] == $nombre) {
                // Lo eliminamos con array_splice
                array_splice($elementos, $i, 1);
                $encontrado = true;
            }
        }

        if ($encontrado) {
            echo "<div id='resultado'>";
            echo "<p>Se ha eliminado '$nombre'. Array nuevo:</p>";
            echo "<p>"; mostrarArray($elementos); echo "</p>";
            echo "</div>";
        } else {
            echo "<div id='error'><p>'$nombre' no se ha encontrado en el array.</p></div>";
        }
    }
    ?>
</body>
</html>
