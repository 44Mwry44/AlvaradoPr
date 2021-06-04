<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON encode y decode</title>
</head>
<body>
    <?php
        $stringJSON = '{"Nombres": "Nombre_Generico", "ApellidoMaterno": "ApellidoM", "ApellidoPaterno": "ApellidoP", "UserName": "Usuario123"}';

        $json = json_decode($stringJSON);

        printf("json_decode<br>");
        printf("<b>Nombre <t> = </b> %s <br>",$json->{'Nombres'});
        printf("<b>Apellido Materno = </b> %s <br>",$json->{'ApellidoMaterno'});
        printf("<b>Apellido Paterno = </b> %s <br>",$json->{'ApellidoPaterno'});
        printf("<b>User Name = </b> %s <br>",$json->{'UserName'});
        printf("<br><br><br>");

        $json->{'Nombres'} = "Nuevo Nombre";

        printf("json_encode<br>");
        $json = json_encode($json);

        echo $json;
    ?> 
</body>
</html>