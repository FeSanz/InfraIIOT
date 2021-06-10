<?php

class DatabaseConnect 
{
    private $con;

    function __construct() { }

    function connect() 
    {
        include_once dirname(__FILE__) . '/db_constants.php';
        $this->con = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (mysqli_connect_errno()) 
        {
            echo "Falla al conectar con MySQL: " . mysqli_connect_error();
        } 
        return $this->con;
    }

}
