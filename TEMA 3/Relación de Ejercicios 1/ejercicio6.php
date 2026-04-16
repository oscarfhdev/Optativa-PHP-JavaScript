<?php
// Radio de la circunferencia dado
$radio = 6; 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 6 - Área Circunferencia</title>
</head>
<body>
    <h1>Ejercicio 6</h1>
    <p>6 - Crea un módulo que reciba el radio de una circunferencia y te devuelva el área del de la misma.</p>

    <div id="resultado">
        <?php
        // Calculamos el área: Pi * radio al cuadrado
        $area = pi() * pow($radio, 2);
        
        // Mostramos el radio de la circunferencia
        echo "<p>Radio de la circunferencia: $radio</p>";
        echo "<p>El área de la circunferencia es: " . round($area, 2) . "</p>"; // El area la redondeamos
        ?>
    </div>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>
