<?php
    require("config.php");
    
    $KeyfobID = filter_input(INPUT_POST, 'KeyfobID');
    
    $query = "SELECT * FROM [IVCKEY].[dbo].[Location] WHERE KeyfobID = '".$KeyfobID."'";

    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetchAll();

    echo json_encode($data);