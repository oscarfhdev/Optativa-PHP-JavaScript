<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $var1=6; // 6 en binario es 110
        $xorlog=3; // 3 en binario es 011
        $orlog=3;
        $andlog=3;

        $xorlog ^= $var1; // Esto seria 101 que es 5 en binario
        $orlog |= $var1; // En este caso seria 7.
        $andlog &= $var1; // En este caso serian 2

        echo $xorlog, "<br>";
        echo $orlog, "<br>";
        echo $andlog, "<br>";

        $despizq=4;
        $despder=4;

        $despder >>= 3; // Desplazamos 3 bits a la derecha, de 10 a 0.01
        $despizq <<= 3;// Desplazamos 3 bits a la derecha, de 10 a 10000

        echo $despder, "<br>";
        echo $despizq, "<br>";

    ?>
</body>
</html>