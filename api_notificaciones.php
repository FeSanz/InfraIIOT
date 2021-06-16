<?php

require_once 'db_operations_notificaciones.php';

function isTheseParametersAvailable($params) { 
    $available = true;
    $missingparams = "";

    foreach ($params as $param) {
        if (!isset($_POST[$param]) || strlen($_POST[$param]) <= 0) {
            $available = false;
            $missingparams = $missingparams . ", " . $param;
        }
    }
    if (!$available) {
        $response = array();
        $response['error'] = true;
        $response['message'] = 'Parameters ' . substr($missingparams, 1, strlen($missingparams)) . ' missing';
        echo json_encode($response);
        die();
    }
}

$response = array();

if (isset($_GET['api_notificaciones'])) 
{
    switch ($_GET['api_notificaciones']) 
    {
        case 'get_notificaciones':
            $db = new OperationsNotificaciones();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['notificaciones'] = $db->getNotificaciones();
        break;
    }
}

if(isset($_POST['notification_view'])){
    switch($_POST['notification_view'])
    {
        case 'view':
            $db = new OperationsNotificaciones();
            $response['status'] = $db->onViewNotification($_POST['ID']);
            break;

    }
}
else 
{
    $response['error'] = true;
    $response['message'] = 'Invalido al llamar API';
}
echo json_encode($response);

