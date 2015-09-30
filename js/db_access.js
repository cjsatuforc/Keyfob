////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get AD login info ///////////////////////////////////////////////////////////
function getLoginUserInfo(php_file, user, pass) {
    var result = new Array();
    $.ajax({
        type:"POST",
        datatype:"json",
        url:php_file,
        data:{username:user, password:pass},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get DB //////////////////////////////////////////////////////////////////////
function db_getBuildingList() {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getBuildingList.php",
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getRoomListByBuildingID(BuildingID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getRoomListByBuildingID.php",
        data:{BuildingID:BuildingID},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getETypeID(EType) {
    var result;
    $.ajax({
        type:"POST",
        url:"php/db_getETypeID.php",
        data:{EType:EType},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getUserID(UserEmail) {
    var result;
    $.ajax({
        type:"POST",
        url:"php/db_getUserID.php",
        data:{UserEmail:UserEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getManagerID(MgrEmail) {
    var result;
    $.ajax({
        type:"POST",
        url:"php/db_getManagerID.php",
        data:{MgrEmail:MgrEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// insert DB ///////////////////////////////////////////////////////////////////
function db_insertUser(EmployeeID, ETypeID, UserName, UserEmail, UserTitle, Phone, Department) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertUser.php",
        data:{EmployeeID:EmployeeID, ETypeID:ETypeID, UserName:UserName, UserEmail:UserEmail, UserTitle:UserTitle, Phone:Phone, Department:Department},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertManager(MgrName, MgrEmail, MgrTitle, MgrPhone, Department) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertManager.php",
        data:{MgrName:MgrName, MgrEmail:MgrEmail, MgrTitle:MgrTitle, MgrPhone:MgrPhone, Department:Department},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertKeyfob(UserID, ManagerID, Justification, Replace) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertKeyfob.php",
        data:{UserID:UserID, ManagerID:ManagerID, Justification:Justification, Replace:Replace},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertLocation(KeyfobID, BuildingID, RoomID, KeyNum) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertLocation.php",
        data:{KeyfobID:KeyfobID, BuildingID:BuildingID, RoomID:RoomID, KeyNum:KeyNum},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

// update DB ///////////////////////////////////////////////////////////////////
function db_updateUser(UserID, EmployeeID, ETypeID, UserName, UserEmail, UserTitle, Phone, Department) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateUser.php",
        data:{UserID:UserID, EmployeeID:EmployeeID, ETypeID:ETypeID, UserName:UserName, UserEmail:UserEmail, UserTitle:UserTitle, Phone:Phone, Department:Department},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

function db_updateKeyfob(KeyfobID, StatusID, UserID, ManagerID, CreateDate, Justification, Replace) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateKeyfob.php",
        data:{KeyfobID:KeyfobID, StatusID:StatusID, UserID:UserID, ManagerID:ManagerID, CreateDate:CreateDate, Justification:Justification, Replace:Replace},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

function db_updateKeyfobStatus(KeyfobID, StatusID) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateKeyfobStatus.php",
        data:{KeyfobID:KeyfobID, StatusID:StatusID},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

function db_updateLocation(LocationID, KeyfobID, BuildingID, RoomID, KeyNum) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateLocation.php",
        data:{LocationID:LocationID, KeyfobID:KeyfobID, BuildingID:BuildingID, RoomID:RoomID, KeyNum:KeyNum},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

// upload attach file //////////////////////////////////////////////////////////
//function uploadAttachFile(file_data) {
//    var Result = "";
//    $.ajax({  
//        url: "php/upload_attach_file.php",  
//        type: "POST",  
//        data: file_data,
//        processData: false,  
//        contentType: false,  
//        async: false,
//        success:function(data) {
//            Result = JSON.parse(data);
//        }  
//    });
//    return Result;
//}