<?php
    require("config.php");
    
    $UserID = filter_input(INPUT_POST, 'UserID');
    $ManagerID = filter_input(INPUT_POST, 'ManagerID');
    $Justification = filter_input(INPUT_POST, 'Justification');
    $Replace = filter_input(INPUT_POST, 'Replace');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[Keyfob] (UserID, ManagerID, Justification, Replace) "
                ."VALUES ('$UserID', '$ManagerID', '$Justification', '$Replace')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);