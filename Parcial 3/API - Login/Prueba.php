<?php
    include "cors.php";
    include_once "funciones.php";
    $user = $_GET["user"];
    $pass = $_GET["pass"];
    $dato = IniciarSesion($user, $pass);
    echo ($dato);
?>