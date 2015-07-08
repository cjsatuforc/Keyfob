<?php
    require("config.php");
    $output_dir = "C:/xampp/htdocs/DSPSProctor/attach_files/";

    if(isset($_FILES["files"]))
    {    
        $fileString = $_FILES["files"]["name"][0];
        
        $pos_1 = strpos($fileString, "_fileIndex_");
        $print_request_id = substr($fileString, 0, $pos_1);
        
        $file_name = substr($fileString, $pos_1 + 11);
        $file_link_name = $print_request_id . "_" . $file_name;

        $result = move_uploaded_file($_FILES["files"]["tmp_name"][0], $output_dir.$file_link_name);
        $AttachmentID = insertAttachToDB($dbConn, $proctor_id, $file_link_name, $file_name);

        echo json_encode($AttachmentID); 
    }
    
    function insertAttachToDB($dbConn, $proctor_id, $FileLinkName, $FileName) {        
        $query = "INSERT INTO [IVCDSPS].[dbo].[Attachment] "
                    ."(ProctorID, FileLinkName, FileName) "
                    ."VALUES ('$proctor_id', '$FileLinkName', '$FileName')";

        $cmd = $dbConn->prepare($query);
        $cmd->execute();
        $ResultID = $dbConn->lastInsertId();
        
        return $ResultID;
    }