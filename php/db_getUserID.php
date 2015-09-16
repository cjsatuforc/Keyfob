<?php
    require("config.php");
    
    $UserEmail = filter_input(INPUT_POST, 'UserEmail');
    
    $query = "SELECT UserID FROM [IVCKEY].[dbo].[User] WHERE UserEmail = '".$UserEmail."'";
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetch();

    echo json_encode($data['UserID']);