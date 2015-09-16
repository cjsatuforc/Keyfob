<?php
    require("config.php");
    
    $EType = filter_input(INPUT_POST, 'EType');
    
    $query = "SELECT ETypeID FROM [IVCKEY].[dbo].[EType] WHERE EType = '".$EType."'";
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetch();

    echo json_encode($data['ETypeID']);