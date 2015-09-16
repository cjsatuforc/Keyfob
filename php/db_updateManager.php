<?php
    require("config.php");
    
    $ManagerID = filter_input(INPUT_POST, 'ManagerID');
    $MgrName = filter_input(INPUT_POST, 'MgrName');
    $MgrEmail = filter_input(INPUT_POST, 'MgrEmail');
    $MgrTitle = filter_input(INPUT_POST, 'MgrTitle');
    $MgrPhone = filter_input(INPUT_POST, 'MgrPhone');
    $Department = filter_input(INPUT_POST, 'Department');

    $query = "UPDATE [IVCKEY].[dbo].[Manager] "
            ."SET MgrName = '".$MgrName."', MgrEmail = '".$MgrEmail."', MgrTitle = '".$MgrTitle."', MgrPhone = '".$MgrPhone."', Department = '".$Department."' "
            ."WHERE ManagerID = '".$ManagerID."'";
    
    $cmd = $dbConn->prepare($query);
    $result = $cmd->execute(); 

    echo json_encode($result);