<?php
    require("config.php");
    
    $StatusID = filter_input(INPUT_POST, 'StatusID');
    $UserID = filter_input(INPUT_POST, 'UserID');
    $ManagerID = filter_input(INPUT_POST, 'ManagerID');
    $CreateDate = filter_input(INPUT_POST, 'CreateDate');
    $Justification = filter_input(INPUT_POST, 'Justification');
    $Replace = filter_input(INPUT_POST, 'Replace');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[Keyfob] (StatusID, UserID, ManagerID, CreateDate, Justification, Replace) "
                ."VALUES ('$StatusID', $UserID', '$ManagerID', '$CreateDate', '$Justification', '$Replace')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);