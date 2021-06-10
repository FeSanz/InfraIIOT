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

if (isset($_GET['api_fills'])) 
{
    switch ($_GET['api_fills']) 
    {
        case 'get_fill_interval':
            $db = new OperationsFills();
            $response['error'] = false;
            $response['message'] = 'Solicitud completada exitosamente';
            $response['fillsInterval'] = $db->getFillInterval($_GET['startDate'], $_GET['endDate']);
        break;
    }
} 
else 
{
    $response['error'] = true;
    $response['message'] = 'Invalido al llamar API';
}
echo json_encode($response);

