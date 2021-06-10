<?php
    include "cors.php";
    include "funciones.php";
    $user = $_GET["user"];
    $dato = EliminarUsuario($user);
    echo $dato;
?>