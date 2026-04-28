<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
    <style>
        div{
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
    <?php
        $numeroDivs = 5;

        for ($i=0; $i < $numeroDivs ; $i++) { 
            $alea=rand(0,255);
            $alea2=rand(0,255);
            $alea3=rand(0,255);
            echo "<div style='background-color:rgb($alea, $alea2, $alea3)'></div>";
        }
    ?>
</body>
</html>