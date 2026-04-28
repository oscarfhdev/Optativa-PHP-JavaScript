<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>
<body>
 
    <form action="ejercicio5.php" method="POST">
        <label for="palabra">Introduce la palabra a buscar:</label>
        <input type="text" name="palabra" id="palabra" required>
        <br>
        <input type="submit" value="Enviar">
    </form>

    <?php
        $texto = "El oeste de Texas divide la frontera entre Mexico y Nuevo México. Es muy bella pero aspera, llena de cactus, en esta region se encuentran las Davis Mountains. Todo el terreno esta lleno de piedra caliza, torcidos arboles de mezquite y espinosos nopales. Para admirar la verdadera belleza desertica, visite el Parque Nacional de Big Bend, cerca de Brownsville. Es el lugar favorito para los excurcionistas, acampadores y entusiastas de las rocas. Pequeños pueblos y ranchos se encuentran a lo largo de las planicies y cañones de esta region. El area solo tiene dos estaciones, tibia y realmente caliente. La mejor epoca para visitarla es de Diciembre a Marzo cuando los dias son tibios, las noches son frescas y florecen las plantas del desierto con la humedad en el aire."; 

        echo "$texto <br>";
        if(isset($_POST['palabra'])){
            $palabraBuscada = $_POST['palabra'];
            $numeroApariciones = substr_count($texto, $palabraBuscada);
            echo "La palabra $palabraBuscada aparece un total de $numeroApariciones veces";
        }
        
    ?>

    
</body>
</html>