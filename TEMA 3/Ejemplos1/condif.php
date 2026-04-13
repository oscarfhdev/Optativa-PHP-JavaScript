<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $var=false;
        
        // Esta es una forma de condicional
        if  ($var==true){
            echo "La sentencia es verdadera";
        }else{
            echo "La sentencia es falsa";
        }

        // Esta es la otra forma de condicional
        if($var==true):
            echo "La sentencia es verdadera";
        else:
            echo "La sentencia es falsa";
        endif

    ?>
</body>
</html>