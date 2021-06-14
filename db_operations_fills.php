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
 
    function getFillInterval($startDate, $endDate)
    {
       //intervalo de fechas temporales
        $startDate = "2019-03-15";
        $endDate = "2019-03-15";
        
       $sqlFill = $this->con->prepare("
           SELECT llenados.id, llenados.fecha, llenados.porcentaje, llenados.presion, llenados.temperatura, cilindros.tipo, equipos.nombre, operadores.nombre 
           FROM llenados, cilindros, equipos, operadores 
           WHERE llenados.cilindro=cilindros.id 
           AND llenados.equipo=equipos.id 
           AND llenados.operador=operadores.id 
           AND llenados.fecha 
           BETWEEN '".$startDate." 00:00:01' AND '". $endDate." 23:59:59'");
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

   function getAlarmList($startDate, $endDate)
   {
      //intervalo de fechas temporales
      $startDate = "2019-03-14";
      $endDate = "2019-03-19";
      
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
       //intervalo de fechas temporales
        $startDate = "2019-03-15";
        $endDate = "2019-03-19";
        
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
}