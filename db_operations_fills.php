<?php
 
class OperationsFills
{
    private $con;
 
    function __construct()
    {
        require_once dirname(__FILE__) . '/db_connect.php';
        $db = new DatabaseConnect();
        $this->con = $db->connect();
    }
 
    function getFillInterval($startDate, $endDate, $id_equipo)
    {
       //intervalo de fechas temporales        
       $sqlFill = $this->con->prepare("
           SELECT llenados.id, llenados.fecha, llenados.porcentaje, llenados.presion, llenados.temperatura, cilindros.tipo, equipos.nombre, operadores.nombre 
           FROM llenados, cilindros, equipos, operadores 
           WHERE llenados.cilindro=cilindros.id 
           AND llenados.equipo=equipos.id 
           AND llenados.operador=operadores.id 
           AND llenados.fecha 
           BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59' AND equipos.id =".$id_equipo);
       $sqlFill->execute();
       $sqlFill->bind_result($id, $fecha, $porcentaje, $presion, $temperatura, $cilindroTipo, $equipoNombre, $operadorNombre);

       $fill_json = array(); 

       while($sqlFill->fetch())
       {
          $fill_array  = array();
          $fill_array['id'] = $id;  
          $fill_array['fecha'] = $fecha; 
          $fill_array['porcentaje'] = $porcentaje;
          $fill_array['presion'] = $presion; 
          $fill_array['temperatura'] = $temperatura;
          $fill_array['cilindroTipo'] = $cilindroTipo;
          $fill_array['equipoNombre'] = $equipoNombre;
          $fill_array['operadorNombre'] = $operadorNombre;

          array_push($fill_json, $fill_array); 
       }

       return $fill_json; 
    }
    
    function getCurrentFill($id_equipo)
    {        
       $sqlCurrentFill = $this->con->prepare("SELECT llenados.temperatura, llenados.presion, llenados.porcentaje
                                                FROM llenados, equipos 
                                                WHERE llenados.equipo=equipos.id 
                                                AND llenados.id= (SELECT MAX(id) FROM (SELECT * FROM llenados WHERE equipo = ".$id_equipo.") llenados)");
       $sqlCurrentFill->execute();
       $sqlCurrentFill->bind_result($temperature, $presion, $percentage);

       $current_fill_json = array(); 

       while($sqlCurrentFill->fetch())
       {
          $current_fill  = array();
          $current_fill['temperatura'] = $temperature;  
          $current_fill['presion'] = $presion; 
          $current_fill['porcentaje'] = $percentage;

          array_push($current_fill_json, $current_fill); 
       }

       return $current_fill_json; 
    }
   
   function getDataNotifications()
    {       
       $sqlNotifications = $this->con->prepare("
            SELECT alarmas.id, alarmas.fecha, equipos.nombre, alarma_tipo.nombre 
            FROM alarmas, equipos, alarma_tipo 
            WHERE alarmas.equipo = equipos.id 
            AND alarmas.alarma_tipos = alarma_tipo.id 
            AND alarmas.`status` = 1");
       $sqlNotifications->execute();
       $sqlNotifications->bind_result($id, $fecha, $nombreEquipo, $alarmaTipo);

       $notifications_json = array(); 

       while($sqlNotifications->fetch())
       {
          $notifications_array  = array();
          $notifications_array['id'] = $id;  
          $notifications_array['fecha'] = $fecha; 
          $notifications_array['nombreEquipo'] = $nombreEquipo;
          $notifications_array['alarmaTipo'] = $alarmaTipo; 


          array_push($notifications_json, $notifications_array); 
       }

       return $notifications_json; 
    }
}