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

    function obtenerConexion()
    {
        $password = "";
        $user = "root";
        $dbName = "MiPagina";
        $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
        $database->query("set names utf8;");
        $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $database;
    }
?>