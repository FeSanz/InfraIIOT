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

    function getNumberNotifications()
    {

        $sqlNotifications = $this->con->prepare("Select count(*) from alarmas where STATUS = 1");
        $sqlNotifications->execute();
        $sqlNotifications->bind_result($number);

        $number_json = array();

        while ($sqlNotifications->fetch()) {
            $number_array  = array();
            $number_array['number'] = $number;

            array_push($number_json, $number_array);
        }

        return $number_json;
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

        while ($sqlNotifications->fetch()) {
            $notifications_array  = array();
            $notifications_array['id'] = $id;
            $notifications_array['fecha'] = $fecha;
            $notifications_array['nombreEquipo'] = $nombreEquipo;
            $notifications_array['alarmaTipo'] = $alarmaTipo;

            array_push($notifications_json, $notifications_array);
        }

        return $notifications_json;
    }
    function onViewNotification($id)
    {
        $fill_json_view = array();
        $sqlViewNotification = $this->con->prepare("
        UPDATE alarmas SET alarmas.status = 0 WHERE alarmas.id = " . $id);
        $sqlViewNotification->execute();
        $fill_array_view = array();
        $fill_array_view['error'] = false;
        $fill_array_view['mensaje'] = ' Actualización Realizada';
        array_push($fill_json_view, $fill_array_view);

        return $fill_json_view;
    }
}
