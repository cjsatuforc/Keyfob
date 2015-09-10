<?php
    require("config.php");

    $query = "SELECT * FROM [IVCKEY].[dbo].[Building]";

    $cmd = $dbConn->prepare($query);
    $cmd->execute(); 
    $data = $cmd->fetchAll();

    echo json_encode($data);