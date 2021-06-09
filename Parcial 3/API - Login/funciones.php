<?php
    function ConsultarTodo()
    {
        $bd = obtenerConexion();
        $sentencia = $bd->query("SELECT * FROM Users");
        return $sentencia->fetchAll();
    }

    function ObtenerUsuario($user)
    {
        $bd = obtenerConexion();
        $sentencia = $bd->query("SELECT UserName from Users Where UserName = '".$user."'");
        if($sentencia->fetchObject())
        {
            return true;
        }
        return false;
    }

    function IniciarSesion($user, $pass)
    {
        $bd = obtenerConexion();
        $sentencia = $bd->query("SELECT UserName from UserPass Where UserName = '".$user."'and Pass = '" .$pass. "'");
        if($sentencia->fetchObject())
        {
            return true;
        }
        return false;
    }

    function CrearUsuario($user, $nombre, $apellidoM, $apellidoP, $edad, $genero, $pass)
    {
        $bd = new mysqli("localhost", "root", "", "AlvaradoPr");;
        if (mysqli_query($bd,"call Crear_Usuario('" .$user. "', '" .$nombre. "', '" .$apellidoM. "', '" .$apellidoP. "', " .$edad. ", '" .$genero. "', '" .$pass. "')", MYSQLI_USE_RESULT) === true)
        {
            echo true;
        }
        echo false;
    }

    function obtenerConexion()
    {
        $password = "";
        $user = "root";
        $dbName = "AlvaradoPr";
        $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
        $database->query("set names utf8;");
        $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $database;
    }

    function devolverSesion()
    {
        session_start();
        echo $_SESSION['miSesion'];
    }

    function eliminarSesion()
    {
        session_destroy();
    }
?>