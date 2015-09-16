<?php
    require("config.php");
    
    $UserID = filter_input(INPUT_POST, 'UserID');
    $EmployeeID = filter_input(INPUT_POST, 'EmployeeID');
    $ETypeID = filter_input(INPUT_POST, 'ETypeID');
    $UserName = filter_input(INPUT_POST, 'UserName');
    $UserEmail = filter_input(INPUT_POST, 'UserEmail');
    $UserTitle = filter_input(INPUT_POST, 'UserTitle');
    $Phone = filter_input(INPUT_POST, 'Phone');
    $Department = filter_input(INPUT_POST, 'Department');

    $query = "UPDATE [IVCKEY].[dbo].[User] "
            ."SET EmployeeID = '".$EmployeeID."', ETypeID = '".$ETypeID."', UserName = '".$UserName."', "
            . "UserEmail = '".$UserEmail."', UserTitle = '".$UserTitle."', Phone = '".$Phone."', Department = '".$Department."' "
            ."WHERE UserID = '".$UserID."'";
    
    $cmd = $dbConn->prepare($query);
    $result = $cmd->execute(); 

    echo json_encode($result);