<?php
    require("config.php");
    
    $StatusID = filter_input(INPUT_POST, 'StatusID');
    $UserID = filter_input(INPUT_POST, 'UserID');
    $ManagerID = filter_input(INPUT_POST, 'ManagerID');
    $CreateDate = filter_input(INPUT_POST, 'CreateDate');
    $Justification = filter_input(INPUT_POST, 'Justification');
    $ReplaceKey = filter_input(INPUT_POST, 'ReplaceKey');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[Keyfob] (StatusID, UserID, ManagerID, CreateDate, Justification, ReplaceKey) "
                ."VALUES ('$StatusID', '$UserID', '$ManagerID', '$CreateDate', '$Justification', '$ReplaceKey')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);