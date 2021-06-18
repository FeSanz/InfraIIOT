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
 
   function getAlarmList($startDate, $endDate)
   {
      $AlarmsSQL = $this->con->prepare("
         SELECT alarmas.fecha, equipos.nombre, alarma_tipo.nombre 
         FROM alarmas, equipos, alarma_tipo 
         WHERE alarmas.equipo = equipos.id 
         AND alarmas.alarma_tipos = alarma_tipo.id 
         AND alarmas.fecha 
         BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59'
         ORDER BY alarmas.fecha");
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

   function getAlarmGroups($startDate, $endDate)
    {       
       $AlarmsSQL = $this->con->prepare("
            SELECT alarma_tipo.nombre, count(alarma_tipo.nombre) total 
            FROM alarmas, equipos, alarma_tipo 
            WHERE alarmas.equipo = equipos.id 
            AND alarmas.alarma_tipos = alarma_tipo.id 
            AND alarmas.fecha BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59' 
            GROUP BY alarma_tipo.nombre 
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
  
    /*
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
    */
}