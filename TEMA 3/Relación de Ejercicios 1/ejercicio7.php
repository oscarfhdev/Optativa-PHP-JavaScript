<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ejercicio 7 - Divs Aleatorios</title>
</head>
<body>
    <h1>Ejercicio 7</h1>
    <p>7 - Crea una página que genere 10 divs diferentes, cada div tendrá el fondo de un color generado aleatoriamente.</p>

    <!-- Le damos extilos con flex para que se vea bien y separación -->
    <div id="resultado" style="display: flex; gap: 10px; flex-wrap: wrap;">
        <?php
        // Bucle para generar 10 divs
        for ($i = 1; $i <= 10; $i++) {
            
            // Generamos un color aleatorio para cada div en cada iteración
            $rojo = rand(0, 255);
            $verde = rand(0, 255);
            $azul = rand(0, 255);
            
            // Mostramos el div con el color de fondo y un tamaño fijo
            echo "<div style='background-color: rgb($rojo, $verde, $azul); width: 80px; height: 80px; border-radius: 8px;'></div>";
        }
        ?>
    </div>

    <br>
    <!-- Este button refresca la página -->
    <button onclick="location.reload()">Probar de nuevo</button>
</body>
</html>
