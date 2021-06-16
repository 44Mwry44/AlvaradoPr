<?php
    include "cors.php";
    include "funciones.php";
    $dato = ConsultarTodo();
    echo json_encode($dato); 
?>