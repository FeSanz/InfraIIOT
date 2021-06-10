<?php
class DbOperation
{
    private $con;
 
    function __construct()
    {
        require_once dirname(__FILE__) . '/dbconexion.php';
        $db = new DbConnect();
        $this->con = $db->connect();
    }
}