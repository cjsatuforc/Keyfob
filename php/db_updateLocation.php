<?php
    require("config.php");
    
    $LocationID = filter_input(INPUT_POST, 'LocationID');
    $KeyfobID = filter_input(INPUT_POST, 'KeyfobID');
    $BuildingID = filter_input(INPUT_POST, 'BuildingID');
    $RoomID = filter_input(INPUT_POST, 'RoomID');
    $KeyNum = filter_input(INPUT_POST, 'KeyNum');

    $query = "UPDATE [IVCKEY].[dbo].[Location] "
            ."SET KeyfobID = '".$KeyfobID."', BuildingID = '".$BuildingID."', RoomID = '".$RoomID."', KeyNum = '".$KeyNum."' "
            ."WHERE LocationID = '".$LocationID."'";
    
    $cmd = $dbConn->prepare($query);
    $result = $cmd->execute(); 

    echo json_encode($result);