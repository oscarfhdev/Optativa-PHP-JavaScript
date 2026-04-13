<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $n1=30;
        $nf1=123.45;
        $nf2=12.3e-4;
        $nf3=12.3e4;

        echo "El numero entero 1: ", $n1 , " los números en coma flotante: 1: ", $nf1, " 2: ", $nf2, " 3: ", $nf3; 

        $nombre="Pedro";
        $opcion=false; //Lo mismo que pasa con la función isset, si existe o es verdadero devuelve 1, sino no devuelve nada

        echo "<br> Mi nombre es $nombre y la opcion es ", $opcion;

    ?>
</body>
</html>