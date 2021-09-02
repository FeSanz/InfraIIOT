<?php
 
class OperationsAlarms
{
    private $con;
 
    function __construct()
    {
        require_once dirname(__FILE__) . '/db_connect.php';
        $db = new DatabaseConnect();
        $this->con = $db->connect();
    }
 
   function getAlarmList($startDate, $endDate, $idEquipo)
   {
      $AlarmsSQL = $this->con->prepare("
         SELECT alarmas.fecha, equipos.nombre, alarma_tipo.nombre 
         FROM alarmas, equipos, alarma_tipo 
         WHERE alarmas.equipo = equipos.id 
         AND alarmas.alarma_tipos = alarma_tipo.id 
         AND alarmas.fecha BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59'
         AND equipos.id = ".$idEquipo.
         " ORDER BY alarmas.fecha");
      $AlarmsSQL->execute();
      $AlarmsSQL->bind_result($fecha, $equiposNombre, $alarmasNombre);

      $AlarmsJSON = array(); 

      while($AlarmsSQL->fetch())
      {
         $AlarmsArray  = array();
         $AlarmsArray['fecha'] = $fecha; 
         $AlarmsArray['equiposNombre'] = $equiposNombre;
         $AlarmsArray['alarmasNombre'] = $alarmasNombre;

         array_push($AlarmsJSON, $AlarmsArray); 
      }

      return $AlarmsJSON; 
   }

   function getAlarmGroups($startDate, $endDate, $idEquipo)
   {       
      $AlarmsSQL = $this->con->prepare("
         SELECT alarma_tipo.nombre, count(alarma_tipo.nombre) total 
         FROM alarmas, equipos, alarma_tipo 
         WHERE alarmas.equipo = equipos.id 
         AND alarmas.alarma_tipos = alarma_tipo.id 
         AND alarmas.fecha BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59' 
         AND equipos.id = ".$idEquipo.
         " GROUP BY alarma_tipo.nombre 
      ");

      $AlarmsSQL->execute();
      $AlarmsSQL->bind_result($nombre, $total);

      $AlarmsJSON = array(); 

      while($AlarmsSQL->fetch())
      {
         $AlarmsArray  = array();
         $AlarmsArray['nombre'] = $nombre; 
         $AlarmsArray['total'] = $total;

         array_push($AlarmsJSON, $AlarmsArray); 
      }

      return $AlarmsJSON; 
   }
}