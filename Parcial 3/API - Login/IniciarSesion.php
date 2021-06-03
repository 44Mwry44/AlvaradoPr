<?php
    include "cors.php";
    include "funciones.php";
    $user = $_GET["user"];
    $pass = $_GET["pass"];
    $dato = IniciarSesion($user, $pass);;
    echo ($dato);
?>