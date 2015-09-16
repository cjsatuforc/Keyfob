<?php
    require("config.php");
    
    $MgrEmail = filter_input(INPUT_POST, 'MgrEmail');
    
    $query = "SELECT ManagerID FROM [IVCKEY].[dbo].[Manager] WHERE MgrEmail = '".$MgrEmail."'";
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetch();

    echo json_encode($data['ManagerID']);