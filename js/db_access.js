// tardis get DB ///////////////////////////////////////////////////////////////
function tardis_getCurrentTerm() {
    var result = "";
    $.ajax({
        type:"POST",
        url:"php/tardis_getCurrentTerm.php",
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function tardis_getStudentCourseList(StudentID, TermCode) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/tardis_getStudentCourseList.php",
        data:{StudentID:StudentID, TermCode:TermCode},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get LDAP ////////////////////////////////////////////////////////////////////
function ldap_getUser(userID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/ldap_searchUser.php",
        data:{userID:userID},
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
function db_getAdmin(AdminEmail) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getAdmin.php",
        data:{AdminEmail:AdminEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getProctor(ProctorID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getProctor.php",
        data:{ProctorID:ProctorID},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getAccom(ProctorID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getAccom.php",
        data:{ProctorID:ProctorID},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getInstForm(ProctorID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getInstForm.php",
        data:{ProctorID:ProctorID},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getExamGuide(ProctorID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getExamGuide.php",
        data:{ProctorID:ProctorID},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getAdminProctorList() {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getAdminProctorList.php",
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getAdminProctorCompleteList() {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getAdminProctorCompleteList.php",
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getInstProctorList(InstEmail) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getInstProctorList.php",
        data:{InstEmail:InstEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getInstProctorCompleteList(InstEmail) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getInstructorProctorCompleteList.php",
        data:{InstEmail:InstEmail},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function db_getProctorLog(ProctorID) {
    var result = new Array();
    $.ajax({
        type:"POST",
        url:"php/db_getProctorLog.php",
        data:{ProctorID:ProctorID},
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
function db_insertProctor(StuName, StuEmail, StuID, InstName, InstEmail, CourseID, SectionNum, TestDate, TestTime, Comments) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertProctor.php",
        data:{StuName:StuName, StuEmail:StuEmail, StuID:StuID, InstName:InstName, InstEmail:InstEmail, CourseID:CourseID, 
                SectionNum:SectionNum, TestDate:TestDate, TestTime:TestTime, Comments:Comments},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertAccom(ProctorID, TimeOneHalf, DoubleTime, AltMedia, Reader, EnlargeExam, UseOfComp, Other, txtOther, Scribe, Scantron, WrittenExam, Distraction) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertAccom.php",
        data:{ProctorID:ProctorID, TimeOneHalf:TimeOneHalf, DoubleTime:DoubleTime, AltMedia:AltMedia, Reader:Reader, EnlargeExam:EnlargeExam, 
                UseOfComp:UseOfComp, Other:Other, txtOther:txtOther, Scribe:Scribe, Scantron:Scantron, WrittenExam:WrittenExam, Distraction:Distraction},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertInstForm(ProctorID, TAllotMin, Mailbox, Bldg, Faculty, Office, ScanEmail, SEDeliver, SEShred, ProfessorPU, StuDelivery) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertInstForm.php",
        data:{ProctorID:ProctorID, TAllotMin:TAllotMin, Mailbox:Mailbox, Bldg:Bldg, Faculty:Faculty, Office:Office, 
                ScanEmail:ScanEmail, SEDeliver:SEDeliver, SEShred:SEShred, ProfessorPU:ProfessorPU, StuDelivery:StuDelivery},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertExamGuide(ProctorID, Notes, Book, Calculator, CalType, Dictionary, ScratchPaper, Scantron, Computer, InternetAccess) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertExamGuide.php",
        data:{ProctorID:ProctorID, Notes:Notes, Book:Book, Calculator:Calculator, CalType:CalType, Dictionary:Dictionary, 
                ScratchPaper:ScratchPaper, Scantron:Scantron, Computer:Computer, InternetAccess:InternetAccess},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertTransaction(ProctorID, LoginName, Note) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertTransaction.php",
        data:{ProctorID:ProctorID, LoginName:LoginName, Note:Note},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

function db_insertProctorLog(ProctorID, LoginUser, StepID, StatusID) {
    var ResultID = "";
    $.ajax({
        type:"POST",
        url:"php/db_insertProctorLog.php",
        data:{ProctorID:ProctorID, LoginUser:LoginUser, StepID:StepID, StatusID:StatusID},
        async: false,  
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}

// update DB ///////////////////////////////////////////////////////////////////
function db_updateProctorStatus(ProctorID, StatusID, Column) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateProctorStatus.php",
        data:{ProctorID:ProctorID, StatusID:StatusID, Column:Column},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

function db_updateProctorStep(ProctorID, StepID, Column) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateProctorStep.php",
        data:{ProctorID:ProctorID, StepID:StepID, Column:Column},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

function db_updateProctorInstPhone(ProctorID, InstPhone) {
    var Result = false;
    $.ajax({
        type:"POST",
        url:"php/db_updateProctorInstPhone.php",
        data:{ProctorID:ProctorID, InstPhone:InstPhone},
        async: false,  
        success:function(data) {
            Result = JSON.parse(data);
        }
    });
    return Result;
}

// upload attach file //////////////////////////////////////////////////////////
function uploadAttachFile(file_data) {
    var Result = "";
    $.ajax({  
        url: "php/upload_attach_file.php",  
        type: "POST",  
        data: file_data,
        processData: false,  
        contentType: false,  
        async: false,
        success:function(data) {
            Result = JSON.parse(data);
        }  
    });
    return Result;
}