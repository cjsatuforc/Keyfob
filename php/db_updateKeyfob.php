<?php
    require("config.php");
    
    $KeyfobID = filter_input(INPUT_POST, 'KeyfobID');
    $StatusID = filter_input(INPUT_POST, 'StatusID');
    $UserID = filter_input(INPUT_POST, 'UserID');
    $ManagerID = filter_input(INPUT_POST, 'ManagerID');
    $CreateDate = filter_input(INPUT_POST, 'CreateDate');
    $Justification = filter_input(INPUT_POST, 'Justification');
    $ReplaceKey = filter_input(INPUT_POST, 'ReplaceKey');

    $query = "UPDATE [IVCKEY].[dbo].[Keyfob] "
            ."SET StatusID = '".$StatusID."', UserID = '".$UserID."', ManagerID = '".$ManagerID."', "
            ."CreateDate = '".$CreateDate."', Justification = '".$Justification."', ReplaceKey = '".$ReplaceKey."', DTStamp = getdate() "
            ."WHERE KeyfobID = '".$KeyfobID."'";
    
    $cmd = $dbConn->prepare($query);
    $result = $cmd->execute(); 

    echo json_encode($result);