<?php
    require("config.php");
    
    $UserID = filter_input(INPUT_POST, 'UserID');

    $query = "SELECT kyfb.KeyfobID, urif.UserName, kyfb.CreateDate, stus.Status "
            . "FROM [IVCKEY].[dbo].[Keyfob] AS kyfb LEFT JOIN [IVCKEY].[dbo].[Status] AS stus ON kyfb.StatusID = stus.StatusID "
            . "LEFT JOIN [IVCKEY].[dbo].[User] AS urif ON kyfb.UserID = urif.UserID "
            . "WHERE urif.UserID = '".$UserID."' AND kyfb.StatusID <> 8";

    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetchAll();

    echo json_encode($data);