<?php
 
class OperationsNotificaciones
{
    private $con;
 
    function __construct()
    {
        require_once dirname(__FILE__) . '/db_connect.php';
        $db = new DatabaseConnect();
        $this->con = $db->connect();
    }
    function getNotificaciones()
    {

       $sqlNotificaciones = $this->con->prepare("
       SELECT alarmas.fecha, equipos.nombre, alarma_tipo.nombre 
       FROM alarmas, equipos, alarma_tipo 
       WHERE alarmas.equipo = equipos.id AND alarmas.alarma_tipos = alarma_tipo.id AND alarmas.status = 1 ");
       $sqlNotificaciones->execute();
       $sqlNotificaciones->bind_result($fecha,$nombre_equipo, $nombre_alarma);

       $fill_json = array(); 

       while($sqlNotificaciones->fetch())
       {
          $fill_array  = array();
          $fill_array['fecha'] = $fecha;  
          $fill_array['nombre_equipo'] = $nombre_equipo; 
          $fill_array['nombre_alarma'] = $nombre_alarma;

          array_push($fill_json, $fill_array); 
       }

       return $fill_json; 
    }

    function onViewNotification($id){
        $fill_json_view = array(); 
        $sqlViewNotification = $this->con->prepare("
        UPDATE alarmas SET alarmas.status = 0 WHERE alarmas.id = " .$id );
        $sqlViewNotification->execute();
        $fill_array_view = array();
        $fill_array_view['error'] = false;
        $fill_array_view['mensaje'] = ' Actualización Realizada';
        array_push($fill_json_view, $fill_array_view);

        return $fill_json_view;
    }
}