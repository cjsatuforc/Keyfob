<?php
    require("config.php");
    
    $KeyfobID = filter_input(INPUT_POST, 'KeyfobID');
    $BuildingID = filter_input(INPUT_POST, 'BuildingID');
    $RoomID = filter_input(INPUT_POST, 'RoomID');
    $KeyNum = filter_input(INPUT_POST, 'KeyNum');
    
    $query = "INSERT INTO [IVCKEY].[dbo].[Location] (KeyfobID, BuildingID, RoomID, KeyNum) "
                ."VALUES ('$KeyfobID', '$BuildingID', '$RoomID', '$KeyNum')";  
    
    $cmd = $dbConn->prepare($query);
    $cmd->execute();
    $ResultID = $dbConn->lastInsertId();

    echo json_encode($ResultID);