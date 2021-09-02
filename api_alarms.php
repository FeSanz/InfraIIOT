<?php

require_once 'db_operations_alarms.php';

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

function areTheseParametersGETAvailable($params) { 
    $available = true;
    $missingparams = "";

    foreach ($params as $param) {
        if (!isset($_GET[$param]) || strlen($_GET[$param]) <= 0) {
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

#Si se llama a la api_alarms
if (isset($_GET['api_alarms'])) 
{
    #Dependiendo del valor de la clave se llamará una operación de BD
    switch ($_GET['api_alarms']) 
    {   
        #Obtiene la lista de alarmas disparadas
        case 'get_alarm_list':
            //first check the parameters required for this request are available or not 
			areTheseParametersGETAvailable(array('startDate','endDate','idEquipo'));
            $db = new OperationsAlarms();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['alarmList'] = $db->getAlarmList($_GET['startDate'], $_GET['endDate'], $_GET['idEquipo']);
        break;

        #Obtiene la lista de alarmas por grupo
        case 'get_alarm_groups':
            //first check the parameters required for this request are available or not 
			areTheseParametersGETAvailable(array('startDate','endDate','idEquipo'));
            $db = new OperationsAlarms();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['alarmGroups'] = $db->getAlarmGroups($_GET['startDate'], $_GET['endDate'], $_GET['idEquipo']);
        break;
    }
} 
else 
{
    $response['error'] = true;
    $response['message'] = 'Clave invalida al llamar al API';
}
echo json_encode($response);

