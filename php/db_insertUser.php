<?php
    require("config.php");
    
    $EmployeeID = filter_input(INPUT_POST, 'EmployeeID');
    $ETypeID = filter_input(INPUT_POST, 'ETypeID');
    $UserName = filter_input(INPUT_POST, 'UserName');
    $UserEmail = filter_input(INPUT_POST, 'UserEmail');
    $UserTitle = filter_input(INPUT_POST, 'UserTitle');
    $Phone = filter_input(INPUT_POST, 'Phone');
    $Department = filter_input(INPUT_POST, 'Department');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[User] (EmployeeID, ETypeID, UserName, UserEmail, UserTitle, Phone, Department) "
                ."VALUES ('$EmployeeID', '$ETypeID', '$UserName', '$UserEmail', '$UserTitle', '$Phone', '$Department')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);