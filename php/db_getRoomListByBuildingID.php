<?php
    require("config.php");
    
    $BuildingID = filter_input(INPUT_POST, 'BuildingID');
    
    $query = "SELECT * FROM [IVCKEY].[dbo].[Room] WHERE BuildingID = '".$BuildingID."' ORDER BY Room ASC";
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetchAll();
    
    echo json_encode($data);