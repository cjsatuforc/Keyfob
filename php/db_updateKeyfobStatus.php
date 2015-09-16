<?php
    require("config.php");
    
    $KeyfobID = filter_input(INPUT_POST, 'KeyfobID');
    $StatusID = filter_input(INPUT_POST, 'StatusID');

    $query = "UPDATE [IVCKEY].[dbo].[Keyfob] "
            ."SET StatusID = '".$StatusID."' "
            ."WHERE KeyfobID = '".$KeyfobID."'";
    
    $cmd = $dbConn->prepare($query);
    $result = $cmd->execute(); 

    echo json_encode($result);