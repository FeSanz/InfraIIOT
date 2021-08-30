<?php

require_once 'db_operations_fills.php';

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

#Si contienen la clave api_fills
if (isset($_GET['api_fills'])) 
{
    #Dependiendo del valor de la clave se llamará una operación de BD
    switch ($_GET['api_fills']) 
    {
        #Obtiene los parametros de llanado para dasboards
        case 'get_fill_interval':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['fillsInterval'] = $db->getFillInterval($_GET['startDate'], $_GET['endDate'], $_GET['idEquipo']);
        break;
    
         #Obtiene la temperatura, presion y llenado en tiempo real
        case 'get_current_fill':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['currentFill'] = $db->getCurrentFill($_GET['idEquipo']);
        break;
        
        /*
        #Obtiene la lista de alarmas disparadas
        case 'get_alarm_list':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['alarmList'] = $db->getAlarmList($_GET['startDate'], $_GET['endDate']);
        break;

        #Obtiene la lista de alarmas por grupo
        case 'get_alarm_groups':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['alarmGroups'] = $db->getAlarmGroups($_GET['startDate'], $_GET['endDate']);
        break;
            */
        case 'get_alarm_notification':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['notification'] = $db->getDataNotifications();
        break;
    }
} 
else 
{
    $response['error'] = true;
    $response['message'] = 'Clave invalida al llamar al API';
}
echo json_encode($response);

