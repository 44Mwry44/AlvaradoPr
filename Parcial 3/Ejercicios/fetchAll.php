<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba - fetchAll</title>
</head>
<body>
    <?php
    include "cors.php";
    include_once "funciones.php";
    $datos = ConsultarTodo();
    
    $json = json_encode($datos);
    $json = json_decode($json);
    $ContadorJSON = count($json);
    
    for($x = 0; $x < $ContadorJSON; $x = $x + 1)
    {
        printf("<b>Nombre <t> = </b> %s <br>",$json[$x]->{'Nombres'});
        printf("<b>Apellido Materno = </b> %s <br>",$json[$x]->{'ApellidoMaterno'});
        printf("<b>Apellido Paterno = </b> %s <br>",$json[$x]->{'ApellidoPaterno'});
        printf("<b>User Name = </b> %s <br>",$json[$x]->{'UserName'});
        printf("<br><br><br>");
    }
    

    ?>
    
</body>
</html>