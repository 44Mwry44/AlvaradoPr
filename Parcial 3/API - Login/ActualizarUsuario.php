<?php
    include "cors.php";
    include "funciones.php";
    $user = $_GET["user"];
    $nombre = $_GET["nombre"];
    $apellidoM = $_GET["apellidoM"];
    $apellidoP = $_GET["apellidoP"];
    $edad = $_GET["edad"];
    $genero = $_GET["genero"];
    $dato = ActualizarUsuario($user, $nombre, $apellidoM, $apellidoP, $edad, $genero);
    echo $dato;
?>