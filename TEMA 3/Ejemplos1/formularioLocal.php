<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

            <form action="formularioLocal.php" method="POST">
                <label for="usuario">Usuario: </label>
                <input type="text" name="usuario"> <br>
                <label for="contra">Contraseña: </label>
                <input type="password" name="contra"> <br>
                <input type="submit" value="Enviar"> <br>
            </form>

  <?php      
                if( isset($_POST["usuario"])==true && $_POST["contra"]==true){
                    
                    $nombre=$_POST["usuario"];
                    $contra=$_POST["contra"];
                    if( $nombre!="Admin" && $contra!="1234" ){
                        echo "Usuario no valido";

                    }else{
                        echo "Bienvenido Admin";
                    }
                }else{
                    echo "No se ha introducido el usuario";
                }
                
            
     ?>
</body>
</html>