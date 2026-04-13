<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $valor1=20;
        $valor2=&$valor1;

        echo "Esto es el contenido de la variable 1: ", $valor1 ," y esto es el contenido de la variable 2: ", $valor2;
        /* 
            Aunque parezca que guarda lo mismo en realidad guarda diferentes valor, se utiliza como una variable normal
            Si le cambiamos el valor a valor2, vemos que tambien se cambia en valor 1
        */

        $valor2=80;

        echo "<br>Esto es el contenido de la variable 1: ", $valor1 ," y esto es el contenido de la variable 2: ", $valor2;

    ?>
</body>
</html>