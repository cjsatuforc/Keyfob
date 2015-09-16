<?php
    require("config.php");
    
    $MgrName = filter_input(INPUT_POST, 'MgrName');
    $MgrEmail = filter_input(INPUT_POST, 'MgrEmail');
    $MgrTitle = filter_input(INPUT_POST, 'MgrTitle');
    $MgrPhone = filter_input(INPUT_POST, 'MgrPhone');
    $Department = filter_input(INPUT_POST, 'Department');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[Manager] (MgrName, MgrEmail, MgrTitle, MgrPhone, Department) "
                ."VALUES ('$MgrName', '$MgrEmail', '$MgrTitle', '$MgrPhone', '$Department')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);